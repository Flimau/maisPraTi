const prompt = require("prompt-sync")();
const numero = Number.parseInt(prompt("Digite um número inteiro: "));

for (let i = 0; i < 10; i++) {
  console.log(` ${i + 1}ª vez - ${numero}`);
}
