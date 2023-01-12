let a = 100;
let b = a--;
let c = a++;
let d = b||c
let d2 = b&&c
alert(`ceci est une chaîne de caractères ${a}`)
alert(`B = ${b}`)
alert(`C = ${c}`)
if(d==true){
    alert(`D = ${d}`)
} else {
    alert(`D = ${d2}`)
}