let PlayersList = document.getElementById("playersList");
let dataplayers = new XMLHttpRequest();
    
dataplayers.open("GET","https://brofortech.com/ichrak.json",true);
dataplayers.send();
dataplayers.onreadystatechange = function(){
    if(dataplayers.readyState === 4 && dataplayers.status === 200){
        let d = JSON.parse(dataplayers.response);
        let data = d.players;
        
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
        
        data.forEach(player => {
        let div = document.createElement("div");
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
           PlayersList.appendChild(div)
          }else{
           div.innerHTML=`
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

            PlayersList.appendChild(div)
        }
        
        });
        
    }
    
    

}





































