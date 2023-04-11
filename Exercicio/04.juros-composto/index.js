// Calcular juros compostos

let capital = 1000
let taxaFixaDeJuros = 0.125
let periodoDeTempo = 5

let montante = capital * Math.pow((1 + taxaFixaDeJuros), periodoDeTempo)
// let M(montante) = C(capital) * Math.pow((1 + i(taxa fixa de juros)), t(período de tempo)

console.log(Math.round(montante))