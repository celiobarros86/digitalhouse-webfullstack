//arrowFunction é um jeito simplificado de escrever as funções

let resultadoSoma0 = (x, y) => {
  console.log('Teste de Arrow Function', x, y)
  return x + y
}

console.log(resultadoSoma0(10, 20))

let resultadoSoma = function somar(x, y) {
  console.log('Teste de Arrow Function', x, y)
  return x + y
}

console.log(resultadoSoma(10, 20))
