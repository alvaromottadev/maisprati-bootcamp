/*
2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.
*/

function classificarIdade(idade) {
  if (idade > 0 && idade < 12) {
    console.log(`A pessoa com ${idade} anos é uma criança.`);
  } else if (idade >= 12 && idade < 18) {
    console.log(`A pessoa com ${idade} anos é um adolescente.`);
  } else if (idade >= 18 && idade < 60) {
    console.log(`A pessoa com ${idade} anos é um adulto.`);
  } else {
    console.log(`A pessoa com ${idade} anos é um idoso.`);
  }
}

//Testando a função
classificarIdade(10);
classificarIdade(15);
classificarIdade(30);
classificarIdade(65);
