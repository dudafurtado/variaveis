// Calcula a velocidade média dessa pessoa a partir da distância percorrida pela pessoa e pelo tempo que passou

let distPercorrida = 6312 //metros
let tempo = 3000 //segundos

let velocidade = distPercorrida / tempo

// É preciso transformar o cálculo que foi feito em metros por segundo para km por hora. Por isso, multiplica por 3.6

let resultado = velocidade * 3.6 

console.log(`${resultado}km/h`) 