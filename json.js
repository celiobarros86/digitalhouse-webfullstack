//objeto literal
let dadosCliente = {
  Nome: 'Célio',
  Idade: 28,
  Altura: 1.8,
  Cor: 'Parda',
  Peso: 86
}
console.log(dadosCliente)

let dadosClientejson = JSON.stringify(dadosCliente)
console.log(dadosClientejson)

let dadosclientesback = JSON.parse(dadosClientejson)
console.log(dadosclientesback)

console.log('')

//array
let clientes = ['Paloma', 'Célio', 'Vinicius', 'Edna', 'Cleyton']
console.log(clientes)

let clientesjson = JSON.stringify(clientes)
console.log(clientesjson)
let clientesback = JSON.parse(clientesjson)
console.log(clientesback)
