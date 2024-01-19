let content2=document.getElementById('content');
let GAme=[];
export async function getgame(category){
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



