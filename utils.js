export function didUserWin(userChoice, computerChoice){
    if (userChoice === computerChoice){
        return 'draw!';
    }
    if (userChoice === 'rock' && computerChoice === 'paper'){
        return 'you lose!';
    } 
    if (userChoice === 'rock' && computerChoice === 'scissors'){
        return 'you win!';
    }
    if (userChoice === 'scissors' && computerChoice === 'paper'){
        return 'you win!';
    }
    if (userChoice === 'scissors' && computerChoice === 'rock'){
        return 'you lose!';
    }
    if (userChoice === 'paper' && computerChoice === 'rock'){
        return 'you win!';
    }
    if (userChoice === 'paper' && computerChoice === 'scissors')
        return 'you lose!';
}
