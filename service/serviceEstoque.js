import writeCSV from "../model/writeCSV.js";
const filePath = "./model/estoque.csv";
class InvalidProductDataError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidProductDataError";
    }
}
class estoqueService {
    async criar(data) {
        if (typeof data.name !== 'string' || isNaN(data.weight) || isNaN(data.value) || isNaN(data.qtd)) {
            throw new InvalidProductDataError("Dados inválidos para o produto");
        }
        else {
            await writeCSV(filePath, [data]);
        }
    }
}
export default estoqueService;
