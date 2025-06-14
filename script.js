//Function pour vérifier si le champ “nom”, "prenom" et "mail" ne sont pas vide et message de "merci" qui remplace le h3 de la page d'inscription

function validerEtSoumettre() {
  let nom = document.getElementById("nom").value.trim();
  let prenom = document.getElementById("prenom").value.trim();
  let mail = document.getElementById("mail").value.trim();

  //Utilisation du regex pour validation; le champ de caractères doit contenir seulement des lettres.

  const regexNomPrenom = /^[A-Za-zÀ-ÿ\s'-]+$/;

  //Utilisation du regex pour validation de mail (s'il y a @)
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //Les validations

  if (nom === "" || prenom === "" || mail === "") {
    alert("Merci de remplir tous les champs obligatoires.");
    return;
  }

  //.test(nom) vérifie si la valeur de nom correspond à regexNom. Le signe ! annule le résultat, c'est-à-dire que si le nom ne correspond pas à regexNom, un alerte s'affiche.//

  if (!regexNomPrenom.test(nom)) {
    alert("Le nom ne doit contenir que des lettres.");
    return;
  }

  if (!regexNomPrenom.test(prenom)) {
    alert("Le prénom ne doit contenir que des lettres.");
    return;
  }

  if (!regexEmail.test(mail)) {
    alert("Veuillez entrer une adresse mail valide.");
    return;
  }

  //Message de merci pour l'envoie
  let h3 = document.getElementById("inscriptionChef");
  h3.innerHTML =
    "Merci pour votre inscription. Un e-mail de confirmation vous a été envoyé.";
}

document.addEventListener("DOMContentLoaded", function () {
  //DOMContentLoaded garantit que le script soit exécuté après que tout l'HTML de la page soit chargé, cela empêche des erreurs. 
  let buttoninscription = document.querySelector(".buttonformulaire"); //selectionne le button du formulaire.
  buttoninscription.addEventListener("click", function (event) { //représente l'event précédent, c'est-à-dire que l'event est le click sur le bouton avec la classe .buttonformulaire.
    event.preventDefault(); //empêche la soumission automatique du formulaire et le rechargement de la page sans la validation des champs.
    validerEtSoumettre(); // appeler la fonction
  });
});
