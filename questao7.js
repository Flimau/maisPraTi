const prompt = require("prompt-sync")();
const numeroMacas = Number.parseInt(
  prompt("Digite o número de maçãs compradas: ")
);
const precoPorMaca = numeroMacas < 12 ? 0.3 : 0.25;
const valorTotal = numeroMacas * precoPorMaca;

console.log(`Número de maçãs compradas: ${numeroMacas}`);
console.log(`Preço por maçã: R$ ${precoPorMaca.toFixed(2)}`);
console.log(`O valor total da compra é: R$ ${valorTotal.toFixed(2)}`);
