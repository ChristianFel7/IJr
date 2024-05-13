import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
const writeCSV = async (filePath, data) => {
    const csvWriter = createCsvWriter({
        path: filePath,
        header: [
            { id: 'name', title: 'NOME' },
            { id: 'value', title: 'VALOR' },
            { id: 'weight', title: 'PESO' },
            { id: 'qtd', title: 'QUANTIDADE' },
        ],
        append: true,
    });
    return csvWriter.writeRecords(data);
};
export default writeCSV;
