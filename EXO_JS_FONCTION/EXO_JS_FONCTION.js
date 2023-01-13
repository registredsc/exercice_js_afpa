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


//exo 2 Concevez la fonction strtok() qui prend 3 paramètres str1, str2, n en entrée et renvoie une chaîne de caractères : str1 est composée d'une liste de mots séparés par le caractère str2. strtok() sert à extraire le nième mot de str1.

function strtok(str1, str2, n) {
    let text = document.getElementById("strtok").innerHTML = "<p>Le nième mot de " + str1 + " est égal à " + str1.split(str2)[n] + "</p>";
}