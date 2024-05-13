import * as fs from 'fs';
import csv from 'csv-parser';
const readCSV = async (filePath) => {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv({
            headers: ['name', 'value', 'weight', 'qtd'] // Substitua pelos seus cabeçalhos
        }))
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
};
export default readCSV;
