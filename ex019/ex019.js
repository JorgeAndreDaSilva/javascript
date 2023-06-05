
var contaC = 3

function vida() {
    document.getElementById("resultado").innerHTML = ``
    contaC++
    for (var contador = 1; contador <= contaC; contador++)
        document.getElementById("resultado").innerHTML += `<img src="Cora.png" alt="" width="80px">`
}

function mVida() {
    document.getElementById("resultado").innerHTML = ``
    contaC--
    for (var contador = 1; contador <= contaC; contador++)
        document.getElementById("resultado").innerHTML += `<img src="Cora.png " alt="" width="80px">`
    if (contaC <= 0){
        document.getElementById("mario").innerHTML = `  <img src="game-over-glitch.gif" alt=""  width="250px">`
    }
}



