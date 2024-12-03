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

function hideOverlayedit(){
  document.getElementById("editAddplayermodal").classList.add("hidden");
  document.getElementById("editmodalform").reset();
}

document.getElementById("add-player").addEventListener("click", showOverlay);

/*************************/
let positionSelect = document.querySelector('#position');
let otherForm = document.getElementById('other-stats');
let GKForm = document.getElementById('gk-stats');


positionSelect.addEventListener('change', (e) => {
    const selectedValue = e.target.value;


    if (selectedValue === 'GK') {
        GKForm.classList.remove('hidden');
        otherForm.classList.add('hidden');
    } else {
        otherForm.classList.remove('hidden');
        GKForm.classList.add('hidden');
    }
});




/********************************/
// Validation js

// let playerForm = document.getElementById("playerForm");


// playerForm.name.addEventListener("change", function () {
//   validateName(this);
// });
// playerForm.photo.addEventListener("change", function () {
//   validateUrl(this, "Photo URL invalide !");
// });
// playerForm.flag.addEventListener("change", function () {
//   validateUrl(this, "Flag URL invalide !");
// });
// playerForm.logo.addEventListener("change", function () {
//   validateUrl(this, "Logo URL invalide !");
// });
// playerForm.nationality.addEventListener("change", function () {
//   validateText(this, /^[a-zA-ZÀ-ÿ\s-]{2,50}$/, "Nationalité invalide !");
// });
// playerForm.club.addEventListener("change", function () {
//   validateText(this, /^[a-zA-ZÀ-ÿ\s-]{2,50}$/, "Nom du club invalide !");
// });
// playerForm.rating.addEventListener("change", function () {
//   validateNumber(this, 1, 99, "La note doit être entre 1 et 99 !");
// });
// ["pace", "shooting", "passing", "dribbling", "defending", "physical","diving","handling","kicking","reflexes","speed","positioning",].forEach((attr) => {
//   playerForm[attr].addEventListener("change", function () {
//     validateNumber(this, 1, 99, `${attr} doit être entre 1 et 99 !`);
//   });
// });




// function validateName(input) {
//   let nameRegExp = /^[a-zA-ZÀ-ÿ\s-]{2,50}$/;
//   validateField(input, nameRegExp, "Nom invalide !");
// }


// function validateUrl(input, errorMessage) {
//   let urlRegExp = /^(https?:\/\/[^\s]+)$/;
//   validateField(input, urlRegExp, errorMessage);
// }


// function validateText(input, regex, errorMessage) {
//   validateField(input, regex, errorMessage);
// }


// function validateNumber(input, min, max, errorMessage) {
//   if (input.value >= min && input.value <= max) {
//     setValid(input);
//   } else {
//     setInvalid(input, errorMessage);
//   }
// }


// function validateField(input, regex, errorMessage) {
//   if (regex.test(input.value)) {
//     setValid(input);
//   } else {
//     setInvalid(input, errorMessage);
//   }
// }


// function setValid(input) {
//   let small = input.nextElementSibling;
//   small.innerHTML = "Champ valide !";
//   small.classList.remove("text-red-500");
//   small.classList.add("text-green-500");
// }


// function setInvalid(input, errorMessage) {
//   let small = input.nextElementSibling;
//   small.innerHTML = errorMessage;
//   small.classList.remove("text-green-500");
//   small.classList.add("text-red-500");
// }


// function validatePlayerForm(event) {
//   event.preventDefault();


//   const form = document.getElementById("playerForm");


//   const name = form.name;
//   const photo = form.photo;
//   const nationality = form.nationality;
//   const flag = form.flag;
//   const club = form.club;
//   const logo = form.logo;
//   const rating = form.rating;
//   const pace = form.pace;
//   const shooting = form.shooting;
//   const passing = form.passing;
//   const dribbling = form.dribbling;
//   const defending = form.defending;
//   const physical = form.physical;

//   const diving = form.diving;
//   const handling = form.handling;
//   const kicking = form.kicking;
//   const reflexes = form.reflexes;
//   const speed = form.speed;
//   const positioning= form.positioning;

