/*
Comentario em 
multiplas linhas
*/
//comentario em uma única linha

//O alert é usado para exibir uma mensagem em popup
// alert("Olá mundo!!!")

//O console conseguimos visualizar informações
//sem exibir na página
console.log("Olá mundo!!! Utilizando o console!")

//Criando uma função chamada quando clicamos no botão

//function botaoteste(){alert("Você clicou no botão")}

//tipo de exibição de mensegem no console
console.error("Esta é uma mensagem de erro")
console.warn("Esta é uma mensagem de alerta")
console.info("Esta é uma mensagem de informação")

//declarando variaveis
//string - conjunto de caracteristicas - declarar com "" " ou ''
var nome = "Jorge"
var sobrenome = "Andre"
//number - todo numero em JS é tipo number - declarar sem " "
var idade = 16
//boolean - somente recebe true ou false
var aprovado = true

console.log(typeof nome) //comando typeof para saber o tipo do dado 

console.log(nome +  ' ' + sobrenome) //concatenado strings com o +
//se utilizarmos o + com string ele concatena se utilizar com number soma
var n1 = 10
var n2 = 25
console.log(n1 + n2)
console.log(n1 + n2)//Ira somar as 2 variaveis number (16)
var n3 = "10"
var n4 = "25"
console.log(n3 + n4)//Ira concatenar "juntar" as 2 variaveis ("1025")

n1= n2 //uma variavel pode receber o valor de outra variavel
console.log("n1 = " + n1 + ' e o n2 =' + n2)

var salario = 1290.85 //para atribuir um valor decimal utilizando . não , 
salario = salario + 200 //posso tambem somar a variavel com ela mesma 
console.log(salario)
salario += 200 //representação mais simplificada da expressão acima
console.log(salario)

//antigamente para juntar texto e variaveis fizeramos assim
console.log('Olá, ' + nome + ' voce tem ' + 'anos e receber R$ ' + salario)
//hoje utilizamos o templaterString forma mais simples
console.log(`Olá, ${nome} voce tem ${idade} anos e receber R$ ${salario}`)

//função de botão para obter o nome
function botaonome(){
    //no prompt abre opção para digitar algo
   var nome2 = prompt('Qual é seu nome?')
   //no confirm abre texto com opção ok e cancelar
   confirm(`Olá ${nome2}, entendeu JS?`)
}
function botaosomar(){
    //receber valor1 de um prompt
 var n1 = prompt('qual é o numero')
 //receber valor2 de um prompt
 var n2 = prompt('qual é o numero')
//variavel soma receber valor1 + valor2
//convertendo a variavel de valor1 e 2 de string para number
//posso ultilidade parseInt() ou number()
 var soma = Number(n1) + Number(n2)
//exibir em um alert o valor de soma              
 //alert(`A soma dos números é : ${soma}`) //"1010"

//Alterando um elemento buscando ele pelo ID e alterando
//O conteudo do HTML, podemos ler da seguinte forma
//No documento pegar o elemento pelo ID resultadoSoma e
//Alterar o conteudo do HTML pela string
 document.getElementById("resultadoSoma").innerHTML += `<br> A soma dos numeros ${n1} e ${n2} é = ${soma}`
}
function botaoCidade(){
    //Variavel nomeCidade recebendo o conteúdo digitado no input
var nomeCidade = document.getElementById("cidade").value
document.getElementById("resultadoCidade").innerHTML = nomeCidade
}

//operadores artimeticos e ordem de precendencia
//operador de soma +
var opSoma = 5 + 2
console.log(opSoma)//7
//operador de subtração -
var opSubtracao = 5 - 2//3
console.log(opSubtracao)
//operador de multiplicação *
var opMultiplicacao = 5 * 2//10
console.log(opMultiplicacao)
//operador de divisão /
var opDivisao = 5 / 2//2.5
console.log(opDivisao)
//operador de exponenciação **
var opExponencial = 5 ** 2//25
console.log(opExponencial)
//operador de resto da divisão %
var opResto = 5 % 2//1
console.log(opResto)

//ordem de precendecia 
var ordemPredencia1 = 5 + 3 / 2
console.log(ordemPredencia1)//6.5
var ordemPredencia2 = (5 + 3) / 2
console.log(ordemPredencia2)//4
/* 1º ()
   2º **
   3º * /
   4º &
   5º + - 
   */

//constantes - O valor não poder ser  alterado depois de atribuido
  const pi = 3.14
