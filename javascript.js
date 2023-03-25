//Returns either rock, paper or scissors, computer's choice
function getComputerChoice(){
    let n = Math.floor(Math.random()*3+1);
    let choice = '';

    //assigns a choice based off the number
    switch(n){
        case 1:
            choice = 'scissors';
            break;
        
        case 2:
            choice = 'rock';
            break;

        case 3:
            choice = 'paper';
            break;

    }

    return choice;
}

//takes in both player and computer choices and decides the winner
function playRound(playerSelection, computerSelection){
    let p1 = playerSelection.toLowerCase();
    let verdict = '';

    //computes all possible scenarios and sets verdict to appropriate response
    if(p1==computerSelection){
        verdict="It's a tie!";

    }else if(p1 == "scissors" && computerSelection=="rock"){
        verdict = "You lose! Rock beats paper";

    }else if(p1=="scissors" && computerSelection=="paper"){
        verdict = "You win! Scissors beats paper";

    }else if(p1=="rock" && computerSelection=="scissors"){
        verdict = "You win! Rock beats scissors";

    }else if(p1=="rock" && computerSelection=="paper"){
        verdict = "You lose! Paper beats rock";

    }else if(p1=="paper" && computerSelection=="scissors"){
        verdict="You lose! Scissors beats paper";

    }else if(p1=="paper" && computerSelection=="rock"){
        verdict="You win! Paper beats rock";
    }

    return verdict;
}