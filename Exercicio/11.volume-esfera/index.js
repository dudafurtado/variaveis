// Volume de uma esfera, a partir de seu DIÂMETRO 

let diametro = 30
let raio = diametro / 2
// DIÂMETRO de uma esfera é sempre o dobro do raio
let pi = 3.14
let volume = 4 / 3 * pi * Math.pow(raio,3)
// let V(volume) = 4 / 3 * pi (3.14) * Math.pow(r(raio),3)

console.log(`O volume de uma esfera de raio ${raio} é ${volume} PI`)