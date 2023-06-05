
function bot() {
    var meses = parseInt(Math.random() * 24) + 1

var nome = document.getElementById("name").value
    switch (meses) {
        case 1:
            document.getElementById("resultado").innerHTML = ` Parabens ${nome}  vai casar em Janeiro <img src="images.jpg">`
            break;
        case 2:
            document.getElementById("resultado").innerHTML = ` Parabens ${nome}  vai casar em fervereiro <img src="images.jpg"> `
            break;
        case 3:
            document.getElementById("resultado").innerHTML = ` Parabens ${nome}  vai casar em março <img src="images.jpg"> `
            break;
        case 4:
            document.getElementById("resultado").innerHTML = ` Parabens ${nome}  vai casar em abril <img src="images.jpg"> `
            break;
        case 5:
            document.getElementById("resultado").innerHTML = ` Parabens ${nome}  vai casar em maio  <img src="images.jpg"> `
            break;
        case 6:
            document.getElementById("resultado").innerHTML = ` Parabens ${nome}  vai casar em Junho  <img src="images.jpg"> `
            break;
        case 7:
            document.getElementById("resultado").innerHTML = ` Parabens ${nome}  vai casar em Julho  <img src="images.jpg"> `
            break;
        case 8:
            document.getElementById("resultado").innerHTML = ` Parabens ${nome}  vai casar em agosto <img src="images.jpg"> `
            break;
        case 9:
            document.getElementById("resultado").innerHTML = ` Parabens ${nome}  vai casar em setembro <img src="images.jpg">  `
            break;
        case 10:
            document.getElementById("resultado").innerHTML = ` Parabens ${nome}  vai casar em outubro  <img src="images.jpg"> `
            break;
        case 11:
            document.getElementById("resultado").innerHTML = ` Parabens ${nome}  vai casar em novembro  <img src="images.jpg"> `
            break;
        case 12:
            document.getElementById("resultado").innerHTML = ` Parabens ${nome}  vai casar em dezembro <img src="images.jpg"> `
            break;

        default:
        case 13:
            document.getElementById("resultado").innerHTML = ` ${nome}  não vai se casar <img src="download.jpg"> `
            break
    }


}