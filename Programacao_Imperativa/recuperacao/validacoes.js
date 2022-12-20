import consertos from './consertos.js';

consertos.forEach(conserto => {
  if (typeof conserto.aparelho !== 'string') {
    console.error('O atributo "aparelho" deve ser uma string');
  }

  if (!Array.isArray(conserto.itensConsertados)) {
    console.error('O atributo "itensConsertados" deve ser um array');
  }

  if (!Array.isArray(conserto.valores)) {
    console.error('O atributo "valores" deve ser um array');
  }

  if (typeof conserto.pronto !== 'boolean') {
    console.error('O atributo "pronto" deve ser um boolean');
  }
});
