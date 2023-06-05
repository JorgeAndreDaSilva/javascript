
function Exibir(){
    var filme = ['Mario', 'Trem-bala', 'Homem-aranha', 'Piranhas-2', 'Pokemon', 'Barbie']
    for ( var i = 0; i < filme.length; i++){
        document.getElementById("resultado").innerHTML += `Posições no vetor ${i} - ${filme[i]} <br> <br>`
    }
}