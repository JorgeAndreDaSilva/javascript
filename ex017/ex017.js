function numero() {
    // var n1 = document.getElementById("resultado").innerHTML=``

    for (let i = 1; i <= 20; i++) {

        if (i % 2 == 1) {
            document.getElementById("resultado").innerHTML += `${i} <br> `
        }
    }
}
