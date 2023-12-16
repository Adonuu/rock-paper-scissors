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
