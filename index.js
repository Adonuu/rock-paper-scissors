/* 
* Gives the computers selection for rock, paper, or scissors
* No parameters
* @return {String} computerChoice
*/
function getComputerChoice() {
    // create a variable to store the computer choice, default value of rock
    let computerChoice = "Rock";
    // create a variable to determine rock, paper, or scissors, default value of 1
    let choiceNumber = 1;
    // generate a random number for variable between 1-3
    // generate random number
    let randomNumber = Math.random();
    choiceNumber = Math.round(randomNumber * 3);
    // determine what the computer chooses based on the random number
    // if random number is 1 return rock
    if (choiceNumber <= 1)
        computerChoice = "Rock";
    // if random number is 2 return paper
    else if (choiceNumber > 1 && choiceNumber <= 2)
        computerChoice = "Paper";
    // if random number is 3 return scissors
    else
        computerChoice = "Scissors";
    return computerChoice;
}

/*
* Plays a round of rock paper scissors and determines if the player or computer wins
* @param {String} playerChoice
* @param {String} computerChoice
* @return {String} whoWins
*/
function playRound(playerChoice = "Rock", computerChoice = "Rock") {
    // create variable to for whoWon
    let whoWon = "";
    // make playerChoice uppercase so function isn't case sensitive
    let playerChoiceUpper = playerChoice.toUpperCase();
    // make computerChoice uppercase so function isn't case sensitive
    let computerChoiceUpper = computerChoice.toUpperCase();
    // convert playerChoice to a number for easier comparision
    let playerChoiceNumber = 0;
    if (playerChoiceUpper === "ROCK")
        playerChoiceNumber = 1;
    else if (playerChoiceUpper === "PAPER")
        playerChoiceNumber = 2;
    else
        playerChoiceNumber = 3;
    // convert computerChoice to a number for easier comparision
    let computerChoiceNumber = 0;
    if (computerChoiceUpper === "ROCK")
        computerChoiceNumber = 1;
    else if (computerChoiceUpper === "PAPER")
        computerChoiceNumber = 2;
    else
        computerChoiceNumber = 3;
    // determine who won
    if (playerChoiceNumber === computerChoiceNumber) {
        whoWon = "Tie! " + playerChoice + " ties " + computerChoice;
    }
    else if ((playerChoiceNumber - computerChoiceNumber) === 1) {
        whoWon = "Player Wins! " + playerChoice + " beats " + computerChoice;
    }
    else {
        whoWon = "Computer Wins! " + computerChoice + " beats " + playerChoice;
    }
    // return string saying whoWon
    return whoWon;
}

/*
* play a best of 5 for rock paper scissors
* no params
* no return
*/
function game() {
    // create variable to keep track of player wins
    let playerWins = 0;
    // create variable to keep track of computer wins
    let computerWins = 0;
    // keep playing rounds until computer or player has won 3 rounds
    while (playerWins < 3 && computerWins < 3) {
        // prompt player for input of rock, paper, or scissors
        let playerChoice = prompt("Enter Selection of Rock, Paper, or Scissors.");
        // play round
        let whoWins = playRound(playerChoice, getComputerChoice());
        console.log(whoWins);
        // determine who won to add to the respective counter
        if (whoWins.substring(0, whoWins.indexOf(" ")) === "Player")
            playerWins++;
        else if (whoWins.substring(0, whoWins.indexOf(" ")) === "Computer")
            computerWins++;
    }
    if (playerWins === 3)
        return "Player wins the best of 5"
    else
        return "Computer wins the best of 5";
}

// add event to rock, paper, and scissors buttons to play a round with the appropriate button
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(playRound(e.target.id, getComputerChoice()));
    })
});