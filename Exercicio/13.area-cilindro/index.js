// Área total de um cilindro
// Um cilindro tem duas bases e uma lateral. Portanto, para calcular a área total de um cilindro, é necessário somar a área de cada uma das suas duas bases, com a sua área lateral.

let raio = 50
let altura = 80

let pi = 3.14

let alturaB = 2 * pi * Math.pow(raio,2)
// A(altura da base) = 2 * 3.14 (pi) * Math.pow(r(raio),2)
let alturaL = 2 * pi * raio * altura
// A(altura lateral) = 2 * 3.14 (pi) * r (raio) * h(altura)
let alturaT1 = 2 * alturaB + alturaL
// A(altura total) = 2 * alturaB (altura da base) + alturaL (altura lateral)
let alturaT2 = 2 * pi * raio * (raio + altura)
// A(altura total) = 2 * 3.14 * r(raio) * (r(raio) + h(altura))

console.log(alturaT1)
console.log(alturaT2)