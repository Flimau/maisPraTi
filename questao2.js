const prompt = require("prompt-sync")();

const idade = Number(prompt("Digite sua idade: "));

if (idade > 0 && idade <= 12) {
  console.log("Você é uma criança.");
} else if (idade >= 13 && idade < 18) {
  console.log("Você é um adolescente.");
} else if (idade >= 18 && idade <= 59) {
  console.log("Você é um adulto.");
} else if (idade >= 60) {
  console.log("Você é um idoso.");
}
