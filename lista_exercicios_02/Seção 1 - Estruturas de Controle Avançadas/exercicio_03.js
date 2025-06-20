function extrairPalavrasUnicas(texto) {
  let words = texto.split(" ");
  let wordsUniques = [];
  for (let i = 0; i < words.length; i++) {
    if (wordsUniques.includes(words[i])) break;
    wordsUniques.push(words[i]);
  }
  console.log(wordsUniques);
}

extrairPalavrasUnicas(
  "A raposa marrom rápida salta sobre o cachorro preguiçoso. A raposa é rápida."
);
