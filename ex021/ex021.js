
var filme = []
function Exibir(){
    var receF = document.getElementById("nome").value 
    document.getElementById("resultado").innerHTML = ""
    filme.push(receF)
    for ( var i = 0; i < filme.length; i++){
        document.getElementById("resultado").innerHTML += `${filme[i]} <br>`
    }
}