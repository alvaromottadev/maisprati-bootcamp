/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

const prompt = require("prompt-sync")();

const quantidade = prompt("Digite a quantidade de maçãs compradas: ");

calcularTotal(quantidade);

function calcularTotal(quantidade) {
  if (quantidade < 12) {
    console.log(
      `O valor total da compra é R$ ${(quantidade * 0.3).toFixed(2)}`
    );
    return;
  }
  console.log(`O valor total da compra é R$ ${(quantidade * 0.25).toFixed(2)}`);
}
