let gameSeq = [];
let userSeq = [];

let btns=["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
   if(started==false){
       console.log("game started");
       started=true;
       levelUp();
   } });
 
function gameFalsh(btn){
 btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove('flash');
},150);
}

function userFalsh(btn){
    btn.classList.add("userflash");
   setTimeout(function(){
       btn.classList.remove("userflash");
   },150);
   }

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
   //random button
   let randInx = Math.floor(Math.random()*3);
   let randColor = btns[randInx];
   let randBtn =document.querySelector(`.${randColor}`);
    //console.log(randInx);
    //console.log(randColor);
    //console.log(randBtn);
     gameSeq.push(randColor);
     console.log(gameSeq);
    gameFalsh(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
       setTimeout(levelUp,1000);
        }
     }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundcolor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundcolor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this; 
    userFalsh(btn);
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

 checkAns(userSeq.length-1);
  
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}