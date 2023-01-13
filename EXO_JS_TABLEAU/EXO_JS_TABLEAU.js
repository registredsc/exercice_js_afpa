//Exo 1 Ecrivez un programme permettant de créer un tableau, dont la taille est saisie au clavier. Ensuite l'utilisateur doit rentrer les différentes valeurs du tableau Puis votre programme doit afficher le contenu du tableau.

var tab = new Array();
var taille = parseInt(prompt("Saisir la taille du tableau"));
for (var i = 0; i < taille; i++) {
    tab[i] = parseInt(prompt("Saisir la valeur " + i));
}
for (var i = 0; i < taille; i++) {
    document.write(tab[i] + " ");
}

//Exo 2 Créer le programme qui fournira un menu permettant d’obtenir les fonctionnalités suivantes à partir d’un tableau à une dimension
// 1. Afficher le contenu du tableau
// 2. Affichage du contenu d’un poste dont l’index est saisi au clavier
// 3. Affichage du maximum et de la moyenne des postes du tableau
// Ce programme sera structuré de la manière suivante :
// 1. une fonction GetInteger pour lire un entier au clavier, 
// 2. une fonction InitTab pour créer et initialiser l’instance de tableau : le nombre de postes souhaité sera entré au clavier,
// 3. une fonction SaisieTab pour permettre la saisie des différents postes du tableau,
// 4. une fonction AfficheTab pour afficher le contenu du tableau,
// 5. une fonction RechercheTab pour afficher le contenu d’un poste de tableau dont le rang est saisi au clavier
// 6. une fonction InfoTab qui affichera le maximum et la moyenne des postes.
//Les fonctions seront appelées successivement

function GetInteger() {
    return parseInt(prompt("Saisir un nombre"));
}

function InitTab() {
    var tab = new Array();
    var taille = GetInteger();
    for (var i = 0; i < taille; i++) {
        tab[i] = GetInteger();
    }
    return tab;
}

function SaisieTab(tab) {
    for (var i = 0; i < tab.length; i++) {
        tab[i] = GetInteger();
    }
}

function AfficheTab(tab) {
    for (var i = 0; i < tab.length; i++) {
        document.write(tab[i] + " ");
    }
}

function RechercheTab(tab) {
    var rang = GetInteger();
    document.write(tab[rang]);
}

function InfoTab(tab) {
    var max = tab[0];
    var somme = 0;
    for (var i = 0; i < tab.length; i++) {
        if (tab[i] > max) {
            max = tab[i];
        }
        somme += tab[i];
    }
    document.write("Max : " + max + " Moyenne : " + somme / tab.length);
}

var tab = InitTab();
var choix = GetInteger();
switch (choix) {
    case 1:
        AfficheTab(tab);
        break;
    case 2:
        RechercheTab(tab);
        break;
    case 3:
        InfoTab(tab);   
        break;
    default:
        break;
}


//Exo 3 Ecrire le programme qui réalise le tri à bulles.

function TriBulles(tab) {
    var temp;
    for (var i = 0; i < tab.length; i++) {
        for (var j = 0; j < tab.length - 1; j++) {
            if (tab[j] > tab[j + 1]) {
                temp = tab[j];
                tab[j] = tab[j + 1];
                tab[j + 1] = temp;
            }
        }
    }
}




