//para calcular a distância de 2 pontos

let x1= 1
let x2 = 1
let y1 = 1
let y2 = 4 

let primeiraPotencia = Math.pow((x2 - x1), 2)
let segundaPotencia = Math.pow((y2 - y1), 2)

let d = Math.sqrt(primeiraPotencia + segundaPotencia)

// resumido: let d = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))

console.log(d)