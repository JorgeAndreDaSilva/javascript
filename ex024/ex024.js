
var filme = []

filme = JSON.parse(localStorage.getItem('bdFilmes'))

if (filme == null) {
    filme = []
}
exibirFil()



function Exibir() {
    var filmes = document.getElementById("nome").value
    var link = document.getElementById("links").value
    document.getElementById("resultado").innerHTML = ''


    var filmeV = {
        Nomes: filmes,
        Links: link
    }

    filme.push(filmeV)
    /* ultilizando o localStorage que ira gravar o nosso vetor de filmes
    no metodo sitItem, preciso passar como parâmetro o nome do espaço
    que o navegador ira reservar e passar tambem o vetor de filmes
    convertido em forma JSON */
    localStorage.setItem('bdFilmes', JSON.stringify(filme))



    exibirFil()
    document.getElementById("nome").value = ''
    document.getElementById("links").value = ''
    document.getElementById("links").focus()
}


function indicar() {
    var ind = parseInt(Math.random() * filme.length)
    document.getElementById("resultado").innerHTML = `<img src="${filme[ind].Links}" class = "fil"> <br> ${filme[ind].Nomes} `
}

function exibirFil() {

    document.getElementById("resultado").innerHTML = ''

    for (var i = 0; i < filme.length; i++) {
        document.getElementById("resultado").innerHTML += `<img src="${filme[i].Links}" class = "fil"> <br> ${filme[i].Nomes} `
    }
}
function limpar() {
    localStorage.setItem('bdFilmes', JSON.stringify(filme))
    if (filme == null) {
        filme = []
    }
}
