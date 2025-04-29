/*
15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.
*/

const fibonacci = gerarNumeros();
console.log("Os primeiros 10 números da sequência de Fibonacci são: ");
for (let i = 0; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}

function gerarNumeros() {
  const fibonacci = [0, 1];
  for (let i = 2; i < 10; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  return fibonacci;
}
