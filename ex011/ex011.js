function verificar(){
    var nomeP = String (document.getElementById("nome").value)
    var n1 = Number(document.getElementById("no1").value)


if (n1 >= 16 && n1 < 18 || n1 > 65){
document.getElementById("resultado").innerHTML = ` ${nomeP} Voçê pode votar, mas não é obrigado`}

else if (n1 >= 18 && n1 <= 65){
    document.getElementById("resultado").innerHTML = ` ${nomeP} Voçê é obrigado votar`}

else if (n1 < 16){
    document.getElementById("resultado").innerHTML = ` ${nomeP} Voçê não pode votar`}
}




