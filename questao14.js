const prompt = require("prompt-sync")();
const numero = Number.parseInt(
  prompt("Digite um número para calcular o fatorial: ")
);
let fatorial = 1;

for (let i = numero; i >= 1; i--) {
  fatorial *= i;
  console.log(`${i} * ${fatorial / i} = ${fatorial}`);
}

console.log(`O fatorial de ${numero} é ${fatorial}.`);
