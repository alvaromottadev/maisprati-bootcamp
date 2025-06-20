/*
4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.
*/

const prompt = require("prompt-sync")();

const ladoA = parseFloat(prompt("Digite o comprimento do lado A: "));
const ladoB = parseFloat(prompt("Digite o comprimento do lado B: "));
const ladoC = parseFloat(prompt("Digite o comprimento do lado C: "));

podeFormarTriangulo(ladoA, ladoB, ladoC);

function podeFormarTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    console.log("Os segmentos podem formar um triângulo.");
  } else {
    console.log("Os segmentos não podem formar um triângulo.");
  }
}
