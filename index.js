import readCSV from "./model/readCSV.js";
import { adicionarProduto } from "./controller/controleEstoque.js";
import checkNameExists from "./model/checkNameCSV.js";
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });
const filePath = "./model/estoque.csv";
let nomeExiste = true;
function mostrarMenu() {
    return `
  ===== Menu de Opções =====
  1. Adicionar Produto ao inventário
  2. Remover produto do inventário
  3. Listar itens do inventário
  4. Ver Valor Total do Inventário
  5. Ver Peso Total do Inventário
  6. Calcular Média de Valor dos Itens
  7. Calcular Média de Peso dos Itens
  8. Ver Quantidade Total de Itens no Inventário
  9. Ver Quantidade Total de Produtos no Inventário
  0. Sair
  `;
}
console.log(mostrarMenu());
var entrada = prompt('Digite a ação desejada: ');
var W = parseInt(entrada, 10);
switch (W) {
    case 1:
        while (nomeExiste) {
            var X = prompt('Digite o nome do produto: ');
            try {
                nomeExiste = await checkNameExists(filePath, X);
                if (nomeExiste) {
                    console.log("Este nome de produto já existe. Escolha outro nome.");
                }
            }
            catch (error) {
                break;
            }
        }
        var Y = prompt('Digite o peso do produto [em kg]: ');
        var Z = prompt('Digite o valor do produto: ');
        var Q = prompt('Digite a quantidade do produto: ');
        const dados = {
            name: X,
            weight: parseFloat(Y),
            value: parseFloat(Z),
            qtd: parseInt(Q, 10)
        };
        adicionarProduto(dados);
        break;
    case 2:
        break;
    case 3:
        const main = async () => {
            try {
                const data = await readCSV(filePath);
                console.log(data);
            }
            catch (error) {
                console.error('Erro:', error);
            }
        };
        main();
    case 4:
        break;
    case 5:
        break;
    case 6:
        break;
    case 7:
        break;
    case 8:
        break;
    case 9:
        break;
    case 0:
        break;
}
