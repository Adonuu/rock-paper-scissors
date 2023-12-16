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
