let jogos = ['arma3', 'pubg', 'mir4', 'ageofempire', 'gta5', 'outlive']

console.log(jogos.length)

console.log(jogos[5])

console.log(jogos.join('-'))

let posicao = jogos.indexOf('mir4')
console.log(posicao)

let posicao2 = jogos.indexOf('paladins')
console.log(posicao2)

if ((posicao2 = -1)) {
  console.log('Objeto Não encontrado')
}

let posicao3 = jogos.lastIndexOf('paladins')
console.log(posicao3)
if ((posicao3 = -1)) {
  console.log('Objeto Não encontrado')
}

console.log('Não está dando certo')