// pi = 3 se o valor for alterado dara erro no javascript
//Auto atribuição
var n = 3
n = n + 3 // a variável recebe ela mesmo + 3
n += 3 //quer dizer o mesmo que expressão acima

n++ // quando precisamos somar + 1 ao valor da variável
n-- // quando precisamos subtrair -1 ao valor da variável

//operadores relacionais 
var n1 = 5
var n2 = 6
console.log (n1 > n2) // > maior que
console.log (n1 < n2) // < menor que
console.log (n1 >= n2) // >= maior ou igual que 
console.log (n1 <= n2) // <= menor ou igual que 
console.log ( n1 == n2) // == igual
console.log (n1 != n2) // != não igual - diferente 
// Estrutaras condicionais 
if (n1 > n2){ //verificando a condição entre parenteses
    // se a condição for verdadeira "entra" nesse bloco
    console.log("O n1 é maior que o n2")
} else {
    // se a condição NÃO for verdadeira "entra" nesse bloco ELSE
    console.log("O n1 não é mairo que o n2")
}
//Exemplo de condição
  var minhaIdade = 15
  if (minhaIdade >= 16){
    console.log ("Voçê pode votar")
  } else{
    console.log ("Voçê não pode votar")
  }
  //operadores lógicos
  // && representa o E
  var login = "adm"
  var senha = "123"
  //para entrar na condição TRUE as 2 condições precisar de verdadeira 
  if(login == "adm" && senha == "123"){
    //executa esse bloco quando as condições são TRUE
  } else {
    //executa esse bloco se pelo menos 1 condição for FALSE
  }

  var media = 6
  //operador OU -> || (pipe)
  //para entrar na condição TRUE pelo menos 1 condição precisa ser verdadeira 
  if(media = 6 || media == 5){
  //executa esse bloco quando 1 condição é TRUE pelo menos 
  } else {
    //aqui entra se todas as condições forem falsas 
  }

  //estruturas condições encadeadas
  if (media >= 7){
    console.log("APROVADO")
  } else if(media >= 5 ){ // podemos fazer um novo if junto com o else
    console.log("RECULPERAÇÃO")
} else if (media < 5){
  console.log("REPROVADO")
}
//else = é se não 
//else if = é se não que 

//debbuger
//podemos ultilizar o debbuger para analisar o código linha a linha

//exit
//quando queremso para de executar uma função do JS utilizando o exit

//para sortearmos um valor aleatorio ultilizando o Math.random()
//o Math.random retorna um número decimal e precisamos multiplica
//pelo nr maximo que desejamos e somar 1 qaundo nessario
//o panseInt ultilizamos para obter apenas a parte inteira do numero
var nrSorteado = parseInt(Math.random() * 100) + 1
console.log (nrSorteado)
//pode se colocar um if dentro de outro 

//Switch Case
//É como se fosse vários if else de forma mais simples 
var diaSemana = 3 
switch (diaSemana) {
  case 1:
console.log("Hojé é: Domingo")
break; // para Switch case e não verificado as outras opções
case 2:
console.log("Hojé é: Segunda")
break;
case 3:
console.log("Hojé é: Terça")
break;
case 4:
console.log("Hojé é: Quanta")
break;
case 5:
console.log("Hojé é: Quinta")
break;
case 6:
console.log("Hojé é: Sexta")
break;
case 7:
console.log("Hojé é: Sabado")
break;
default: console.log("Dia invalido")
break;
}
// lanços de repetição WHIle (que quer dizer)
// while (condição)
// enquanto a condição do parentes for verdadeira
// continuar repentindo o código do bloco
var nrVidas = 5
while (nrVidas > 0){
  console.log (`Voçê ainda tem ${nrVidas}`)
// verificando se numero é par com while
var contador = 1 //iniciando o contador de vezes que ira executar 
while (contador <= 10){ //enquanto a codição for verdadeira
   if (contador % 2 == 0){ // condição para o contador for par
   console.log(`${contador}`)
  }  else {
    console.log (`${contador} é impar`)
  }
  contador++ //adicionamos +1 ao contador para não ficar um loop infinito 
}}
for (var cont = 1; cont <= 5; cont++){
  console.log(cont)
}
// for - laço de repetição
// 1º expressão var i = 1 
// (aqui eu inicio o controle de vezes)
// 2º expressao i <= 10
// (aqui nós verificamos a condição para se
// manter no loop)
// 3º expressão i++
// (aqui acrescentamos na variavel +1 vez)
// exibindo
for (let i = 1; i <= 10; i++){
  console.log(i)
}
