/*
5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
*/

function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);

  if (imc <= 18.5) {
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso.`);
  } else if (imc > 18.5 && imc < 25) {
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está com o peso normal.`);
  } else if (imc > 25 && imc < 30) {
    console.log(`Seu IMC é ${imc.toFixed(2)} e você está com sobrepeso.`);
  } else if (imc > 30 && imc < 35) {
    console.log(
      `Seu IMC é ${imc.toFixed(2)} e você está com obesidade grau 1.`
    );
  } else if (imc > 35 && imc < 40) {
    console.log(
      `Seu IMC é ${imc.toFixed(2)} e você está com obesidade grau 2.`
    );
  } else {
    console.log(
      `Seu IMC é ${imc.toFixed(2)} e você está com obesidade grau 3.`
    );
  }
}

//Testando a função
calcularIMC(50, 1.75);
calcularIMC(70, 1.75);
calcularIMC(80, 1.75);
calcularIMC(100, 1.75);
calcularIMC(120, 1.75);
calcularIMC(150, 1.75);
