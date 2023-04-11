// Soma dos ângulos internos de um polígono, a partir do número de lados de um polígono.

let numeroDeLados = 8 

let somaDosAngulosInternos = (numeroDeLados - 2) * 180 
// S (somaDosAngulosInternos) = (n (numeroDeLados - 2)) * 180

console.log(somaDosAngulosInternos)

// Quanto vale cada um desses ângulos, caso eles sejam todos iguais!

let valorDeCadaAngulo = 90 

let somaDeCadaUmDosAngulos = numeroDeLados * valorDeCadaAngulo

console.log(somaDeCadaUmDosAngulos)