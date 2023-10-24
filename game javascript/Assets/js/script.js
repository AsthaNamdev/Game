// console.log(document.querySelector(".message").textContent);
// console.log(document.querySelector(".score").textContent);
// document.querySelector(".label-score").textContent;
// document.querySelector(".message").textContent='RIGTH GUESS';

// making function

// document.querySelector(".check").addEventListener("click", function () {
//   document.querySelector(".message").textContent = "RIGTH GUESS";
//   console.log((document.querySelector(".score").textContent = 30));
// });

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 40;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "NO number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Right guess !!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "red";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High !!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(("message".textContent = "Game over!!"));
      document.querySelector(".score").textContent = 0;
    }
  }
  // copy paste
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too LOW !!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(("message".textContent = "Game Khallas"));
      document.querySelector(".score").textContent = 0;
    }
  }
});

//  for refresh the again button
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#011e03e8";
  document.querySelector(".score").textContent = 0;
  document.querySelector(".message").textContent = "PLAY AGAIN !! ";
  document.querySelector(".highscore").textContent = 0;
});
