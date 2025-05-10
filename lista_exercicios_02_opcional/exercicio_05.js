/*
5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/

const prompt = require("prompt-sync")();

const opcoes = ["pedra", "papel", "tesoura"];

let jogador = prompt("Escolha pedra, papel ou tesoura: ").toLowerCase();

while (!opcoes.includes(jogador)) {
  console.log("Opção inválida. Tente novamente.");
  jogador = prompt("Escolha pedra, papel ou tesoura: ").toLowerCase();
}

const computador = opcoes[Math.floor(Math.random() * 3)];
console.log(`Computador escolheu: ${computador}`);

if (jogador === computador) {
  console.log("Empate!");
} else if (
  (jogador === "pedra" && computador === "tesoura") ||
  (jogador === "papel" && computador === "pedra") ||
  (jogador === "tesoura" && computador === "papel")
) {
  console.log("Você ganhou!");
} else {
  console.log("Você perdeu!");
}
