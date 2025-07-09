// set an Array for rock, paper, scissor
const gamePool = ["rock", "paper", "scissor"];
// computer randomly choice
const computerChoiceIndex = Math.floor(Math.random() * gamePool.length);
const computerChoice = gamePool[computerChoiceIndex];

// user choice
const userChoice = process.argv.slice(2).shift().toLowerCase();

// check user choice
if (!gamePool.includes(userChoice)) {
  console.log("Please enter one of rock, paper or scissor.");
} else {
  // Prepare the output context.
  const outputStandard = `You chose ${userChoice}. Computer chose ${computerChoice}.`;
  const youWin = "You win!";
  const youLose = "You lose!";
  const draw = "It's a draw!";
  // find the index of userChoice in gamePool
  const userChoiceIndex = gamePool.findIndex((choice) => choice === userChoice);

  // Compare the choices between the computer and the user.
  const differ = Math.abs(userChoiceIndex - computerChoiceIndex);
  switch (differ) {
    case 0:
      console.log(outputStandard + draw);
      break;
    case 1:
      console.log(
        userChoiceIndex > computerChoiceIndex
          ? outputStandard + youWin
          : outputStandard + youLose
      );
      break;
    default:
      // In the case of rock and scissors, rock wins.
      console.log(
        userChoice === "rock"
          ? outputStandard + youWin
          : outputStandard + youLose
      );
      break;
  }
}
