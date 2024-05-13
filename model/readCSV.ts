import * as fs from 'fs';
import csv from 'csv-parser';
import {Data} from "../model/interfaceData.js";


const readCSV = async (filePath: string): Promise<Data[]> => {
  return new Promise((resolve, reject) => {
    const results: Data[] = [];
    fs.createReadStream(filePath)
      .pipe(csv({
        headers: ['name', 'value', 'weight', 'qtd'] // Substitua pelos seus cabeçalhos
    }))
      .on('data', (data: Data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });  
};


export default readCSV;


