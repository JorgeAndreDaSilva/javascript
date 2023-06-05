function media(){
    var nomeAluno = String (document.getElementById("nome").value)
    var n1 = Number(document.getElementById("no1").value)
    var n2 = Number(document.getElementById("no2").value)

    var nota = (n1 + n2) / 2



    if (n1 > 10){
    alert ("numero maior que o limite")
    exit
    }

    if (n2> 10){
        alert ("numero maior que o limite")
        exit
        }

if (nota>= 7){
    document.getElementById("resultado").innerHTML = `O aluno ${nomeAluno} tirou a nota ${n1} e ${n2} sua media foi ${nota} Passou de Ano`
}
else{
    document.getElementById("resultado").innerHTML = `O aluno ${nomeAluno} tirou a nota ${n1} e ${n2} sua media foi ${nota} Não Passou de Ano`
}
}

