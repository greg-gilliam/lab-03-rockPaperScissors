import { didUserWin } from './utils.js';

const playButton = document.getElementById('play');
const winsSpan = document.getElementById('total-wins');
const lossesSpan = document.getElementById('total-losses');
const drawsSpan = document.getElementById('total-draws');

let wins = 0;
let losses = 0;
let draws = 0; 

playButton.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    const userChoice = selected.value;
  
    let computerChoice = 'rock';
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        computerChoice = 'paper';
    }
    if (randomNum === 1) {
        computerChoice = 'scissors';
    }
    if (randomNum === 2) {
        computerChoice = 'rock';
    }
    console.log(computerChoice, 'computerChoice'); 
    console.log(userChoice, 'userChoice'); 
    console.log(draws, 'draws');
    const isWinner = didUserWin(userChoice, computerChoice);

    if (isWinner === 'you win!'){
        wins++;
    } else if (isWinner === 'you lose!'){ 
        losses++;
    } else {
        draws++; 
    }
    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawsSpan.textContent = draws; 

});