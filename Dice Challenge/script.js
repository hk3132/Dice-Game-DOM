
let diceImage = document.getElementById("diceImage");

let result = document.getElementById("total");

let playerOneRunningTotal = 0;

function playGame(){
    addEventListener('click', () => {
    rNum = Math.floor(Math.random() * 6 + 1); 
    if (rNum === 1) {
        result.textContent = "You Lose!!! Play Again?";
        playerOneRunningTotal = 0;
        diceImage = document.getElementById("diceImage").src = "./img/dice1.png";
    } else if (rNum === 1 && playerOneRunningTotal == 19) {
        playerOneRunningTotal += rNum;
        result.textContent = playerOneRunningTotal;
        diceImage = document.getElementById("diceImage").src = "./img/dice1.png";
    } else if (rNum === 2) {
        playerOneRunningTotal += rNum;
        result.textContent = playerOneRunningTotal;
        diceImage = document.getElementById("diceImage").src = "./img/dice2.png";
    } else if (rNum === 3) {
        playerOneRunningTotal += rNum;
        result.textContent = playerOneRunningTotal;
        diceImage = document.getElementById("diceImage").src = "./img/dice3.png";
    } else if (rNum === 4) {
        playerOneRunningTotal += rNum;
        result.textContent = playerOneRunningTotal;
        diceImage = document.getElementById("diceImage").src = "./img/dice4.png";
    } else if (rNum === 5) {
        playerOneRunningTotal += rNum;
        result.textContent = playerOneRunningTotal;
        diceImage = document.getElementById("diceImage").src = "./img/dice5.png";
    } else if (rNum === 6) {
        playerOneRunningTotal += rNum;
        result.textContent = playerOneRunningTotal;
        diceImage = document.getElementById("diceImage").src = "./img/dice6.png";
    }
    if (playerOneRunningTotal > 20){
        result.textContent = "You win!! Play Again?";
        playerOneRunningTotal = 0;
    }
});
};


playGame();

