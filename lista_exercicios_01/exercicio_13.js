/*
13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

const prompt = require("prompt-sync")();

menu();

function menu() {
  const numeros = [];
  let numero = -1;
  while (numero != 0) {
    numero = prompt("Digite um número decimal (0 para sair): ");
    if (numero != 0) numeros.push(parseFloat(numero));
  }
  const media = calcularMedia(numeros);
  console.log(`A média aritmética dos números é: ${media}`);
}

function calcularMedia(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }
  console.log(total);
  console.log(numeros.length);
  return total / numeros.length;
}
