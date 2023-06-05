var listasCarros = []

// declarando um objeto e informando os atributos
// todos os objetos se declaram com {  }
var carro = {
    ano: '2020',
    modelo: 'gol',
    marca: 'VW',

    // para exibir o atributo do objeto faço da seguinte forma objeto.atributo
}
console.log (carro.ano + '-' + carro.modelo)
console.log (`${carro.ano} - ${carro.modelo}`)

// adiciona o objeto carro ao vetor listaCarros
listasCarros.push(carro)
console.log (listasCarros) //1 - so existe 1 item

// novo objeto - novo carro
carro = {
    ano: '2022',
    modelo: 'onix',
    marca: 'GM'
}

// adicionando novo objeto carro ao vetor listaCarros
listasCarros.push(carro)
console.log (listasCarros)

for (var andar in listasCarros){
    console.log ( listasCarros[andar].modelo )
}

