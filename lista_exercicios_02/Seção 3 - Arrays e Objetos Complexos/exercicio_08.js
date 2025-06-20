const vendas = [
  {
    cliente: "João",
    total: 150.0,
  },
  {
    cliente: "Maria",
    total: 200.0,
  },
  {
    cliente: "Pedro",
    total: 300.0,
  },
  {
    cliente: "João",
    total: 250.0,
  },
  {
    cliente: "Maria",
    total: 400.0,
  },
];

const vendasPorCliente = vendas.reduce((acc, venda) => {
  if (!acc[venda.cliente]) {
    acc[venda.cliente] = 0;
  }
  acc[venda.cliente] += venda.total;
  return acc;
}, {});

console.log(vendasPorCliente);
