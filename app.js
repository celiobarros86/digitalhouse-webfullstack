console.log('Hello World!')
var meuTel = 21998577256
console.log(meuTel)

let nomeMeu = 'Célio'
let sobrenomeMeu = 'Barros'
console.log(nomeMeu, sobrenomeMeu)

const dog1 = 'lock'
const dog2 = 'thor'

console.log(dog1, dog2)

if (true) {
  let nomeDela = 'Paloma'
  console.log(nomeDela)
}

const fs = require('fs')
const moment = require('moment')
const dogs = require('./meusModulos/meusDogs')

let agora = moment().format('DD to MMM to YYYY')
console.log(agora)
let dados = fs.readFileSync(__dirname + '/text.txt', 'utf8')
console.log(dados)
let animalDeEstimacao = require('./meusModulos/meusDogs')
console.log(dogs)

var adrianoEGay = true
console.log('adriano é gay ?', adrianoEGay)

var texte = null
console.log('texte =', texte)

var texte2 = NaN
console.log('Texte 2 =', texte2)

var texte3 = undefined
console.log('Texte3 =', texte3)

var carro = {
  marca: 'Chevrolet',
  ano: 2019,
  modelo: 'onyx'
}

console.log(carro)

let series = [
  'Lost',
  'The Walking Dead',
  'The Good Doctor',
  'Fear The Walking Dead'
]

console.log(series)

console.log('soma de 2 + 2 =', 2 + 2)
console.log('a subtração de 10 - 5 =', 10 - 5)
console.log('O resultado da multiplicação de 10 x 5 =', 10 * 5)
console.log('O resultado da divisao de 10/2 é', 10 / 2)
console.log('O resultado do módulo de 10/2 é', 10 % 2)

var numero = 0
console.log('Incremento')
console.log(numero, ++numero, ++numero, ++numero, ++numero, ++numero)

console.log('Decremento')
console.log(numero, --numero, --numero, --numero, --numero, --numero)

console.log('Comparação simples & comparação rigorosa')
console.log('Comparação Simples')
console.log('5 é igual a 5', 5 == 5)
console.log('Comparação Rigorosa')
console.log("5 é igual a '5'", 5 === '5')

console.log('Desigualdade Simples & Rigorosa')
console.log('Desigualdade Simples')
console.log("5 é diferente de '5'", 5 != '5')
console.log('Desigualdade Rigorosa')
console.log("5 é diferente de  '5'", 5 !== '5')
