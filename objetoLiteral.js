let meuPais = {
  Nome: 'Brasil',
  Lingua: 'Português',
  Capital: 'Brasilia',
  presidente: 'Jair Messias BOLSONARO',
  status: function () {
    console.log('O Presidente do', this.Nome, 'é', this.presidente)
  }
}
//função construtora, começa sempre coma letra maiuscula,e serve para ser como um molde para outros objetos literais
function CadastroPais(nomePais, linguaPais, capitalPais, presidentePais) {
  this.nome = nomePais
  this.lingua = linguaPais
  this.capital = capitalPais
  this.presidente = presidentePais
}

let argentina = new CadastroPais(
  'Argentina',
  'Lingua Castelhana',
  'Buenos aires',
  'Alberto Fernadez'
)
console.log(argentina)

//metodos, aparentemente, são funções dentro dos objetos literais
//quando ch

console.log('A capital do', meuPais.Nome, 'é', meuPais.Capital)

console.log('A capital do ' + meuPais.Nome + ' é ' + meuPais.Capital)

meuPais.status()
