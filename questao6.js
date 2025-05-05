const prompt = require("prompt-sync")();

const ladoA = Number.parseFloat(prompt("Digite o valor do lado A: "));
const ladoB = Number.parseFloat(prompt("Digite o valor do lado B: "));
const ladoC = Number.parseFloat(prompt("Digite o valor do lado C: "));

//A < B + C e B < A + C e C < A + B
const ehTriangulo =
  ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB;

if (ehTriangulo) {
  console.log("Os lados fornecidos formam um triângulo.");
  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("O triângulo é equilátero.");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("O triângulo é isósceles.");
  } else {
    console.log("O triângulo é escaleno.");
  }
}
