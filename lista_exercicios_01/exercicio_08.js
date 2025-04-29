/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

const prompt = require("prompt-sync")();

const valorUm = prompt("Digite o primeiro valor: ");
const valorDois = prompt("Digite o segundo valor: ");

if (valorUm < valorDois) {
  console.log(`Os valores em ordem crescente são: ${valorUm} e ${valorDois}`);
  return;
}
console.log(`Os valores em ordem crescente são: ${valorDois} e ${valorUm}`);
