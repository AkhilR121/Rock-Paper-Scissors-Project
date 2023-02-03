// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  let randomNumber = Math.floor(Math.random() * 3);
  return rpsChoice[randomNumber];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score
  // All situations where human draws, set `score` to 0
  if(playerChoice === computerChoice) {
    score = 0
  } else if(playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = -1
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1    
  } else {
    // Otherwise human loses (aka set score to -1)
    score = -1
  }

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  
  // return score
  return score
}

// let result = document.getElementById('result')
// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  let result = document.getElementById('result')
  let hand = document.getElementById('hands')
  let playerScore = document.getElementById('player-score')
  if(score == 0) {
    result.innerText = 'Human Draw'
  } else if(score == 1){
    result.innerText = 'Human Won'
  }
  else if(score == -1) {
    result.innerText = 'Human Loss'
  }

  hand.innerText = `👦${playerChoice} vs 🤖${computerChoice}`
  playerScore.innerText = `Your Score: ${totalScore.playerScore} and Computer Score: ${totalScore.computerScore}`
  // Don't forget to grab the div with the 'result' id!
}

let totalScore = {computerScore: 0, playerScore: 0} 
// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({playerChoice});
  const computerChoice = getComputerChoice()
  console.log({computerChoice});
  let score = getResult(playerChoice, computerChoice)
  console.log({PresentHumanScore: score});
  totalScore['playerScore'] += score
  totalScore['computerScore'] -= score
  console.log(totalScore);
  showResult(score, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButton = document.querySelectorAll('.rpsButton')
  const endGameButton = document.getElementById('endGameButton')
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  rpsButton.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })
 
  endGameButton.onclick = () => endGame(totalScore)

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0

  const result = document.getElementById('result')
  const hand = document.getElementById('hands')
  const playerScore = document.getElementById('player-score')

  result.innerText = ''
  hand.innerText = ''
  playerScore.innerText = ''
}

playGame()