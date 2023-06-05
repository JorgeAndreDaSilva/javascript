function Gerador() {
    document.getElementById("resultado").innerHTML += ``
    var contaC = document.getElementById("im").value 
   for (var contador = 1; contador <= contaC; contador++ )
   document.getElementById("resultado").innerHTML += `<img src="Cora.png" alt="">`
}
