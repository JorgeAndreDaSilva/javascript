


function Calcular(){

    var nota1 = Number(document.getElementById("no1").value)
    var nota2 = Number(document.getElementById("no2").value)
    var nomeAluno = String (document.getElementById("nome").value)
    
    if (validarNota(nota1, nota2) == false){
        return
    }
  
    var media = calcularMedia(nota1, nota2)
  
}

function validarNota(nota1, nota2){
        
    if (nota1 > 10){
        alert ("numero maior que o limite")
        return false
        }
    
        if (nota2 > 10){
            alert ("numero maior que o limite")
            return false
            }
    }
function calcularMedia (nota1, nota2){
        var nota = (nota1 + nota2) / 2
        return nota

    
    }
function exibirAprovacao(media){
        if (media >= 7){
            document.getElementById("resultado").innerHTML = ` ${nomeAluno}O aluno tirou a media de ${media} Passou de Ano`
        }
        else{
            document.getElementById("resultado").innerHTML = ` ${nomeAluno}O aluno tirou a media de ${media} Não Passou de Ano`
        }
    }