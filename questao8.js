const prompt = require("prompt-sync")();
const valor1 = Number.parseInt(prompt("Digite o primeiro valor: "));
const valor2 = Number.parseInt(prompt("Digite o segundo valor: "));
if (valor1 === valor2) {
  console.log("Valores não devem ser iguais.");
} else if (valor1 < valor2) {
  console.log(`Valores em ordem crescente: ${valor1}, ${valor2}`);
} else {
  console.log(`Valores em ordem crescente: ${valor2}, ${valor1}`);
}
