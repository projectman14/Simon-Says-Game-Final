let gameSeq=[];
let userSeq=[];

let btns = ["yellow" , "red" , "green" , "purple"];
let h2 = document.querySelector('h2');

let started = false;
let level = 0;

document.addEventListener('keypress' , function() {
   if(started == false){
      console.log('game started');
      started = true;
      levelUp();
   }
});

function btnFlash(btn) {
   btn.classList.add("flash");
   setTimeout(function(){
      btn.classList.remove('flash'); 
   },100);
}

function checkAns(idx){
   // let idx = level-1;

   if(userSeq[idx] === gameSeq[idx] ){
      if(userSeq.length == gameSeq.length)
      {
         setTimeout(levelUp , 1000);
      }
   }
   else{
      h2.innerText = `Game Over! Press any key to start`;
      reset();
   }
}

function levelUp(){
   userSeq = [];
   level++;
   h2.innerText = `Level ${level}`;

   let randomIndex = Math.floor(Math.random() * 3);
   let randomColor = btns[randomIndex];
   let randBtn = document.querySelector(`.${randomColor}`);
   gameSeq.push(randomColor);
   console.log(gameSeq);
   btnFlash(randBtn);
}


function btnPress() {
   btnFlash(this);
   userSeq.push(this.id);
   checkAns(userSeq.length-1); 

   
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
   btn.addEventListener('click' , btnPress);
}

function reset() {
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;
}