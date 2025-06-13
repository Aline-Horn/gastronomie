//Function pour vérifier si le champ “nom”, "prenom" et "mail" ne sont pas vide et message de "merci" qui remplace le h3 de la page d'inscription

function validerEtSoumettre() {
  let nom = document.getElementById("nom").value.trim();
  let prenom = document.getElementById("prenom").value.trim();
  let mail = document.getElementById("mail").value.trim();

  //Utilisation du regex pour validation; le champ de caractères doit contenir seulement des lettres.

  const regexNomPrenom =  /^[A-Za-zÀ-ÿ\s'-]+$/;

  //Utilisation du regex pour validation de mail (s'il y a @)
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //Les validations

  if (nom === "" || prenom === "" || mail === "") {
    alert("Merci de remplir tous les champs obligatoires.");
    return;
  }

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

//DOMContentLoaded garantit que le script soit exécuté après que tout le HTML de la page a été chargé.
document.addEventListener("DOMContentLoaded", function () {
  let buttoninscription = document.querySelector(".buttonformulaire");
  buttoninscription.addEventListener("click", function (event) {
    event.preventDefault();
    validerEtSoumettre(); // appeler la fonction
  });
});
