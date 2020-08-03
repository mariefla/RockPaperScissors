const gameWords = ["rock", "paper", "scissors"];

// NEW
const score = {
  user: 0,
  computer: 0
};

const btnEls = document.querySelectorAll("button.play");
const resultEl = document.querySelector("#result");

const mod = (a, b) => {
  c = a % b;
  return c < 0 ? c + b : c;
};

const getComputerChoice = () => {
  const max = gameWords.length - 1;
  const i = Math.floor(Math.random() * (max - 0 + 1)) + 0;
  return gameWords[i];
};

const determineWinner = (userChoice, computerChoice) => {
  // CHANGED
  if (userChoice === computerChoice) {
    return null;
  } else {
    indexUserChoice = gameWords.indexOf(userChoice);
    indexComputerChoice = gameWords.indexOf(computerChoice);

    if (
      mod(indexUserChoice - indexComputerChoice, gameWords.length) <
      gameWords.length / 2
    ) {
      // CHANGED
      return "user";
    } else {
      // CHANGED
      return "computer";
    }
  }
};

// NEW
const printWinner = (winner, userChoice, computerChoice) => {
  resultEl.innerHTML = `${
    winner ? `${winner} win` : "It is a draw"
  } (computer: ${computerChoice}, you: ${userChoice})`;
};

// NEW
const printScore = (winner) => {
  if (winner) {
    score[winner]++;
    document.querySelector("#score .user").innerHTML = score.user;
    document.querySelector("#score .computer").innerHTML = score.computer;
  }
};

const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice, computerChoice);
  // NEW
  printWinner(winner, userChoice, computerChoice);
  // NEW
  printScore(winner);
};

btnEls.forEach((btnEl) => {
  const userChoice = btnEl.dataset.word;
  btnEl.addEventListener("click", () => {
    playGame(userChoice);
  });
});
