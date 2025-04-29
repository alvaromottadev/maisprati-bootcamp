/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

const prompt = require("prompt-sync")();

const ladoA = parseFloat(prompt("Digite o valor do lado A: "));
const ladoB = parseFloat(prompt("Digite o valor do lado B: "));
const ladoC = parseFloat(prompt("Digite o valor do lado C: "));

verificarSeFormarTriangulo(ladoA, ladoB, ladoC);
verificarTipoTriangulo(ladoA, ladoB, ladoC);

function verificarSeFormarTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    console.log("Os lados fornecidos formam um triângulo.");
  }
}

function verificarTipoTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("O triângulo é equilátero.");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("O triângulo é isósceles.");
  } else {
    console.log("O triângulo é escaleno.");
  }
}
