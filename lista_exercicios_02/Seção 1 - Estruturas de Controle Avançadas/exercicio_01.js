function ehDataValida(dia, mes, ano) {
  const date = new Date(ano, mes - 1, dia);
  return (
    date.getFullYear() === ano &&
    date.getMonth() === mes - 1 &&
    date.getDate() === dia
  );
}
console.log(ehDataValida(31, 12, 2020));
console.log(ehDataValida(31, 2, 2020));
