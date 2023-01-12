let question1 = window.prompt("Quel est ton nom");
let question2 = window.prompt("Quel est ton prénom");
if (window.confirm("Etes-vous un homme ?")) {
    window.alert("Bonjour Monsieur " + question1 + " " + question2);
} else {
    window.alert("Bonjour Madame " + question1 + " " + question2);
}