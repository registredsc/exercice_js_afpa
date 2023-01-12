let question1 = window.prompt("Saisissez un nombre");

if (question1 % 2 == 0) {
    window.alert("Le nombre est pair et divisible par 2");
} else { 
}


let question2 = window.prompt("Quel est votre année de naissance ?");

let age = 2023 - question2
if (age >= 18) {
    window.alert("Vous êtes majeur");
} else {
    window.alert("Vous êtes mineur");
}


let question3 = window.prompt("Saisissez un nombre");
let question4 = window.prompt("Saisissez un  autre nombre");
let question5 = window.prompt("Saisissez un  opérateur (+ , - , / , *)");

if (question5 == "+") {
    window.alert(question3 + question4);
} else if (question5 == "-") {
    window.alert(question3 - question4);
} else if (question5 == "/") {
    window.alert(question3 / question4);
} else if (question5 == "*") {  
    window.alert(question3 * question4);
} else if ( question5 != "+" || "-" || "/" || "*") {
    window.alert("Erreur un opérateur invalide a été choisis");
}