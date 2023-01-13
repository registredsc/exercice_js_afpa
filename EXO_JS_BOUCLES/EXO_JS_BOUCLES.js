//exo 1 Créer une page HTML qui demande à l'utilisateur un prénom La page doit continuer à demander des prénoms à l'utilisateur jusqu'à ce qu'il laisse le champ vide. Enfin, la page affiche sur la console le nombre de prénoms et les prénoms saisis.

let prenom = window.prompt("Saisissez un prénom");
let i = 0;
while (prenom != "") {
    i++;
    prenom = window.prompt("Saisissez un prénom");
}
window.alert("Vous avez saisi " + i + " prénoms");
console.log("Exercice 1: Boucles , réalisé par Luca M.E")

//exo 2 Ecrire un programme qui affiche les nombres inférieurs à N.

let N = window.prompt("Saisissez un nombre");
let ii = 0;
while (ii < N) {
    ii++;
    window.alert(i);
}

console.log("Exercice 2: Boucles , réalisé par Luca M.E")
//exo 3 Ecrire un programme qui demande à l'utilisateur de saisir des entiers et en affiche la somme et la moyenne (on arrête la saisie avec la valeur 0).

let entier1 = window.prompt("Saisissez un entier");
let entier2 = window.prompt("Saisissez un autre entier");

let somme = entier1 + entier2;
let moyenne = somme / 2;

if (entier1 == 0 || entier2 == 0) {
    window.alert("Somme : " + somme + "Moyenne : " + moyenne);
} else {
    window.alert("Somme : " + somme + "Moyenne : " + moyenne);
}
console.log("Exercice 3: Boucles , réalisé par Luca M.E")
//exo 4 Ecrire un programme qui calcule les N premiers multiples d'un nombre entier X, N et X étant entrés au clavier.

let X = window.prompt("Saisissez un nombre");
let N1 = window.prompt("Saisissez un autre nombre");
let N2 = 0;
while (N2 < N1) {
    N2++;
    window.alert(X * N2);
}
console.log("Exercice 4: Boucles , réalisé par Luca M.E")

//exo 5 Ecrire le programme qui compte le nombre de voyelles d’un mot saisi au clavier, en utilisant :    myVar.length : retourne le nombre de lettres de la chaîne myVar.  myVar.substring(p,n) : extrait d'une chaîne donnée une sous-chaîne de n caractères à partir de la position p (attention, en Javascript, le 1er caractère se trouve à la position 0)     myVar.indexOf(chaine) : retourne le rang de la première occurrence de chaîne dans la variable myVar donnée (si non trouvé : -1). 

let mot = window.prompt("Saisissez un mot");
let voyelle = 0;
let iii = 0;
while (iii < mot.length) {
    if (mot.substring(iii, iii + 1) == "a" || mot.substring(iii, iii + 1) == "e" || mot.substring(iii, iii + 1) == "i" || mot.substring(iii, iii + 1) == "o" || mot.substring(iii, iii + 1) == "u" || mot.substring(iii, iii + 1) == "y") {
        voyelle++;
    }
    iii++;
}
window.alert("Le mot " + mot + " contient " + voyelle + " voyelles");
console.log("Exercice 5: Boucles , réalisé par Luca M.E")


   

 

