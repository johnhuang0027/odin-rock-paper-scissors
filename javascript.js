function getComputerChoice(){
    let n = Math.floor(Math.random()*3+1);
    let choice = '';
    switch(n){
        case 1:
            choice = 'Scissors';
            break;
        
        case 2:
            choice = 'Rock';
            break;

        case 3:
            choice = 'Paper';
            break;

    }

    return choice;
}

function playerSelection(){

}
