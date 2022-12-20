import aparelhosProntos from './listarAparelhos';

aparelhosProntos.forEach(aparelho => {
  const valorTotal = aparelho.valores.reduce((total, valor) => total + valor, 0);
  console.log(`Aparelho: ${aparelho.aparelho} - Valor total: R$ ${valorTotal}`);
});
