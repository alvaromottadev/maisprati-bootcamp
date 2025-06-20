const prompt = require("prompt-sync")();

const randomNumber = Math.floor(Math.random() * 100) + 1;
let number = parseInt(prompt("Adivinhe o número entre 1 e 100: "));

while (number != randomNumber) {
  if (number < randomNumber) {
    console.log("O número é maior. Tente novamente.");
  } else if (number > randomNumber) {
    console.log("O número é menor. Tente novamente.");
  }
  number = parseInt(prompt("Adivinhe o número entre 1 e 100: "));
}
console.log("Parabéns! Você adivinhou o número.");
