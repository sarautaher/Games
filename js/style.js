let content2=document.getElementById('content');
let list2=document.querySelectorAll('ul li');
let cont=document.getElementById('content2');
let GAme=[];
 async function getgame(category){
    content2.classList.remove('d-none');
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '86cd0fe32cmsh929479f84445fa4p16164ejsndace69528875',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }} 
  
        let  responsp=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}` ,options);
    let Game=await responsp.json();
   GAme=Game; 
   displayGame();
}


function displayGame(){
    let cartoona=``
    for (let i= 0; i < GAme.length; i++) {
        cartoona+=`
          <div class="col-md-6 col-lg-3  col-12 g-4 mb-5  " gameId=${GAme[i].id} id="news-item">
                    <div class="card h-100 mb-3 bg-transparent " gameId=${GAme[i].id} id="news-item">
                    <div class="card-body card-color" gameId=${GAme[i].id}>
                       <img src="${GAme[i].thumbnail   }"  class="w-100 pb-2" alt=" test" gameId=${GAme[i].id}>
                     <div class="d-flex justify-content-between " gameId=${GAme[i].id}>
                    <h6 class="fst-italic col-md-8" gameId=${GAme[i].id}>${GAme[i].title}</h6> 
                    <span class="badge  text-white border-info  p-2 font-weight-light bg-primary" gameId=${GAme[i].id}>Free</span>
                    </div>
                    <p class=" card-text small fst-italic" gameId=${GAme[i].id}>${GAme[i].short_description } </p>
                  
                    <div class="card-footer" gameId=${GAme[i].id}>
                    <div class="d-flex justify-content-between text-white" gameId=${GAme[i].id}>
                    <p class="footer-item badge badge-color " gameId=${GAme[i].id}> ${GAme[i].publisher  }</p>
                    <p class="footer-item badge badge-color   " gameId=${GAme[i].id}>  ${GAme[i].platform}</p>
                      </div>
                      </div>
                      </div>
                </div>
                </div>
                
                `
        
    }
    content2.innerHTML=cartoona;
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
getgame('MMORPG');
for(let i=0; i<list2.length;i++){
    list2[i].addEventListener('click', function(e){
        let tagLink=e.target;
        let links=tagLink.innerHTML;
        getgame( links);
      
    });
}
async function getgame2(id){
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

document.addEventListener('click', function(e){
    let gameId=e.target.getAttribute('gameId');
    
    if(gameId!=null){
        getgame2(gameId);
    }
    let closeBtn=e.target.getAttribute('id');
    if(closeBtn=='closebtn'){
        getgame( "MMORPG")
        document.querySelector('#game-content').style.display='block';
        document.querySelector('#game').style.display='block';
    cont.classList.add('d-none')
    }
});


