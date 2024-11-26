let players = JSON.parse(localStorage.getItem('player')) || [];



 document.getElementById('position').addEventListener('change', function () {
  const gkStats = document.getElementById('gk-stats');
  const otherStats = document.getElementById('other-stats');
  
  if (this.value === 'GK') {
      gkStats.classList.remove('hidden');
      otherStats.classList.add('hidden');
  } else {
      gkStats.classList.add('hidden');
      otherStats.classList.remove('hidden');
  }
});

// Initialisation (au cas où une valeur par défaut est déjà sélectionnée)
document.getElementById('position').dispatchEvent(new Event('change'));



// Afficher l'overlay
function showOverlay() {
  document.getElementById("set-player-overlay").classList.remove("hidden");
}

// Cacher l'overlay
function hideOverlay() {
  document.getElementById("set-player-overlay").classList.add("hidden");
  document.getElementById("playerForm").reset();
}

document.getElementById("add-player").addEventListener("click", showOverlay);

// Validation js
// Sélection du formulaire
 let playerForm = document.getElementById("playerForm");

// Ajout d'écouteurs pour chaque champ
playerForm.name.addEventListener("change", function () {
  validateName(this);
});
playerForm.photo.addEventListener("change", function () {
  validateUrl(this, "Photo URL invalide !");
});
playerForm.flag.addEventListener("change", function () {
  validateUrl(this, "Flag URL invalide !");
});
playerForm.logo.addEventListener("change", function () {
  validateUrl(this, "Logo URL invalide !");
});
playerForm.nationality.addEventListener("change", function () {
  validateText(this, /^[a-zA-ZÀ-ÿ\s-]{2,50}$/, "Nationalité invalide !");
});
playerForm.club.addEventListener("change", function () {
  validateText(this, /^[a-zA-ZÀ-ÿ\s-]{2,50}$/, "Nom du club invalide !");
});
playerForm.rating.addEventListener("change", function () {
  validateNumber(this, 1, 99, "La note doit être entre 1 et 99 !");
});
["pace", "shooting", "passing", "dribbling", "defending", "physical","diving","handling","kicking","reflexes","speed","positioning",].forEach((attr) => {
  playerForm[attr].addEventListener("change", function () {
    validateNumber(this, 1, 99, `${attr} doit être entre 1 et 99 !`);
  });
});

// Fonctions de validation

// Validation du champ "Name"
function validateName(input) {
  let nameRegExp = /^[a-zA-ZÀ-ÿ\s-]{2,50}$/;
  validateField(input, nameRegExp, "Nom invalide !");
}

// Validation des URLs
function validateUrl(input, errorMessage) {
  let urlRegExp = /^(https?:\/\/[^\s]+)$/;
  validateField(input, urlRegExp, errorMessage);
}

// Validation des champs texte avec expression régulière
function validateText(input, regex, errorMessage) {
  validateField(input, regex, errorMessage);
}

// Validation des nombres avec limites
function validateNumber(input, min, max, errorMessage) {
  if (input.value >= min && input.value <= max) {
    setValid(input);
  } else {
    setInvalid(input, errorMessage);
  }
}

// Validation générique avec expression régulière
function validateField(input, regex, errorMessage) {
  if (regex.test(input.value)) {
    setValid(input);
  } else {
    setInvalid(input, errorMessage);
  }
}

// Afficher message de validation valide
function setValid(input) {
  let small = input.nextElementSibling;
  small.innerHTML = "Champ valide !";
  small.classList.remove("text-red-500");
  small.classList.add("text-green-500");
}

// Afficher message d'erreur
function setInvalid(input, errorMessage) {
  let small = input.nextElementSibling;
  small.innerHTML = errorMessage;
  small.classList.remove("text-green-500");
  small.classList.add("text-red-500");
}


function validatePlayerForm(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut

  // Récupérer les champs du formulaire
  const form = document.getElementById("playerForm");

  // Récupérer chaque champ par son nom ou ID
  const name = form.name;
  const photo = form.photo;
  const nationality = form.nationality;
  const flag = form.flag;
  const club = form.club;
  const logo = form.logo;
  const rating = form.rating;
  const pace = form.pace;
  const shooting = form.shooting;
  const passing = form.passing;
  const dribbling = form.dribbling;
  const defending = form.defending;
  const physical = form.physical;

  const diving = form.diving;
  const handling = form.handling;
  const kicking = form.kicking;
  const reflexes = form.reflexes;
  const speed = form.speed;
  const positioning= form.positioning;

  let isValid = true;

  // Appeler les fonctions de validation pour chaque champ
  if (!validateField(name, /^[a-zA-ZÀ-ÿ\s-]{2,50}$/, "Nom invalide !")) isValid = false;
  if (!validateUrl(photo, "URL de photo invalide !")) isValid = false;
  if (!validateField(nationality, /^[a-zA-ZÀ-ÿ\s-]{2,50}$/, "Nationalité invalide !")) isValid = false;
  if (!validateUrl(flag, "URL du drapeau invalide !")) isValid = false;
  if (!validateField(club, /^[a-zA-ZÀ-ÿ\s-]{2,50}$/, "Nom de club invalide !")) isValid = false;
  if (!validateUrl(logo, "URL du logo invalide !")) isValid = false;

  if (!validateNumber(rating, 1, 99, "La note doit être entre 1 et 99 !")) isValid = false;
  if (!validateNumber(pace, 1, 99, "La valeur de vitesse doit être entre 1 et 99 !")) isValid = false;
  if (!validateNumber(shooting, 1, 99, "La valeur de tir doit être entre 1 et 99 !")) isValid = false;
  if (!validateNumber(passing, 1, 99, "La valeur de passe doit être entre 1 et 99 !")) isValid = false;
  if (!validateNumber(dribbling, 1, 99, "La valeur de dribble doit être entre 1 et 99 !")) isValid = false;
  if (!validateNumber(defending, 1, 99, "La valeur de défense doit être entre 1 et 99 !")) isValid = false;
  if (!validateNumber(physical, 1, 99, "La valeur de physique doit être entre 1 et 99 !")) isValid = false;

  if (!validateNumber(diving, 1, 99, "La valeur de physique doit être entre 1 et 99 !")) isValid = false;
  if (!validateNumber(handling, 1, 99, "La valeur de physique doit être entre 1 et 99 !")) isValid = false;
  if (!validateNumber(kicking, 1, 99, "La valeur de physique doit être entre 1 et 99 !")) isValid = false;
  if (!validateNumber(reflexes, 1, 99, "La valeur de physique doit être entre 1 et 99 !")) isValid = false;
  if (!validateNumber(speed, 1, 99, "La valeur de physique doit être entre 1 et 99 !")) isValid = false;
  if (!validateNumber(positioning, 1, 99, "La valeur de physique doit être entre 1 et 99 !")) isValid = false;

  // Si tous les champs sont valides, le formulaire peut être soumis
  if (isValid) {
    alert("Formulaire valide ! Joueur ajouté avec succès.");
    form.submit();
  } else {
    alert("Veuillez corriger les erreurs dans le formulaire.");
  }
}