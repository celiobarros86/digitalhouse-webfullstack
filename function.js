console.log('')
console.log('Função soma')

var testeVariavel = 1000

function somar(x, y) {
  console.log('Valor de X é igual a', x)
  console.log('Valor de y é igual a', y)
  console.log('O resutado desta soma é', x + y)
  console.log(testeVariavel)
  return x + y
}

var resultadoSoma = somar(4, 2)
console.log(resultadoSoma)
console.log('')

console.log('Função Subtrair')

function subtrair(x, y) {
  console.log('Valor de X é igual a', x)
  console.log('Valor de y é igual a', y)
  console.log('O resutado desta subtração é', x - y)
}

subtrair(10, 5)
console.log('')

console.log('Função Multiplicar')

function multiplicar(x, y) {
  console.log('Valor de X é igual a', x)
  console.log('Valor de y é igual a', y)
  console.log('O resutado desta multiplicação é', x * y)
}

multiplicar(5, 4)

console.log('')

console.log('Função Dividir')
function dividir(x, y) {
  console.log('Valor de X é igual a', x)
  console.log('Valor de y é igual a', y)
  console.log('O resutado desta divisão é', x / y)
}

dividir(4, 2)
console.log('')
