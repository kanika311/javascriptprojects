const player= document.getElementById('play')
const computer= document.getElementById('comp')
const res= document.getElementById('result')
const rock= document.getElementById('rock')
const paper= document.getElementById('paper')
const scissor= document.getElementById('scissors')
const pwin= document.getElementById('playerwin')
const cwin= document.getElementById('computerwin')
const draw= document.getElementById('draw')
let playerchoice=""
let computerchoice=''
let result=""
let drew= "0"
let playerswin="0"
let compwin="0"
function compterchoose(){
    let random = Math.floor(Math.random()*3)+1;
switch(random){
case 1:
    computerchoice="rock"
    break;
    case 2:
        computerchoice="paper"
        break;
        case 3:
            computerchoice="scissor"
            break;

}
computer.textContent=`computer: ${computerchoice}`
}


function check(){
if(playerchoice === computerchoice){
    result = "draw!"
}
else if(playerchoice === "rock" && computerchoice === "scissor"){
    result = "player wins!"
}
else if(playerchoice === "scissor" && computerchoice === "rock"){
    result = "computer win!"
}

else if(playerchoice=== "paper" && computerchoice === "scissor"){
    result = "computer win!"
}
else if(playerchoice === "scissor" && computerchoice === "paper"){

    result = "player win!"
}
else if(playerchoice === "rock" && computerchoice === "paper"){

    result = "computer win!"
}
else if(playerchoice === "paper" && computerchoice === "rock"){

    result = "player win!"
}
else {
    alert('error  check your code ')
}
res.innerText= `result : ${result}`
if(result=== "draw!"){
    drew ++;

}
else if(result=="player win!"){
    playerswin ++;

}
else if(result=="computer win!"){
    compwin ++;

}
else{
    alert("error in counting")
}
pwin.innerText=`Number of time player win: ${playerswin}`
cwin.innerText=`Number of time computer win ${compwin}`
draw.innerText=`Number of time draw: ${drew}`

}



rock.addEventListener("click",roc)
function roc(){
    playerchoice="rock"
    player.innerText= `player: ${playerchoice}`
    compterchoose()
    check()
}
paper.addEventListener("click",pap)
function pap(){
    playerchoice="paper"
    player.innerText= `player: ${playerchoice}`
    compterchoose()
    check()
}
scissor.addEventListener("click",ssci)
function ssci(){
    playerchoice="scissor"
   
 player.innerText= `player: ${playerchoice}`
 compterchoose()
 check()
}
