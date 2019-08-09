var scores, roundScore, activePlayer, gamePlaying;

ini();

var secondRoll;

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        //Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    //Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    //Update the round score IF the number was NOT a 1
    if (dice === 6 && secondRoll === 6) {
        //Player loses the points held
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        nextPlayer();

    }
    if (dice !== 1){
        //Add score    
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next Player
        nextPlayer();
        }
   
        
    // Second Dice
    var secDice = Math.floor(Math.random() * 6) + 1;
    
    //Display the result
    var diceDOM = document.querySelector('.secDice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + secDice + '.png';
    
    //Update the round score IF the number was NOT a 1
    if (secDice === 6 && secondRoll === 6) {
        //Player loses the points held
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        nextPlayer();

    }
    if (secDice !== 1){
        //Add score    
        roundScore += secDice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next Player
        nextPlayer();
        }
    secondRoll = secdice;
    } 
    
});

document.querySelector('.btn-hold').addEventListener('click', function (){
    if (gamePlaying) {
        //Add CURRENT to GLOBAL score
        scores[activePlayer] += roundScore;
    
        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        var input = document.querySelector('.finalScore').value;
        var winningScore;
        
        // Undefined, null, 0 and "" are COERCED to FALSE
        // Anything else is COERCED to TRUE
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }
    
        //Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.getElementById('name-' + activePlayer).textContent = 'Ganhou!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.secDice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
        nextPlayer();
        }   
    }
    
    
})

function nextPlayer() {
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        //Set current back to 0
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        //Class add, remove and toggle
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //Hide the dice on the next player
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.secDice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', ini);

function ini() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.secDice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Jogador 1';
    document.getElementById('name-1').textContent = 'Jogador 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}















