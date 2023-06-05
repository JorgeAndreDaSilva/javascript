function numero() {
    var n = document.getElementById("nume").value
    document.getElementById("resultado").innerHTML = `Tabela do ${n} é <br>`
    var conta = 1
    while(conta <= 10 ){
        var n = document.getElementById("nume").value
        var n1 = n*conta
    document.getElementById("resultado").innerHTML += `Tabuada de ${n} <br> ${n} X ${conta} = ${n1}<br>`
    conta ++
    }

}
