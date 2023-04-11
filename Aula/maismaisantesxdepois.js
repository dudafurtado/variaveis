let x = 7 
console.log(x)

++x

console.log(x)

x++
// soma 1 ao valor de x
// x = x + 1
// x += 1
console.log(x)

let y = 9 
console.log(x)

// Vai somar de antemão o valor de x e consequentemente passar para y. 
// Assim como o valor de x será + 1
y = ++x 

console.log(`primeiro com mais mais antes ${x}`)
console.log(`primeiro com mais mais antes ${y}`)

// O valor de x é retornado para y e depois disso o ++ é considerado, ou seja, 
// o valor de x é o valor antigo + 1 e o de y é o valor de x antigo.
y = x++

console.log(`segundo com mais mais depois ${x}`)
console.log(`segundo com mais mais depois ${y}`)

let z = 21
console.log(z)

// Segue a ordem de leitura da linha: quando o mais vem antes ele soma primeiro,
// quando o valor vier antes ele retorna primeiro.