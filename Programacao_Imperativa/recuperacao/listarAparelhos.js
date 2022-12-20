import consertos from './consertos';

const aparelhosProntos = consertos.filter(conserto => conserto.pronto);

export default aparelhosProntos;
