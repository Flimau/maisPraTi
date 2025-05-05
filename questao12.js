const prompt = require("prompt-sync")();
const numero = prompt("Digite um número: ");
console.log(`Tabuada do ${numero}`);

for (let i = 0; i <= 10; i++) {
  console.log(`${i} X ${numero} = ${i * numero}`);
}
