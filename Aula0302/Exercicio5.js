let prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));

if (numero1 > numero2) {
    console.log("O maior número é: " + numero1);
} else if (numero2 > numero1) {
    console.log("O maior número é: " + numero2);
} else if (numero1 === numero2) {
    console.log("Os números são iguais.");
} else if (numero1 == 0 || numero2 == 0) {
    console.log("O número zero não é permitido.");
}