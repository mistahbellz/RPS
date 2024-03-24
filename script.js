let p1Score = 0;
let cpuScore = 0;
let p1Choice = "";
let cpuChoice = "";
let refMsg = document.getElementById("refMsg"); //message from the Games Judge
let winnerMsg = document.getElementById("winner"); //Winner!
let p1ChoiceLabel = ""; 
let cpuChoiceLabel = "";
let gameOn = false;
refMsg.textContent = "Welcome! Click on Start Game to begin";
winnerMsg.textContent = "";

p1 = {
  name: "Human",
  score: 0,
  choice: p1Choice,
}
PC= {
  name: "Computer",
  score: 0,
  choice: cpuChoice,
}
pcChoiceArray = ["Rock", "Paper", "Scissor"];

function Player1Chose(event) {
  const buttonId = event.target.id;
  let result;

  switch (buttonId) {
      case 'rockBtn':
          result = "Rock";
          break;
      case 'paperBtn':
          result = "Paper";
          break;
      case 'scissorsBtn':
          result = "Scissor";;
          break;
      default:
          result = null;
          break;
  }

  console.log('Clicked button:', buttonId, 'Result:', result);
  p1.choice = result;
  PC.choice = cpuChose(pcChoiceArray);
  
  const ch1 = p1.choice;
  const ch2 = PC.choice;

  // Compare the values and determine the winner
  if (( ch1 === "Rock" && ch2 === "Paper") ||
      ( ch1 === "Paper" && ch2 === "Scissor") ||
      ( ch1 === "Scissor" && ch2 ===  "Rock")) {
      
      PC.score++;
      cpuScore = document.getElementById("cpuScore");
      cpuScoreText = PC.score;
      cpuScore.textContent = cpuScoreText.toString(); 
      refMsg.textContent = "Player 1 chose: " + ch1 + " and CPU chose: " + ch2;
      winnerMsg.textContent = "CPU Wins!";
  }
 
      
      // return CPU; // Player 1 wins
 else if (( ch1 ==="Paper" && ch2 === "Rock") ||
             ( ch1 ==="Scissor" && ch2 ==="Paper") ||
             ( ch1 === "Rock" && ch2 === "Scissor")) {
         p1.score++;
      p1Score = document.getElementById("humanScore");
      p1ScoreText = p1.score;
      p1Score.textContent = p1ScoreText.toString();
      refMsg.textContent = "Player 1 chose: " + ch1 + " and CPU chose: " + ch2;
      refMsg.textContent = "Player 1 chose: " + ch1 + " and CPU chose: " + ch2;
      winnerMsg.textContent = "PLAYER 1 WINS!";
      
      
  } else {
   refMsg.textContent = "Player 1 chose: " + ch1 + " and CPU chose: " + ch2;
    winnerMsg.textContent = "";
     
  }
     
}
function cpuChose(arr) {
  // Generate a random number between 1 and 3
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
const reset = () => {
location.reload();
  
}


// Add click event listeners to the buttons
document.querySelector('#rockBtn').addEventListener('click', Player1Chose);
document.querySelector('#paperBtn').addEventListener('click', Player1Chose);
document.querySelector('#scissorsBtn').addEventListener('click', Player1Chose);
document.querySelector('#start').addEventListener('click', reset);
