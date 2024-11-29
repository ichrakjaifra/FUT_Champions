let playersdata = new XMLHttpRequest();
playersdata.open("GET", "https://brofortech.com/ichrak.json", true);
playersdata.send();

playersdata.onreadystatechange = function () {
  if (playersdata.readyState === 4 && playersdata.status === 200) {
    let ourdata = JSON.parse(playersdata.response);
    let data = ourdata.players;

    function addFiltreplayerToPosition(positionFilter) {
      const filteredPlayers = data.filter(player => player.position === positionFilter);
      const filtredPlayersCase = document.getElementById("filtredPlayers");
      filtredPlayersCase.innerHTML = '';

      filteredPlayers.forEach(player => {
        let div = document.createElement("div")
        div.className = "flex justify-center";
        if(player.position=="GK")
          {
           div.innerHTML=`
         <div class="cardeGK flex flex-col bg-cover bg-center bg-no-repeat w-[150px] h-[200px] items-center pt-4 bg-[url('img/badge_gold.png')];">
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
        positionElement.classList.remove("bg-[url('img/badge_gold.png')]")
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
        
        
        document.getElementById("modalfilter").classList.add("hidden");
        document.getElementById("modalfilter").classList.remove("flex");
      });
  
     
      filtredPlayersCase.appendChild(div);
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
  }
};
