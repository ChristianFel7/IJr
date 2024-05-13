import { Data } from "../model/interfaceData.js";
import estoqueService from "../service/serviceEstoque.js";


const estoqueServiceInstance = new estoqueService();


export async function adicionarProduto(data: Data) {
    try{
        await estoqueServiceInstance.criar(data)
        console.log("Produto adicionado com sucesso");
    } 
    catch(error){
        console.log("Erro ao adicionar produto: ", error);
    }
    
}

  
