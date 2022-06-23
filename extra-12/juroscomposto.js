// programa que calcula a taxa de juros que foi operada sobre um financiamento a partir do montate total que foi pago, do capital inicial que foi obtido como empréstimo e do tempo dexorrido do financiamento.

let M = 90000
let montante = M

let C = 60000
let capital = C

let n = 24
let numeroDePeriodos = n

// let i = Math.pow((M / C), 1 / n) - 1

let divisaoDentroDapotencia = 90000 / 60000 
let divisaoForaDaPotencia = 1 / 24
let potencia = Math.pow(divisaoDentroDapotencia, divisaoForaDaPotencia)

let i = potencia - 1
let taxaDeJuros = i 

console.log(`O seu financiamento de ${C} reais teve uma taxa de juros de ${i}, pois após ${n} meses você teve que pagar ${M} reais.`)