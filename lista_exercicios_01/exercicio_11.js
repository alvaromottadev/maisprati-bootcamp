/*
11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.
*/

const prompt = require("prompt-sync")();

const numeros = [];

const primeiroNumero = prompt("Digite o primeiro número: ");
const segundoNumero = prompt("Digite o segundo número: ");
const terceiroNumero = prompt("Digite o terceiro número: ");
const quartoNumero = prompt("Digite o quarto número: ");
const quintoNumero = prompt("Digite o quinto número: ");
numeros.push(
  primeiroNumero,
  segundoNumero,
  terceiroNumero,
  quartoNumero,
  quintoNumero
);

calcularSoma(numeros);

function calcularSoma(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total += parseInt(numeros[i]);
  }
  console.log(`A soma total dos números é: ${total}`);
}
