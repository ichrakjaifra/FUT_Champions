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


const cardsContainer = document.getElementById("cards-container");
const playerForm = document.getElementById("playerForm");
 const addplayer = document.getElementById("addplayer");
const  setPlayerOverlay = document.getElementById("set-player-overlay");

// addplayer.addEventListener('click', function(e){
//     e.preventDefault();
// })

// Soumettre le formulaire
addplayer.addEventListener("click", function(e) {
  e.preventDefault();

  // Récupérer les valeurs du formulaire
  const name = document.getElementById("name").value;
  const photo = document.getElementById("photo").value;
  const position = document.getElementById('position').value;
  const nationality = document.getElementById("nationality").value;
  const flag = document.getElementById("flag").value;
  const club = document.getElementById("club").value;
  const logo = document.getElementById("logo").value;
  const rating = document.getElementById("rating").value;
  const pace = document.getElementById("pace").value;
  const shooting = document.getElementById("shooting").value;
  const passing = document.getElementById("passing").value;
  const dribbling = document.getElementById("dribbling").value;
  const defending = document.getElementById("defending").value;
  const physical = document.getElementById("physical").value;
  console.log(physical);

  const diving = document.getElementById("diving").value;
  const handling = document.getElementById("diving").handling;
  const kicking = document.getElementById("kicking").value;
  const reflexes = document.getElementById("reflexes").value;
  const speed = document.getElementById("speed").value;
  const positioning = document.getElementById("positioning").value;



  // Créer une nouvelle carte
  let div = document.createElement("div");
  div.className = "flex justify-center";
  if( position =="GK")
    {
     div.innerHTML=`
   <div class="cardeGK flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[200px] items-center pt-4 bg-[url('img/badge_gold.png')];">
       <div class="flex flex-col ">
           <div class="flex">
           <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
               <span class="mb-[-5px] font-bold">${rating}</span>
               <span class="text-[10px] font-medium">${position}</span>
          </div>
              <img class="w-20" src="${photo}" alt="photo">
         </div>
           <h6 class="text-center text-sm">${name}</h6>
       </div>
       <div class="flex justify-center gap-1 mt-4">
         <div class="flex flex-col">
           <p class="text-[9px]">DIV</p>
           <p class="text-[9px]">${diving}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">HAN</p>
           <p class="text-[9px]">${handling}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">KIC</p>
           <p class="text-[9px]">${kicking}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">REF</p>
           <p class="text-[9px]">${reflexes}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">SPE</p>
           <p class="text-[9px]">${speed}</p>
         </div>
         <div class="flex flex-col">
           <p class="text-[9px]">POS</p>
           <p class="text-[9px]">${positioning}</p>
         </div>
         </div> 
         <div class="flex gap-4">
               <img src="${flag}" alt="" srcset="" class="w-4">
               <img src="${logo}" alt="" srcset="" class="w-4">
           </div>

      </div>
     `
     cardsContainer.appendChild(div);
    }else{
     div.innerHTML=`
   <div class="cardeNonGK flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[200px] items-center pt-4 bg-[url('img/badge_gold.png')]">
       <div class="flex flex-col">
           <div class="flex">
          <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
               <span class="mb-[-5px] font-bold">${rating}</span>
               <span class="text-[10px] font-medium">${position}</span>
           </div>
               <img class="w-20" src="${photo}" alt="photo">
           </div>
           <h6 class="text-center text-sm">${name}</h6>
       </div>
       
       <div class="flex justify-center gap-2 mt-4">
           <div class="flex flex-col">
               <p class="text-[9px]">PAC</p>
               <p class="text-[9px]">${pace}</p>
           </div>
           <div class="flex flex-col">
               <p class="text-[9px]">SHO</p>
               <p class="text-[9px]">${shooting}</p>
           </div>
           <div class="flex flex-col">
               <p class="text-[9px]">DRI</p>
               <p class="text-[9px]">${dribbling}</p>
           </div>
           <div class="flex flex-col">
               <p class="text-[9px]">DEF</p>
               <p class="text-[9px]">${defending}</p>
           </div>
           <div class="flex flex-col">
               <p class="text-[9px]">PHY</p>
               <p class="text-[9px]">${physical}</p>
           </div> 
       </div>
       <div class="flex gap-4">
               <img src="${flag}" alt="" srcset="" class="w-4">
               <img src="${logo}" alt="" srcset="" class="w-4">
           </div>
   </div>
`

 // Ajouter la carte au conteneur
 cardsContainer.appendChild(div);
    }
    // Réinitialiser et fermer le modal
    playerForm.reset();
    setPlayerOverlay.classList.add("hidden");

});