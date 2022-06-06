//lenght - Retorna o tamanho de uma determinada string

let palavraMaisLonga = 'Anticonstitucionalissimamente'

console.log(palavraMaisLonga, palavraMaisLonga.length)

//Indexof - retorna a posição do caracter/palavra procurado, iniciando no começo do texto
console.log(palavraMaisLonga.indexOf('oxi'))

//lastindexof - retorna a posição do caracter/palavra procurado, iniciando no final do texto.
console.log(palavraMaisLonga.lastIndexOf('oxi'))
//slice - seleciona um grupo de caracters dentro de uma string
console.log(palavraMaisLonga.slice(0, 4))

console.log('    teste de trim')
console.log('    teste de trim'.trim())

console.log('')

//split tranforma uma string em um array, utilizando um separador escolhido pelo programador
let split =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa magna, luctus a massa ac, laoreet vehicula risus. Vivamus sodales malesuada massa, et pharetra enim molestie at. Suspendisse sit amet consequat leo, in aliquam elit. Morbi sagittis suscipit orci ac tincidunt. Donec id mi elit. Praesent semper laoreet pharetra. Duis et magna leo. Vivamus dapibus metus vel turpis vehicula, sit amet accumsan ipsum gravida. In fringilla iaculis laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer viverra, nulla at feugiat bibendum, odio orci fringilla turpis, eget ullamcorper sem nunc eget dolor.'

console.log(split)
console.log(split.length)

console.log(split.split(' '))

//a função replace, basicamente troca uma palavra por outra escolhida.

let fraseReplace = 'Sou programador iniciante'

console.log(fraseReplace.replace('iniciante', 'avançado'))
