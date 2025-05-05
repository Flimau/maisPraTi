const prompt = require("prompt-sync")();

const nota = Number(prompt("Digite a nota do aluno: "));

if(nota >= 0 && nota <= 10) {
    if(nota >= 0 && nota <= 4.9) {
        console.log("Reprovado");
    }else if(nota >= 5 && nota <= 6.9) {
        console.log("Recuperação");
    }else if(nota >= 7 && nota <= 10) {
        console.log("Aprovado");
    }
}else{
    console.log("Nota inválida. Digite uma nota entre 0 e 10.");
}