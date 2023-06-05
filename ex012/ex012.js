var nrSorteado = parseInt(Math.random() * 100) + 1
var tentativas = 0

function bot() {
    var chute = prompt('Qual seu número')

    tentativas++

    if (chute == nrSorteado) {
        document.getElementById("resultado").innerHTML += `<b> Meus Parabens Voçê acertou o numero ${nrSorteado} em ${tentativas} tentativas</b> `
    }

    else if (chute > nrSorteado) {
        document.getElementById("resultado").innerHTML += `Voçê chutou um Número ${chute} Menor <br>`
    }

    else if (chute < nrSorteado) {
        document.getElementById("resultado").innerHTML += ` Voçê chutou um Número ${chute} Maior <br>`
    }

}
function novo() {
    tentativas = 0
    document.getElementById("resultado").innerHTML = ""
    nrSorteado = parseInt(Math.random() * 100) + 1
}