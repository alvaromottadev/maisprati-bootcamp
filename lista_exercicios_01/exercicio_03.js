/*
3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

function classificarNota(nota) {
  if (nota >= 0 && nota < 4) {
    console.log(`Infelizmente você foi reprovado. Sua nota foi ${nota}.`);
  } else if (nota >= 4 && nota < 7) {
    console.log(`Você está de recuperação. Sua nota foi ${nota}.`);
  } else if (nota >= 7 && nota <= 10) {
    console.log(`Parabéns! Você foi aprovado. Sua nota foi ${nota}.`);
  } else {
    console.log(`Nota inválida.`);
  }
}

//Testando a função
classificarNota(3.5);
classificarNota(5.5);
classificarNota(8.0);
classificarNota(11);
