let dataAtual = new Date()

console.log(dataAtual)

let diaSemana = dataAtual.getDay() //retorna o dia da semana
let diaDoMes = dataAtual.getDate() //retorna o dia do mês
let mes = dataAtual.getMonth() //retorna o mês
let ano = dataAtual.getFullYear() //retorna o ano
let hora = dataAtual.getHours() //retorna a hora cheia
let minutos = dataAtual.getMinutes() //retorna os minutos da hora
let algumaCoisa = dataAtual.getTime() //não sei pra que serve

console.log('hora', hora)
console.log('minutos', minutos)
console.log(hora, ':', minutos, 'Hora certa')
console.log('Dia do mÊs', diaDoMes)
console.log('Dia da semana', diaSemana)
console.log('mÊs', mes)
console.log('ano', ano)
console.log(algumaCoisa)

function diaDaSemana(x) {
  switch (x) {
    case 0:
      console.log('Domingo, eu vou ao maracanã !!!')
      break
    case 1:
      console.log('Sabadouuuuu')
      break
    case 2:
      console.log('Sextouuu')
      break
    case 3:
      console.log('Quase Sexta')
      break
    case 4:
      console.log('Sextou !!!!')
      break
    case 5:
      console.log('Dia de Rolê')
      break
    case 6:
      console.log('Dia de encher a cara')
      break
    default:
      console.log('Ai tu me complica')
  }
}

diaDaSemana(diaSemana)
