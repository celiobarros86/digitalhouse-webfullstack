//revisão
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let objeto = {
  nome: 'célio',
  sobrenome: 'Barros',
  Idade: 36
}

console.log(array, objeto)

//metodos arrays
//metodo map
//percorre o array , e retorna um array de mesmo tamanho executado após executado a função

let numerosPares = [2, 4, 6, 8, 10]

let dobro = numerosPares.map(x => x * 2)

console.log(dobro)

//filter
//essa função filtra os valores dentro do array e retorna os valores true

let numerosFilter = array.filter(function (x) {
  return x <= 5
})

console.log(numerosFilter)

//reduce
//soma todos os valores dentro de um array

let valoresSomados = array.reduce(function (x, y) {
  return x + y
})

console.log(valoresSomados)

//foreach
//nao serve para nada, só para embolar o meio de campo

let testeForEach = array.forEach(function (x, y) {
  console.log('Indice ' + y + ' => ' + 'Valor ' + x)
})

//Este método também recebe uma função como parâmetro. O callback precisa retornar um booleano (true ou false), para que o find saiba que encontrou o elemento adequado. Retorna o valor do primeiro elemento do array buscado, caso não encontre nada, vai ser retornado undefined.

let pets = ['lock', 'thor', 'alfred', 'peixinho']

let testeFind = pets.find(function (x) {
  return x == 'lock'
})

console.log(testeFind)

let frutas = ['Uva', 'Maçã', 'Cereja', 'Morango', 'Abacaxi']
let moraNoMar = frutas.find(function (fruta) {
  return fruta == 'Abacaxi'
})
console.log(moraNoMar) // [Abacaxi]
