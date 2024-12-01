let addedToSquadArr = [];
let dataplayer = new XMLHttpRequest();
dataplayer.open("GET", "https://brofortech.com/ichrak.json", true);
dataplayer.send();

dataplayer.onreadystatechange = function () {
  if (dataplayer.readyState === 4 && dataplayer.status === 200) {
    let d = JSON.parse(dataplayer.response);
    let data = d.players;

    function addFiltreplayerToPosition(positionFilter) {
      const filter = data.filter(player => player.position === positionFilter);
      const filterPlayers = document.getElementById("filtredPlayers");
      filterPlayers.innerHTML = '';

      filter.forEach(player => {
        let div = document.createElement("div")
        div.className = "flex justify-center";
        if(player.position=="GK")
          {
           div.innerHTML=`
         <div class="cardeGK flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[200px] items-center pt-4 bg-[url('img/badge_gold.png')]">
             <div class="flex flex-col ">
                 <div class="flex">
                 <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
                     <span class="mb-[-5px] font-bold">${player.rating}</span>
                     <span class="text-[10px] font-medium">${player.position}</span>
                </div>
                    <img class="w-20" src="${player.photo}" alt="photo">
               </div>
                 <h6 class="text-center text-sm">${player.name}</h6>
             </div>
             <div class="flex justify-center gap-1 mt-4">
               <div class="flex flex-col">
                 <p class="text-[9px]">DIV</p>
                 <p class="text-[9px]">${player.diving}</p>
               </div>
               <div class="flex flex-col">
                 <p class="text-[9px]">HAN</p>
                 <p class="text-[9px]">${player.handling}</p>
               </div>
               <div class="flex flex-col">
                 <p class="text-[9px]">KIC</p>
                 <p class="text-[9px]">${player.kicking}</p>
               </div>
               <div class="flex flex-col">
                 <p class="text-[9px]">REF</p>
                 <p class="text-[9px]">${player.reflexes}</p>
               </div>
               <div class="flex flex-col">
                 <p class="text-[9px]">SPE</p>
                 <p class="text-[9px]">${player.speed}</p>
               </div>
               <div class="flex flex-col">
                 <p class="text-[9px]">POS</p>
                 <p class="text-[9px]">${player.positioning}</p>
               </div>
               </div> 
               <div class="flex gap-4">
                     <img src="${player.flag}" alt="" srcset="" class="w-4">
                     <img src="${player.logo}" alt="" srcset="" class="w-4">
                 </div>

            </div>
           `
    }else{
        div.innerHTML = `
          <div class="cardeNonGK flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[200px] items-center pt-4 bg-[url('img/badge_gold.png')]">
             <div class="flex flex-col">
                 <div class="flex">
                <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
                     <span class="mb-[-5px] font-bold">${player.rating}</span>
                     <span class="text-[10px] font-medium">${player.position}</span>
                 </div>
                     <img class="w-20" src="${player.photo}" alt="photo">
                 </div>
                 <h6 class="text-center text-sm">${player.name}</h6>
             </div>
             
             <div class="flex justify-center gap-2 mt-4">
                 <div class="flex flex-col">
                     <p class="text-[9px]">PAC</p>
                     <p class="text-[9px]">${player.pace}</p>
                 </div>
                 <div class="flex flex-col">
                     <p class="text-[9px]">SHO</p>
                     <p class="text-[9px]">${player.shooting}</p>
                 </div>
                 <div class="flex flex-col">
                     <p class="text-[9px]">DRI</p>
                     <p class="text-[9px]">${player.dribbling}</p>
                 </div>
                 <div class="flex flex-col">
                     <p class="text-[9px]">DEF</p>
                     <p class="text-[9px]">${player.defending}</p>
                 </div>
                 <div class="flex flex-col">
                     <p class="text-[9px]">PHY</p>
                     <p class="text-[9px]">${player.physical}</p>
                 </div> 
             </div>
             <div class="flex gap-4">
                     <img src="${player.flag}" alt="" srcset="" class="w-4">
                     <img src="${player.logo}" alt="" srcset="" class="w-4">
                 </div>
         </div>
    `
    }

    div.addEventListener('click', function () {
        let positionElement = document.querySelector(`[player-position="${player.position}"]`);
        console.log(positionElement)
        positionElement.classList.add("bg-[url('img/badge_gold.png')]")
        if(positionFilter == "GK"){
          positionElement.innerHTML = `
            <div class="flex flex-col ">
                 <div class="flex">
                 <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
                     <span class="mb-[-5px] font-bold">${player.rating}</span>
                     <span class="text-[10px] font-medium">${player.position}</span>
                </div>
                    <img class="w-20" src="${player.photo}" alt="photo">
               </div>
                 <h6 class="text-center text-sm">${player.name}</h6>
             </div>
             <div class="flex justify-center gap-1 mt-4">
               <div class="flex flex-col">
                 <p class="text-[9px]">DIV</p>
                 <p class="text-[9px]">${player.diving}</p>
               </div>
               <div class="flex flex-col">
                 <p class="text-[9px]">HAN</p>
                 <p class="text-[9px]">${player.handling}</p>
               </div>
               <div class="flex flex-col">
                 <p class="text-[9px]">KIC</p>
                 <p class="text-[9px]">${player.kicking}</p>
               </div>
               <div class="flex flex-col">
                 <p class="text-[9px]">REF</p>
                 <p class="text-[9px]">${player.reflexes}</p>
               </div>
               <div class="flex flex-col">
                 <p class="text-[9px]">SPE</p>
                 <p class="text-[9px]">${player.speed}</p>
               </div>
               <div class="flex flex-col">
                 <p class="text-[9px]">POS</p>
                 <p class="text-[9px]">${player.positioning}</p>
               </div>
               </div> 
               <div class="flex gap-4">
                     <img src="${player.flag}" alt="" srcset="" class="w-4">
                     <img src="${player.logo}" alt="" srcset="" class="w-4">
                 </div>

            </div>
           `;
        }else{
          positionElement.innerHTML = `
          <div class="cardeNonGK flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[200px] items-center pt-4 bg-[url('img/badge_gold.png')]">
             <div class="flex flex-col">
                 <div class="flex">
                <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
                     <span class="mb-[-5px] font-bold">${player.rating}</span>
                     <span class="text-[10px] font-medium">${player.position}</span>
                 </div>
                     <img class="w-20" src="${player.photo}" alt="photo">
                 </div>
                 <h6 class="text-center text-sm">${player.name}</h6>
             </div>
             
             <div class="flex justify-center gap-2 mt-4">
                 <div class="flex flex-col">
                     <p class="text-[9px]">PAC</p>
                     <p class="text-[9px]">${player.pace}</p>
                 </div>
                 <div class="flex flex-col">
                     <p class="text-[9px]">SHO</p>
                     <p class="text-[9px]">${player.shooting}</p>
                 </div>
                 <div class="flex flex-col">
                     <p class="text-[9px]">DRI</p>
                     <p class="text-[9px]">${player.dribbling}</p>
                 </div>
                 <div class="flex flex-col">
                     <p class="text-[9px]">DEF</p>
                     <p class="text-[9px]">${player.defending}</p>
                 </div>
                 <div class="flex flex-col">
                     <p class="text-[9px]">PHY</p>
                     <p class="text-[9px]">${player.physical}</p>
                 </div> 
             </div>
             <div class="flex gap-4">
                     <img src="${player.flag}" alt="" srcset="" class="w-4">
                     <img src="${player.logo}" alt="" srcset="" class="w-4">
                 </div>
         </div>
    `
        }

        let img = document.createElement("img")
        img.setAttribute("class","w-5 bg-red-500 rounded-full hover:scale-110 relative bottom-[10px] left-[45px] hidden")
        img.setAttribute("src","img/delete.png");
        img.setAttribute("alt","deleteico")

        
        positionElement.addEventListener("mouseover",function(){
            img.classList.remove("hidden")
            img.classList.add("block")
        })
        positionElement.addEventListener("mouseleave",function(){
            img.classList.remove("block")
            img.classList.add("hidden")
        })
        

        img.addEventListener("click",function(event){

          event.stopPropagation();

          const playerIndex = addedToSquadArr.findIndex(play => play.name === player.name);
          
          
              data.splice(playerIndex, 1);
              document.getElementById("modalfilter").classList.add("hidden");
              document.getElementById("modalfilter").classList.remove("flex");
          

            positionElement.innerHTML = "";
            let addImg = document.createElement('img');
            
            addImg.setAttribute("class"," w-14 cursor-pointer  rounded-full");
            addImg.setAttribute("src","img/261370-200.png")

            positionElement.appendChild(addImg);

            // positionElement.classList.add("bg-blackcard")
            positionElement.classList.remove("bg-[url('img/badge_gold.png')]")
            
            
            document.getElementById("modalfilter").classList.add("hidden");
            document.getElementById("modalfilter").classList.remove("flex");
            
        })
        
        positionElement.appendChild(img);


        let editimg = document.createElement('img');

        editimg.setAttribute("class","w-5 bg-green-500 rounded-full hover:scale-110 relative bottom-[10px] left-[45px] hidden");
        editimg.setAttribute("src","img/modify.png");
        editimg.setAttribute("alt","editico");

        positionElement.addEventListener("mouseover",function(){
          editimg.classList.remove("hidden")
          editimg.classList.add("block");
      })
      positionElement.addEventListener("mouseleave",function(){
          editimg.classList.remove("block")
          editimg.classList.add("hidden")
      })


        

        editimg.addEventListener('click',function(event){
          event.stopPropagation();

          document.getElementById("editAddplayermodal").classList.add("flex");
          document.getElementById("editAddplayermodal").classList.remove("hidden");
          document.getElementById('editPosition').disabled = true;

          document.getElementById('editPlayerName').value = player.name
          document.getElementById('editNationality').value = player.nationality
          document.getElementById('editClubName').value = player.club
          document.getElementById('editCardPhotourl').value = player.photo
          document.getElementById('editPosition').value = player.position
          document.getElementById('editlogo').value = player.logo
          document.getElementById('editrating').value = player.rating
          document.getElementById('editFlagName').value = player.flag

          


          if(player.position === 'GK' && document.getElementById('position').value == "GK" ){
            document.getElementById("editgk-stats").classList.remove('hidden');
            document.getElementById("editgk-stats").classList.add('grid');

            document.getElementById("editother-stats").classList.add('hidden');
            document.getElementById("editother-stats").classList.remove('grid');
              
            document.getElementById("editGkDiving").value = player.diving
            document.getElementById("editGkHandling").value = player.handling
            document.getElementById("editGkKicking").value = player.kicking
            document.getElementById("editGkReflexe").value = player.reflexes
            document.getElementById("editGkSpeed").value = player.speed
            document.getElementById("editGkPosition").value = player.positioning
          }else{
            if(document.getElementById('position').value !== 'GK'){
            document.getElementById("editother-stats").classList.remove('hidden');
            document.getElementById("editother-stats").classList.add('grid');

            document.getElementById("editgk-stats").classList.add('hidden');
            document.getElementById("editgk-stats").classList.remove('grid');
            
            document.getElementById("editNormalePace").value = player.pace
            document.getElementById("editNormaleShoot").value = player.shooting
            document.getElementById("editNormalePass").value = player.passing
            document.getElementById("editNormaleDriblle").value = player.dribbling
            document.getElementById("editNormaleDefend").value = player.defending
            document.getElementById("editNormalePhy").value = player.physical
          }
          }
        
        document.getElementById('editAddplayertolst').addEventListener('click',function(){
          
          player.name = document.getElementById('editPlayerName').value
          player.nationality = document.getElementById('editNationality').value
          player.club = document.getElementById('editClubName').value
          player.photo = document.getElementById('editCardPhotourl').value
          player.position = document.getElementById('editPosition').value
          player.logo = document.getElementById('editlogo').value
          player.rating = document.getElementById('editrating').value
          player.flag = document.getElementById('editFlagName').value

          player.diving = document.getElementById('editGkDiving').value
          player.handling = document.getElementById('editGkHandling').value
          player.kicking = document.getElementById('editGkKicking').value
          player.reflexes = document.getElementById('editGkReflexe').value
          player.speed = document.getElementById('editGkSpeed').value
          player.positioning = document.getElementById('editGkPosition').value

          player.pace = document.getElementById('editNormalePace').value
          player.shooting = document.getElementById('editNormaleShoot').value
          player.passing = document.getElementById('editNormalePass').value
          player.dribbling = document.getElementById('editNormaleDriblle').value
          player.defending = document.getElementById('editNormaleDefend').value
          player.physical = document.getElementById('editNormalePhy').value

          


          let posEle = document.querySelector(`#${player.position}`);
              
              if (posEle) {
                posEle.innerHTML = `
                <div class="flex flex-col">
                 <div class="flex">
                <div class="flex flex-col mr-[-8px] text-[#362f16] items-center">
                     <span class="mb-[-5px] font-bold">${player.rating}</span>
                     <span class="text-[10px] font-medium">${player.position}</span>
                 </div>
                     <img class="w-20" src="${player.photo}" alt="photo">
                 </div>
                 <h6 class="text-center text-sm">${player.name}</h6>
             </div>
             
             <div class="flex justify-center gap-2 mt-4">
                 <div class="flex flex-col">
                     <p class="text-[9px]">PAC</p>
                     <p class="text-[9px]">${player.pace}</p>
                 </div>
                 <div class="flex flex-col">
                     <p class="text-[9px]">SHO</p>
                     <p class="text-[9px]">${player.shooting}</p>
                 </div>
                 <div class="flex flex-col">
                     <p class="text-[9px]">DRI</p>
                     <p class="text-[9px]">${player.dribbling}</p>
                 </div>
                 <div class="flex flex-col">
                     <p class="text-[9px]">DEF</p>
                     <p class="text-[9px]">${player.defending}</p>
                 </div>
                 <div class="flex flex-col">
                     <p class="text-[9px]">PHY</p>
                     <p class="text-[9px]">${player.physical}</p>
                 </div> 
             </div>
             <div class="flex gap-4">
                     <img src="${player.flag}" alt="" srcset="" class="w-4">
                     <img src="${player.logo}" alt="" srcset="" class="w-4">
                 </div>
         </div>
    `;
              }

              
              posEle.appendChild(editimg)
              posEle.appendChild(img)
          
              document.getElementById("editAddplayermodal").classList.remove("flex");
              document.getElementById("editAddplayermodal").classList.add("hidden");
        })

          
        })

        positionElement.appendChild(editimg)


        updateArraySquadPlayers();
        

        // add players added to squad to an array
        function updateArraySquadPlayers(){
        addedToSquadArr.push(player)
      }
        
        
        document.getElementById("modalfilter").classList.add("hidden");
        document.getElementById("modalfilter").classList.remove("flex");
      });
  
     
      filterPlayers.appendChild(div);
    });
  }

    
    document.querySelectorAll('.position-button').forEach(button => {
      button.addEventListener('click', function () {
        const position = button.getAttribute('player-position');
        addFiltreplayerToPosition(position);
        document.getElementById("modalfilter").classList.add("flex");
        document.getElementById("modalfilter").classList.remove("hidden");
      });
    });
  const cardsContainer = document.getElementById("cards-container");
 const addplayer = document.getElementById("addplayer");
const  setPlayerOverlay = document.getElementById("set-player-overlay");

// addplayer.addEventListener('click', function(e){
//     e.preventDefault();
// })

// Soumettre le formulaire
addplayer.addEventListener("click", function(e) {
  e.preventDefault();
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
  const diving = document.getElementById("diving").value;
  const handling = document.getElementById("diving").handling;
  const kicking = document.getElementById("kicking").value;
  const reflexes = document.getElementById("reflexes").value;
  const speed = document.getElementById("speed").value;
  const positioning = document.getElementById("positioning").value;

  let obj = {
    name:name,
     photo : photo,
     position : position,
     flag : flag,
     nationality : nationality,
     logo : logo,
     club : club,
     rating : rating,
     pace : pace,
     shooting : shooting,
     passing : passing,
     dribbling : dribbling,
     defending : defending,
     physical : physical,
      diving : diving,
   handling : handling,
   kicking : kicking,
   reflexes : reflexes,
   speed : speed,
   positioning : positioning

     
  }
  
  data.push(obj);
  console.log(data);


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
     playersList.appendChild(div);
     
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
 playersList.appendChild(div);
    }
    // Réinitialiser et fermer le modal
    playerForm.reset();
    setPlayerOverlay.classList.add("hidden");

});
  }
};
