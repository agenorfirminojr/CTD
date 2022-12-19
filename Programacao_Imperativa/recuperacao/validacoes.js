import consertos from './consertos';

for (let i = 0; i < consertos.length; i++) {
    const aparelho = consertos[i].aparelho;
    const itensConsertados = consertos[i].itensConsertados;
    const valores = consertos[i].valores;
    const pronto = consertos[i].pronto;
  
    if (typeof aparelho !== 'string') {
      console.log(`O aparelho na posição ${i} não é uma string.`);
    }
    if (!Array.isArray(itensConsertados)) {
      console.log(`Os itens consertados na posição ${i} não são um array.`);
    }
    if (!Array.isArray(valores)) {
      console.log(`Os valores na posição ${i} não são um array.`);
    }
    if (typeof pronto !== 'boolean') {
      console.log(`O pronto na posição ${i} não é um boolean.`);
    }
  }
  