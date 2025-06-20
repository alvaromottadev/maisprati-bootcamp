const produtos = [
  {
    nome: "Notebook",
    preco: 2500,
  },
  {
    nome: "Celular",
    preco: 1500,
  },
  {
    nome: "Tablet",
    preco: 1000,
  },
  {
    nome: "Monitor",
    preco: 800,
  },
];

function apenasNomesOrdenadosPorPreco() {
  return produtos
    .sort((a, b) => a.preco - b.preco)
    .map((produto) => produto.nome);
}

const nomesOrdenados = apenasNomesOrdenadosPorPreco();