//   let isValid = true;


//   if (!validateField(name, /^[a-zA-ZÀ-ÿ\s-]{2,50}$/, "Nom invalide !")) isValid = false;
//   if (!validateUrl(photo, "URL de photo invalide !")) isValid = false;
//   if (!validateField(nationality, /^[a-zA-ZÀ-ÿ\s-]{2,50}$/, "Nationalité invalide !")) isValid = false;
//   if (!validateUrl(flag, "URL du drapeau invalide !")) isValid = false;
//   if (!validateField(club, /^[a-zA-ZÀ-ÿ\s-]{2,50}$/, "Nom de club invalide !")) isValid = false;
//   if (!validateUrl(logo, "URL du logo invalide !")) isValid = false;

//   if (!validateNumber(rating, 1, 99, "La note doit être entre 1 et 99 !")) isValid = false;
//   if (!validateNumber(pace, 1, 99, "La valeur de vitesse doit être entre 1 et 99 !")) isValid = false;
//   if (!validateNumber(shooting, 1, 99, "La valeur de tir doit être entre 1 et 99 !")) isValid = false;
//   if (!validateNumber(passing, 1, 99, "La valeur de passe doit être entre 1 et 99 !")) isValid = false;
//   if (!validateNumber(dribbling, 1, 99, "La valeur de dribble doit être entre 1 et 99 !")) isValid = false;
//   if (!validateNumber(defending, 1, 99, "La valeur de défense doit être entre 1 et 99 !")) isValid = false;
//   if (!validateNumber(physical, 1, 99, "La valeur de physique doit être entre 1 et 99 !")) isValid = false;

//   if (!validateNumber(diving, 1, 99, "La valeur de physique doit être entre 1 et 99 !")) isValid = false;
//   if (!validateNumber(handling, 1, 99, "La valeur de physique doit être entre 1 et 99 !")) isValid = false;
//   if (!validateNumber(kicking, 1, 99, "La valeur de physique doit être entre 1 et 99 !")) isValid = false;
//   if (!validateNumber(reflexes, 1, 99, "La valeur de physique doit être entre 1 et 99 !")) isValid = false;
//   if (!validateNumber(speed, 1, 99, "La valeur de physique doit être entre 1 et 99 !")) isValid = false;
//   if (!validateNumber(positioning, 1, 99, "La valeur de physique doit être entre 1 et 99 !")) isValid = false;

  
//   if (isValid) {
//     alert("Formulaire valide ! Joueur ajouté avec succès.");
//     form.submit();
//   } else {
//     alert("Veuillez corriger les erreurs dans le formulaire.");
//   }
// }

// playerForm.addEventListener("submit", validatePlayerForm);





// const cardsContainer = document.getElementById("cards-container");
//  const addplayer = document.getElementById("addplayer");
// const  setPlayerOverlay = document.getElementById("set-player-overlay");


// addplayer.addEventListener("click", function(e) {
//   e.preventDefault();
//   const name = document.getElementById("name").value;
//   const photo = document.getElementById("photo").value;
//   const position = document.getElementById('position').value;
//   const nationality = document.getElementById("nationality").value;
//   const flag = document.getElementById("flag").value;
//   const club = document.getElementById("club").value;
//   const logo = document.getElementById("logo").value;
//   const rating = document.getElementById("rating").value;
//   const pace = document.getElementById("pace").value;
//   const shooting = document.getElementById("shooting").value;
//   const passing = document.getElementById("passing").value;
//   const dribbling = document.getElementById("dribbling").value;
//   const defending = document.getElementById("defending").value;
//   const physical = document.getElementById("physical").value;
//   const diving = document.getElementById("diving").value;
//   const handling = document.getElementById("diving").handling;
//   const kicking = document.getElementById("kicking").value;
//   const reflexes = document.getElementById("reflexes").value;
//   const speed = document.getElementById("speed").value;
//   const positioning = document.getElementById("positioning").value;

