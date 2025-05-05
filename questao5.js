//calc imc = peso / (altura * altura)
const prompt = require("prompt-sync")();

const peso = Number.parseFloat(prompt("Digite seu peso em kg: "));
const altura = Number.parseFloat(prompt("Digite sua altura em metros: "));

const imc = peso / (altura * altura);
console.log(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
  console.log("Você está abaixo do peso ideal.");
} else if (imc >= 18.5 && imc < 24.9) {
  console.log("Você está no peso ideal.");
} else if (imc >= 25 && imc < 29.9) {
  console.log("Você está acima do peso ideal.");
} else if (imc >= 30 && imc < 34.9) {
  console.log("Você está com obesidade grau 1.");
} else if (imc >= 35 && imc < 39.9) {
  console.log("Você está com obesidade grau 2.");
} else if (imc >= 40) {
  console.log("Você está com obesidade grau 3.");
}

//fonte dados imc(formula e faixas):
// https://www.tuasaude.com/calculadora/imc/
