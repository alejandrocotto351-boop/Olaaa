let input=document.getElementById("Input")
let input2=document.getElementById("Input2")
let button=document.getElementById("Boton")
let pe=document.getElementById("Suma")
let no1
let no2
let r

button.addEventListener("click", oy)

function oy(){
    no1=Number(input.value)
    no2=Number(input2.value)
    r=no1+no2
    pe.textContent="Total="+r

}