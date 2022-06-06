//arrowfunction
let somar = (numeroA, numeroB) => numeroA + numeroB
let dimunuir = (numeroA, numeroB) => numeroA - numeroB
let multiplicar = (numeroA, numeroB) => numeroA * numeroB
let dividir = (numeroA, numeroB) => numeroA / numeroB
let calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB)
console.log(calculadora(10, 20, somar))
console.log(calculadora(10, 20, dimunuir))
console.log(calculadora(10, 20, multiplicar))
console.log(calculadora(10, 20, dividir))

//função normal
function juntarNomes(nome, sobrenome) {
  return nome + ' ' + sobrenome
}

function saudacao(nome, sobrenome, callBack) {
  return 'Olá' + ' ' + callBack(nome, sobrenome)
}

console.log(saudacao('Célio', 'Barros', juntarNomes))
