function numero() {
    var n = document.getElementById("nume").value
    document.getElementById("resultado").innerHTML = `Tabela do ${n} é <br>`

    

    for (let i = 1; i <= 10; i++) {
        var n = document.getElementById("nume").value
        var n1 = n * i
        document.getElementById("resultado").innerHTML += `${n} X ${i} = ${n1}<br>`
        
    }
}
