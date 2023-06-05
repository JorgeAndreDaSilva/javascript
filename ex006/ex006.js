function Calculos() {
   var n1 = Number(document.getElementById("cal").value)

   var n2 = Number(document.getElementById("cal2").value)
 
   var soma = n1 + n2
 
   var sub = n1 - n2
 
   var divi = n1 / n2
 
   var mul = n1 * n2
 
   var resto = n1 % n2
 
   var el = n1 ** n2

   document.getElementById("numero").innerHTML = `<br> 
   ${n1} + ${n2} = ${soma} <br>
   ${n1} - ${n2} = ${sub} <br> 
   ${n1} * ${n2} = ${mul} <br> 
   ${n1} / ${n2} = ${divi} <br> 
    ${n1} % ${n2} = ${resto} <br> 
    ${n1} ** ${n2} = ${el}`


}
     