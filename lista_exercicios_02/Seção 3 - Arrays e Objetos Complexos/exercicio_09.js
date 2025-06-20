const pares = [
  ["nome", "João"],
  ["idade", 30],
  ["cidade", "São Paulo"],
];

function paresParaObjeto(pares) {
  const obj = {};
  for (const [chave, valor] of pares) {
    obj[chave] = valor;
  }
  return obj;
}

function objetoParaPares(obj) {
  const pares = [];
  for (const chave in obj) {
    pares.push([chave, obj[chave]]);
  }
  return pares;
}

const obj = paresParaObjeto(pares);
console.log(obj);

const paresConvertidos = objetoParaPares(obj);
console.log(paresConvertidos);
