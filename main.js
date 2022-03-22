const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastOne;
let timeUp=false;
let point=0;
let myButton=document.querySelector(".start-my-game")

function runTime(min,max){
return Math.round(Math.random() * (max - min) + min);
}
function theHoles(holes){
    let idx=Math.floor(Math.random() * holes.length);
    const hole=holes[idx];
    if(lastOne==hole){
        console.log("nono")
        return theHoles(holes);
    }
    lastOne=hole;
    return hole;

}
function popup(){
    const time=runTime(200,1000);
    const MyHole=theHoles(holes);
    MyHole.classList.add("up");
    setTimeout(()=>{
        MyHole.classList.remove("up")
        if(!timeUp){
            popup();
        }
    },time);
    

}
function startGame(){
    myButton.classList.add("blow");
    point=0;
    scoreBoard.textContent=point;
    score=textContent = 0;
    timeUp=false;
    popup();
    setTimeout(()=>{
        timeUp=true;
        myButton.classList.remove("blow");
    },10000);
}
function tik(e){
    this.classList.remove("up")
    if(!e.isTrusted){
        return console.log("cheater");
    }
    point++;
    
    scoreBoard.textContent=point;
}
moles.forEach(mole => mole.addEventListener("click",tik));
