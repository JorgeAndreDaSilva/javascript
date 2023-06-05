
var filme = []
var link = []
function Exibir(){
    var receF = document.getElementById("nome").value
    var receL = document.getElementById("links").value  
    document.getElementById("resultado").innerHTML = ""
    filme.push(receF)
    link.push(receL)
    for ( var i = 0; i < link.length; i++){
        document.getElementById("resultado").innerHTML += `<img src="${link[i]}" > <br> ${filme[i]} `
    }
}


function indicar(){
    var indi = parseInt(Math.random() * link.length)
    document.getElementById("resultado").innerHTML = `<img src="${link[indi]}"> <br> ${filme[indi]} `
}
