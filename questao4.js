const prompt = require("prompt-sync")();

console.log(".-----Menu de opções:-----.");
console.log(".   1 - Criar usuário     .");
console.log(".   2 - Excluir usuário   .");
console.log(".   3 - Listar usuários   .");
console.log(".-------------------------.");

const opcao = Number(prompt("Escolha uma opção (1, 2 ou 3): "));

switch (opcao) {
  case 1:
    console.log("Você escolheu a opção 1!");
    console.log("Criar usuário.");
    break;
  case 2:
    console.log("Você escolheu a opção 2!");
    console.log("Excluir usuário!");
    break;
  case 3:
    console.log("Você escolheu a opção 3!");
    console.log("Listar usuários!");
    break;
  default:
    console.log("Opção inválida!");
    break;
}