//   let obj = {
//     name:name,
//      photo : photo,
//      position : position,
//      flag : flag,
//      nationality : nationality,
//      logo : logo,
//      club : club,
//      rating : rating,
//      pace : pace,
//      shooting : shooting,
//      passing : passing,
//      dribbling : dribbling,
//      defending : defending,
//      physical : physical,
//       diving : diving,
//    handling : handling,
//    kicking : kicking,
//    reflexes : reflexes,
//    speed : speed,
//    positioning : positioning

     
//   }
  
//   data.push(obj);
//   console.log(data);


//   // Créer une nouvelle carte
//   let div = document.createElement("div");
//   div.className = "flex justify-center";
//   if( position =="GK")
//     {
//      div.innerHTML=`
//    <div class="cardeGK flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[200px] items-center pt-4 bg-[url('img/badge_gold.png')];">
//        <div class="flex flex-col ">
//            <div class="flex">
//            <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
//                <span class="mb-[-5px] font-bold">${rating}</span>
//                <span class="text-[10px] font-medium">${position}</span>
//           </div>
//               <img class="w-20" src="${photo}" alt="photo">
//          </div>
//            <h6 class="text-center text-sm">${name}</h6>
//        </div>
//        <div class="flex justify-center gap-1 mt-4">
//          <div class="flex flex-col">
//            <p class="text-[9px]">DIV</p>
//            <p class="text-[9px]">${diving}</p>
//          </div>
//          <div class="flex flex-col">
//            <p class="text-[9px]">HAN</p>
//            <p class="text-[9px]">${handling}</p>
//          </div>
//          <div class="flex flex-col">
//            <p class="text-[9px]">KIC</p>
//            <p class="text-[9px]">${kicking}</p>
//          </div>
//          <div class="flex flex-col">
//            <p class="text-[9px]">REF</p>
//            <p class="text-[9px]">${reflexes}</p>
//          </div>
//          <div class="flex flex-col">
//            <p class="text-[9px]">SPE</p>
//            <p class="text-[9px]">${speed}</p>
//          </div>
//          <div class="flex flex-col">
//            <p class="text-[9px]">POS</p>
//            <p class="text-[9px]">${positioning}</p>
//          </div>
//          </div> 
//          <div class="flex gap-4">
//                <img src="${flag}" alt="" srcset="" class="w-4">
//                <img src="${logo}" alt="" srcset="" class="w-4">
//            </div>

//       </div>
//      `
//      cardsContainer.appendChild(div);
     
//     }else{
      
//      div.innerHTML=`
//    <div class="cardeNonGK flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[200px] items-center pt-4 bg-[url('img/badge_gold.png')]">
//        <div class="flex flex-col">
//            <div class="flex">
//           <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
//                <span class="mb-[-5px] font-bold">${rating}</span>
//                <span class="text-[10px] font-medium">${position}</span>
//            </div>
//                <img class="w-20" src="${photo}" alt="photo">
//            </div>
//            <h6 class="text-center text-sm">${name}</h6>
//        </div>
       
//        <div class="flex justify-center gap-2 mt-4">
//            <div class="flex flex-col">
//                <p class="text-[9px]">PAC</p>
//                <p class="text-[9px]">${pace}</p>
//            </div>
//            <div class="flex flex-col">
//                <p class="text-[9px]">SHO</p>
//                <p class="text-[9px]">${shooting}</p>
//            </div>
//            <div class="flex flex-col">
//                <p class="text-[9px]">DRI</p>
//                <p class="text-[9px]">${dribbling}</p>
//            </div>
//            <div class="flex flex-col">
//                <p class="text-[9px]">DEF</p>
//                <p class="text-[9px]">${defending}</p>
//            </div>
//            <div class="flex flex-col">
//                <p class="text-[9px]">PHY</p>
//                <p class="text-[9px]">${physical}</p>
//            </div> 
//        </div>
//        <div class="flex gap-4">
//                <img src="${flag}" alt="" srcset="" class="w-4">
//                <img src="${logo}" alt="" srcset="" class="w-4">
//            </div>
//    </div>
// `

//  // Ajouter la carte au conteneur
//  cardsContainer.appendChild(div);
//     }
    
//     playerForm.reset();
//     setPlayerOverlay.classList.add("hidden");

// });