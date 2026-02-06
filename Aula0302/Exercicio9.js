let prompt = require('prompt-sync')();

let precoProduto = parseFloat(prompt("Digite o preço do produto: "));
let percentualDesconto = parseFloat(prompt("Digite o percentual de desconto(BRONZE,PRATA,OURO): "));

if (percentualDesconto === 'BRONZE') {
    let desconto = precoProduto * 0.05;
    let precoFinal = precoProduto - desconto;
    console.log(`O preço final com desconto é: R$ precoFinal`);
} else if (percentualDesconto === 'PRATA') {
    let desconto = precoProduto * 0.10;
    let precoFinal = precoProduto - desconto;
    console.log(`O preço final com desconto é: R$ precoFinal`);
} else if (percentualDesconto === 'OURO') {
    let desconto = precoProduto * 0.15;
    let precoFinal = precoProduto - desconto;
    console.log(`O preço final com desconto é: R$ precoFinal`);
}