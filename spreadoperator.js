//spreadoperator(...) serve para juntar os item de um arrau ou objeto literal
let carrosBrasileros = [
  'Mercedes-Benz C180',
  'BMW X4',
  'Chevrolet Tracker',
  'Hyundai New Tucson',
  'Mitsubishi Eclipse Cross'
]

let carrosAmericanos = [
  'Cadillac DeVille',
  'Ford GT',
  'Ford Mustang Mk1',
  'Chevrolet Corvette C2',
  'Ford Model T'
]

let todosOsCarros = [...carrosAmericanos, ...carrosBrasileros]

console.log(todosOsCarros)

console.log(carrosAmericanos, carrosBrasileros)

let cadastro1 = {
  informacao1: 1
}

let cadastro2 = {
  informacao2: 2,
  ...cadastro1
}

let cadastro3 = {
  informacao3: 3,
  ...cadastro2
}

console.log(cadastro3)

function numeros(...x) {
  console.log(x)
}

console.log(numeros(1, 2, 3, 4, 5))
