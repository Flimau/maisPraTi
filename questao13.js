const prompt = require("prompt-sync")();
let qtdnumeros = 0;
let soma = 0;
let media = 0;
let numero = 0;

do {
  numero = Number.parseInt(prompt("Digite um número (0 para sair): "));
  if (numero !== 0) {
    soma += numero;
    qtdnumeros++;
  }
}while (numero !== 0);

media = soma / qtdnumeros;
console.log(`A média dos números digitados é: ${media}`);
