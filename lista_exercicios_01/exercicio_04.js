/*
4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const prompt = require("prompt-sync")();

const escolha = prompt(
  "Escolha uma das opções: \n\n1 - Mensagem de Bom dia \n2 - Mensagem de Boa Tarde \n3 - Mensagem de Boa Noite\n"
);

switch (escolha) {
  case "1":
    console.log("Bom dia! Tenha um ótimo dia pela frente!");
    break;
  case "2":
    console.log("Boa tarde! Espero que esteja tendo um bom dia!");
    break;
  case "3":
    console.log("Boa noite! Durma bem e tenha bons sonhos!");
    break;
  default:
    console.log("Opção inválida!");
}
