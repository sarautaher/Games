let content2=document.getElementById('content');
let list2=document.querySelectorAll('ul li');
let cont=document.getElementById('content2');
let GAme=[];
export async function getgame2(id){
    cont.classList.remove('d-none');
 
    const request = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{
        method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'a1f2e1d0camsh8b39f18c7898991p1ff575jsnf0e98aae5292',
		    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	    }})
        let Game=await request.json();
     displayid( Game);
};


function displayid( Game){
    let cartoona=`
    
    <div class="d-flex justify-content-between mb-3    ">
    <h1 class=" text-white"> Details Game</h1>
    <i class=" fa fa-close fs-4  cursor-pointer" id="closebtn"></i>
    </div>
    <div class="row gy-2 ">
    <div class="col-md-4 ">
     <img src="${ Game.thumbnail }"  class="w-100 pb-2" alt=" test"></div>
     <div class="col-md-8">
     <div class="text-white">
     <h2>${ Game.title}</h2>
     <p>Category:<span class="badge  text-white border-info  p-2 font-weight-light bg-primary">  ${Game.genre  }</span></p>
     <p>Platform: <span class="badge  text-white border-info  p-2 font-weight-light bg-primary">  ${ Game.platform  }</span></p>
     <p>Status:<span class="badge  text-white border-info  p-2 font-weight-light bg-primary">  ${ Game.status  }</span></p>
     <p> ${Game.description  }</p>
     <a href="${Game.game_url}" class="btn btn-outline-warning show-game" target="_blank">Show Game</a>
     </div>
     </div>
  </div>
     
     `;
     cont.innerHTML=cartoona;
    content2.classList.add('d-none');
    document.querySelector('#game-content').style.display='none';
   document.querySelector('#game').style.display='none';
    }