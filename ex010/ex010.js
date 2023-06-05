    function login(){

    var nomeUsu = document.getElementById("use").value
    var sen = String(document.getElementById("senha").value)

    if ( nomeUsu == "adm" && sen == "123"){

    document.getElementById("resultado").innerHTML = ` ${nomeUsu} Conta Valida` }

    else{
        document.getElementById("resultado").innerHTML = `${nomeUsu} Conta Invalida`}
       

   
    }
        
        