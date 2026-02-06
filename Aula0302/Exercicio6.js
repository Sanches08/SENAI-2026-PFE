let prompt = require('prompt-sync')();

let idade = parseInt(prompt("Digite a sua idade: "));

if (idade < 0) {
    console.log("Idade inválida.");
} else if (idade < 12) {
    console.log("Criança.");
} else if (idade >= 12 && idade < 18) {
    console.log("Adolescente.");
} else if (idade >= 18 && idade < 60) {
    console.log("Adulto.");
} else if (idade >= 60) {
    console.log("Idoso.");
}