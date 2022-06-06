//desestruturação em array

let cores = ['Branco', 'Laranja', 'Preto', 'Azul', 'Roxo', 'Rosa', 'Amarelo']

let [cor1, cor2, cor3] = cores

console.log(cor1, cor2, cor3)

console.log(cores)

//desestruturação em objeto literal

let pessoa = {
  nome: 'célio',
  altura: 1.8
}
let { nome, altura } = pessoa
console.log(nome, altura)

//desestruturação não modifica o array ou objeto literal de origem.Seu único objetivo é copiar os valores de forma mais prática e rápida.
