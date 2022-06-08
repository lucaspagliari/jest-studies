export function sum(n1, n2) {
  /* 
    Segundo parâmetro é o radix/base que é a base em que o número se encontra
    por exemplo: Binária, Octagonal, Decimal
  */
  const a = parseInt(n1, 10);
  const b = parseInt(n2, 10);

  if (isNaN(a) || isNaN(b)) throw Error();

  return a + b;
}
