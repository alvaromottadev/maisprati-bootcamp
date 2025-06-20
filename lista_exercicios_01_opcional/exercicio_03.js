/*
3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.
*/

const prompt = require("prompt-sync")();

const distancia = parseFloat(prompt("Qual a distância da viagem em Km? "));
const precoPorKmCurto = 0.5;
const precoPorKmLongo = 0.45;

let preco = 0;

if (distancia <= 200) {
  preco = distancia * precoPorKmCurto;
} else {
  preco = distancia * precoPorKmLongo;
}

console.log(`O preço da passagem é R$ ${preco.toFixed(2)}.`);
