/*
1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
 utilizando uma estrutura de controle if.
*/

function verificaParOuImpar(numero) {
  if (numero % 2 == 0) {
    console.log(`O número ${numero} é par.`);
  } else {
    console.log(`O número ${numero} é ímpar.`);
  }
}

verificaParOuImpar(10);
verificaParOuImpar(7);
