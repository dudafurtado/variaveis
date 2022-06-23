// Quantas pessoas seram infectadas após 100 dias, dado que inicialmente havia 1000 pessoas infectadas, cada uma delas transmitindo para outras 4 pessoas.

let populaçãoInicial = 1000

let pessoasQueoPacientePodeTransmitir = 4

let tempoPercorrido = 100

let resultadoFracao = tempoPercorrido / 7

let resultadoDaPotencia = Math.pow(pessoasQueoPacientePodeTransmitir, resultadoFracao)

let quantidadeDePessoasInfectadas = populaçãoInicial * resultadoDaPotencia

// resumido: p (quantidadeDePessoasInfectadas) = po (populaçãoInicial) * Math.pow(x(pessoasQueoPacientePodeTransmitir), t /7)

console.log(quantidadeDePessoasInfectadas)
