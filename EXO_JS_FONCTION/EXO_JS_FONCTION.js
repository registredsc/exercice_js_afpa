//exo 1 Créer les 2 fonctions suivantes :
// 1. produit(x, y) qui retourne le produit des 2 variables x, y passées en paramètre.
// 2. afficheImg(image) qui affiche l'image dont le nom est passé en paramètre.
//3 Veuillez utiliser la propriété innerHTML pour réaliser cet exercice

let x = window.prompt("Entrez un nombre");
let y = window.prompt("Entrez un multiplicateur");

function produit(x, y) {
    return x * y;
}

function afficheImg(image) {
    document.getElementById("image").innerHTML = "<img src='" + image + "' alt='image'>";
}




//exo 2 Concevez la fonction strtok() qui prend 3 paramètres str1, str2, n en entrée et renvoie une chaîne de caractères :
// 1.  str1 est composée d'une liste de mots séparés par le caractère str2. strtok() sert à extraire le nième mot de str1.

function strtok(str1, str2, n) {
    let text = document.getElementById("strtok").innerHTML = "<p>Le nième mot de " + str1 + " est égal à " + str1.split(str2)[n] + "</p>";
}