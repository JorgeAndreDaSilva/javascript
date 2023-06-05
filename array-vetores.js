// declarando um array vazio
var meuVetor = []

// criando vetores com dados 
var numeros = [4, 1, 18, 2, 7]
var nomes = ['Silvia', 'Marcos', 'Sandra']
var novoVetor = [20, 'Sesi', true]

// Acessando os vetores
console.log( nomes [2])
console.log( novoVetor [1])

// verificando o tamanho do vetor 
console.log (numeros.length)

// indice       0         1        2         3        4 
var frutas = ['maçã', 'laranja', 'pera', 'morango', 'uva']
// faça um for para percorrertodo o tamanho do vetor
for ( var i=0; i < frutas.length; i++){
    // coloco o i no indice da frutas para pegar o
    // valor de cada indice do vetor 
    console.log (frutas [i])
}

// adicionando novo valor no final do vetor 
frutas.push('abacaxi')
console.log(frutas.length)
console.log(frutas)

var novaListafrutas = []
novaListafrutas.push ('limão')
console.log (novaListafrutas)  //['limão]
novaListafrutas.push ('melancia')
console.log (novaListafrutas) //['limão', 'melancia']

novaListafrutas[0] = 'melão'
console.log (novaListafrutas) //['melão', 'melancia']
novaListafrutas[1] = 'banana'
console.log (novaListafrutas)
novaListafrutas[3] = 'abacate'
console.log (novaListafrutas) 

for (var i=0; i < novaListafrutas; i++){
    console.log (novaListafrutas[indice])
}  

// for in -> não preciso inicializar uma variavel de contador do loop

// for in -> percorre toda a array 
for (var indice in novaListafrutas){
    console.log (indice + ' - '+ novaListafrutas)
}

// metodo forEach de um vetor percorre e retorna todos os elementos do vetor 

// forEach nao permite ocorrer loop infinito por ler a linha e voltar dentro de todos os elementos
// dentro do parenteses colocamos a variavel que irá
// receber o conteúdo de cada linha do vetor
// e com => {} informamos o bloco que ira executar para
// cada linha 
novaListafrutas.forEach( item => {
    console.log ('item pelo forEach', item)
} )

// quando precisamos do indice tambem o colocamos entre ()
// assim como no exemplo abaixo
novaListafrutas.forEach( (item, pos) => {
    console.log ('item pelo forEach com posição', pos, item)
} )