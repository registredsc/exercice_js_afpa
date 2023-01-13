//exo 1 Créer les 2 fonctions suivantes: produit(x, y) qui retourne le produit des 2 variables x, y passées en paramètre. afficheImg(image) qui affiche l'image passée en paramètre. ( Le paramètre image correspond au chemin de votre image ) Veuillez utiliser la propriété innerHTML pour réaliser cet exercice 

let x = window.prompt("Entrez un nombre");
let y = window.prompt("Entrez un multiplicateur");
function produit(x, y) {
    let text = document.getElementById("produit").innerHTML = "<p>Le produit de " + x + " et " + y + " est égal à " + x * y + "</p>";
}

function afficheImg(image) {
    let text =  document.getElementById("img").innerHTML = "<img src='./papillon.jpg" + image + "'>";
}

function cube(x) {
    
    let text = document.getElementById("cube").innerHTML = "<p>Le cube de " + x + " est égal à " + x * x * x + "</p>";
    
}
