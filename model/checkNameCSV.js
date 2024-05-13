import * as fs from 'fs';
import { parse } from 'csv-parse';
const checkNameExists = async (filePath, name) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                parse(data, {
                    columns: true,
                    skip_empty_lines: true,
                }, (err, records) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        const nameExists = records.some(record => {
                            if (record.name && name) {
                                record.name.toLowerCase() === name.toLowerCase();
                                resolve(nameExists);
                            }
                            console.log(name);
                            console.log(record);
                        });
                    }
                });
            }
        });
    });
};
export default checkNameExists;
