//ifTernario, é uma forma mais simples de escrever o if/else que só tem uma condição

let diaDaSemana = 'não sei '

let resultado =
  diaDaSemana == 'Domingo' ? 'Vou encher a cara' : 'Vou ficar de molho'

console.log(resultado)

switch (diaDaSemana) {
  case 'Segunda':
    console.log('Dia de Ressaca')
    break
  case 'Terça':
    console.log('Tá só começando')
    break
  case 'Quarta':
    console.log('Falta muito ainda')
    break
  case 'Quinta':
    console.log('Quase Sexta')
    break
  case 'Sexta':
    console.log('Sextou !!!!')
    break
  case 'Sabado':
    console.log('Dia de Rolê')
    break
  case 'Domingo':
    console.log('Dia de encher a cara')
    break
  default:
    console.log('Ai tu me complica')
}
