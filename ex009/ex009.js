function verificar(){
    var nomeAluno = String (document.getElementById("nome").value)
    var n1 = Number(document.getElementById("no1").value)

    if (n1 >= 100){
        alert ("Sera que voçê irá aguentar")
        exit
        }

if (n1 >= 18){
document.getElementById("resultado").innerHTML = ` ${nomeAluno} Voçê pode tirar a CNH` }
 else{
 document.getElementById("resultado").innerHTML = `${nomeAluno} Voçê não pode tirar a CNH`}

}
