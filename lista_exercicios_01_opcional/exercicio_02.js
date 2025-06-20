/*
2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h
-1
, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

const prompt = require("prompt-sync")();

const velocidade = parseFloat(prompt("Qual a velocidade do carro? "));
const velocidadePermitida = 80;

if (velocidade > velocidadePermitida) {
  const excesso = velocidade - velocidadePermitida;
  const multa = excesso * 5;
  console.log(`Você foi multado! O valor da multa é R$ ${multa.toFixed(2)}.`);
}
