function getComputerChoice(){
    if (getRandomNumber(3)===1){
        return 'Scissor'
    }else if(getRandomNumber(3)===2){
        return 'Rock'
    }
    return 'Paper'
    

}
function getRandomNumber(max){
    return Math.floor(Math.random()*max)
}

function getHumanChoice(){
    let choice=prompt('Pick your choice between rock, paper or scissors')
    if(choice.toLowerCase()==='rock'){
        return 'Rock'
    }else if(choice.toLowerCase()==='paper'){
        return 'Paper'
    }else if(choice.toLowerCase()==='scissor'){
        return 'Scissor'
    }
}    

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        alert( `Draw! You both played ,${humanChoice}`)
        }else if(
            (humanChoice==='Rock'&&computerChoice==='Scissor')||
            (humanChoice==='Paper'&&computerChoice==='Rock')||
            (humanChoice==='Scissor'&&computerChoice==='Paper') 
        ){
            humanScore++
            alert( `You win! ${humanChoice} beats ${computerChoice} `)
        }else{
            computerScore++
            alert( `You lose! ${computerChoice} beats ${humanChoice}`)
        }
    let score= `Computer score: `+ computerScore+` Your score ` +humanScore
    result.textContent=score

    alert(score)
    
    if (computerScore===5){
        winner.textContent='GAME OVER! You lose! The computer beat you to five points'
        humanScore=0
        computerScore=0
    }else if(humanScore===5){
        winner.textContent='GAME OVER! You win! You beat the computer to five points'
        humanScore=0
        computerScore=0
    }else{
        winner.textContent=''
    }
    
    
}
     

let rock=document.querySelector('#rock')
let paper=document.querySelector('#paper')
let scissor=document.querySelector('#scissor')
rock.addEventListener('click', ()=>{playRound('Rock',getComputerChoice())} )
paper.addEventListener('click', ()=>{playRound('Paper',getComputerChoice())} )
scissor.addEventListener('click', ()=>{playRound('Scissor',getComputerChoice())} )
let result=document.querySelector('#results')
let winner=document.querySelector('#winner')





