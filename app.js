import { didUserWin } from './utils.js';

const playButton = document.getElementById('play');
const winsSpan = document.getElementById('total-wins');
const lossesSpan = document.getElementById('total-losses');

let wins = 0;
let losses = 0;

playButton.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    const userChoice = selected.value;
  
    let computerChoice = 'heads';
    let randomNum = Math.floor(Math.random() * 2);
    if (randomNum === 1) {
        computerChoice = 'tails';
    }
    console.log(computerChoice);
    // check who won
    const isWinner = didUserWin(userChoice, computerChoice);

    if (isWinner){
        wins++;
    } else {
        losses++;
    }
    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;

});