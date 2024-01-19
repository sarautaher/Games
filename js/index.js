let content2=document.getElementById('content');
let list2=document.querySelectorAll('ul li');
let cont=document.getElementById('content2');
import{ getgame} from './style.js';
import {getgame2} from'./styleId.js';
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
getgame('MMORPG');
for(let i=0; i<list2.length;i++){
    list2[i].addEventListener('click', function(e){
        let tagLink=e.target;
        let links=tagLink.innerHTML;
        getgame( links);
      
    });}