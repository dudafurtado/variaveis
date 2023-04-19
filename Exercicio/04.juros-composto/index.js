const capital = 1000
const taxaFixaDeJuros = 0.125
const periodoDeTempo = 5

const montante = capital * Math.pow((1 + taxaFixaDeJuros), periodoDeTempo)

console.log(Math.round(montante))