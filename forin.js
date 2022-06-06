//for in serve para a iteração no objeto literal

let pessoa = {
  nome: 'célio',
  idade: 36,
  altura: 1.8
}

for (let caracteristica in pessoa) {
  console.log(caracteristica, pessoa[caracteristica])
}

let series = ['lost', 'breakin bad', 'the walking dead', 'the good doctor']

//for of server para percorrer um array, item por item

for (let caracteristica1 of series) {
  console.log(caracteristica1)
}
