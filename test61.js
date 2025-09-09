


let random = Math.random
let a = prompt("entert the first  number :")
let c = prompt("enter the operation")
let b = prompt("entert the secoend number :")



let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
if (random>0.1){
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
   
}

else{
    c=obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)

}