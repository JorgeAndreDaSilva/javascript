function numero() {
    document.getElementById("resultado").innerHTML = ``
     var conta = 1
    while(conta <= 6 ){
    var nrSorteado = parseInt(Math.random() * 60) + 1
    document.getElementById("resultado").innerHTML += `${nrSorteado}  `
    conta ++
    }

}
