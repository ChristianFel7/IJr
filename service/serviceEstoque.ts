import { Data } from './../model/interfaceData.js';
import readCSV  from "../model/readCSV.js";


import writeCSV from "../model/writeCSV.js";


import fs from 'fs';

import { error } from "console";

const filePath = "./model/estoque.csv"  

class InvalidProductDataError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "InvalidProductDataError"; 
    }
  }

class estoqueService{
    async criar(data: Data) 
    {
        if(typeof data.name !== 'string' || isNaN(data.weight) || isNaN(data.value) || isNaN(data.qtd))
        {
            throw new InvalidProductDataError("Dados inválidos para o produto");
        }
        else{
            await writeCSV(filePath, [data]);
        }
    }







}

export default estoqueService;
