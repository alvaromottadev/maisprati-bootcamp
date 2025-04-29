/*
14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.
*/

const prompt = require("prompt-sync")();

const numero = prompt("Digite um número: ");

const fatorialPorLoop = calcularPorLoop(numero);
const fatorialPorWhile = calcularPorWhile(numero);

console.log(`Fatorial de ${numero} por loop: ${fatorialPorLoop}`);
console.log(`Fatorial de ${numero} por while: ${fatorialPorWhile}`);

function calcularPorLoop(numero) {
  let fatorial = 1;
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
}

function calcularPorWhile(numero) {
  let fatorial = 1;
  let i = 1;
  while (i <= numero) {
    fatorial *= i;
    i++;
  }
  return fatorial;
}
