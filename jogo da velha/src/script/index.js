
const $switcherBot = document.querySelector(".switcher-ball");

const $boardItem0 = document.querySelector(".board-item-0");
const $boardItem1 = document.querySelector(".board-item-1");
const $boardItem2 = document.querySelector(".board-item-2");
const $boardItem3 = document.querySelector(".board-item-3");
const $boardItem4 = document.querySelector(".board-item-4");
const $boardItem5 = document.querySelector(".board-item-5");
const $boardItem6 = document.querySelector(".board-item-6");
const $boardItem7 = document.querySelector(".board-item-7");
const $boardItem8 = document.querySelector(".board-item-8");

const $boardList = document.querySelectorAll(".board-item");

const $score1 = document.querySelector(".score-1");
const $score2 = document.querySelector(".score-2");

const $fieldPlayer1 = document.querySelector(".player-field-1");
const $fieldPlayer2 = document.querySelector(".player-field-2");

const $winnerText = document.querySelector(".winner-text");

const $mathHistoryList = document.querySelector(".math-history-list");

const $historyMoveList = document.querySelector(".history-move-list");
const line1 = [$boardItem0, $boardItem1, $boardItem2];
const line2 = [$boardItem3, $boardItem4, $boardItem5];
const line3 = [$boardItem6, $boardItem7, $boardItem8];

const colum1 = [$boardItem0, $boardItem3, $boardItem6];
const colum2 = [$boardItem1, $boardItem4, $boardItem7];
const colum3 = [$boardItem2, $boardItem5, $boardItem8];

const diagonal1 = [$boardItem0, $boardItem4, $boardItem8];
const diagonal2 = [$boardItem2, $boardItem4, $boardItem6];

const linesToVerify = [
  line1,
  line2,
  line3,
  colum1,
  colum2,
  colum3,
  diagonal1,
  diagonal2,
];

let currentMove = "X";
let winner = "";
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let game = true;

function toggleMoveVar() {
  if (currentMove == "O") {
    currentMove = "X";
  } else {
    currentMove = "O";
  }
}

function printMove($boardItem) {
  $boardItem.textContent = currentMove;
}

function showWinnerOnBoard(boardItemList) {
  for (const lineItem of boardItemList) {
    lineItem.classList.add("won");

    setTimeout(function () {
      lineItem.classList.remove("won");
    }, 1500);
  }
}
function verifyWinner() {
  for (const line of linesToVerify) {
    if (
      line[0].textContent != "" &&
      line[0].textContent == line[1].textContent &&
      line[1].textContent == line[2].textContent
    ) {
      winner = currentMove;
      showWinnerOnBoard(line);
    }
  }
  const itsFull = checkBoard();

  if (!winner && itsFull) {
    winner = "draw";
  }
}

function resetBoard() {
  for (let $board of $boardList) {
    $board.textContent = "";
  }
}

function resetVariables() {
  currentMove = "X";
  winner = "";
}
function checkBoard() {
  let itsFull = true;

  for (const $board of $boardList) {
    if (!$board.textContent) {
      itsFull = false;
    }
  }
  return itsFull;
}

function addPoint(player, quantity) {
  if (player === "X") {
    scorePlayer1 += quantity;
  } else if (player === "O") {
    scorePlayer2 += quantity;
  }
}
function printWinnerName() {
  if (winner === "X") {
    const value = $fieldPlayer1.value;

    $winnerText.textContent = value + " ganhou";
  } else if (winner === "O") {
    const value = $fieldPlayer2.value;
    $winnerText.textContent = value + " ganhou";
  } else if (winner === "draw") {
    $winnerText.textContent = " Empatou";
  }
}

function printPoint() {
  if (scorePlayer1 < 10) {
    $score1.textContent = "0" + scorePlayer1;
  } else {
    $score1.textContent = scorePlayer1;
  }
  if (scorePlayer2 < 10) {
    $score2.textContent = "0" + scorePlayer2;
  } else {
    $score2.textContent = scorePlayer2;
  }
}

function stopGameForAMoment(time) {
  game = false;

  setTimeout(function () {
    game = true;
  }, time);
}

function printHistoryMath() {
  $mathHistoryList.innerHTML = $mathHistoryList.innerHTML += `
  <li class="math-history-item">
      <div class="winner-wrapper">
        <strong class="winner-history-title title--green-small">
          Vencedor
        </strong>
        <span class="winner-history-name">jogador</span>
      </div>
      <span class="scenery-label">Cenário</span>
      <div class="mini-board">
        <span class="mini-board-item">O</span>
        <span class="mini-board-item">X</span>
        <span class="mini-board-item">O</span>
        <span class="mini-board-item"></span>
        <span class="mini-board-item"></span>
        <span class="mini-board-item">O</span>
        <span class="mini-board-item">X</span>
        <span class="mini-board-item">X</span>
        <span class="mini-board-item">O</span>
      </div>
    </li>
  `;
}
function printHistoryMove() {
  $historyMoveList.innerHTML = `

<li class="history-move">
      <span class="history-move-letter">X</span>
      <div class="history-move-text-wrapper">
        <h3 class="history-move-player-name">Jogador 1</h3>
        <span class="history-move-position-text">Primeiro quadrado</span>
      </div>
    </li>
`;
}

$boardItem0.addEventListener("click", function () {

  if ($boardItem0.textContent || !game) return;
  printMove($boardItem0);
  verifyWinner();
  toggleMoveVar();
  if (winner) {
    stopGameForAMoment(1500);
    setTimeout(resetBoard, 1500);
    addPoint(winner, 1);
    printWinnerName();
    resetVariables();
    printPoint();
    printHistoryMath();
  }
});

$boardItem1.addEventListener("click", function () {
  if ($boardItem1.textContent || !game) return;
  printMove($boardItem1);
  verifyWinner();
  toggleMoveVar();
  if (winner) {
    stopGameForAMoment(1500);
    setTimeout(resetBoard, 1500);
    addPoint(winner, 1);
    printWinnerName();
    resetVariables();
    printPoint();
    printHistoryMath();
  }
});

$boardItem2.addEventListener("click", function () {
  if ($boardItem2.textContent || !game) return;
  printMove($boardItem2);
  verifyWinner();
  toggleMoveVar();
  if (winner) {
    stopGameForAMoment(1500);
    setTimeout(resetBoard, 1500);
    addPoint(winner, 1);
    printWinnerName();
    resetVariables();
    printPoint();
    printHistoryMath();
  }
});

$boardItem3.addEventListener("click", function () {
  if ($boardItem3.textContent || !game) return;
  printMove($boardItem3);
  verifyWinner();
  toggleMoveVar();
  if (winner) {
    stopGameForAMoment(1500);
    setTimeout(resetBoard, 1500);
    addPoint(winner, 1);
    resetVariables();
    printWinnerName();
    printPoint();
    printHistoryMath();
  }
});

$boardItem4.addEventListener("click", function () {
  if ($boardItem4.textContent || !game) return;
  printMove($boardItem4);
  verifyWinner();
  toggleMoveVar();
  if (winner) {
    stopGameForAMoment(1500);
    setTimeout(resetBoard, 1500);
    addPoint(winner, 1);
    printWinnerName();
    resetVariables();
    printPoint();
    printHistoryMath();
  }
});

$boardItem5.addEventListener("click", function () {
  if ($boardItem5.textContent || !game) return;
  printMove($boardItem5);
  verifyWinner();
  toggleMoveVar();
  if (winner) {
    stopGameForAMoment(1500);
    setTimeout(resetBoard, 1500);
    addPoint(winner, 1);
    printWinnerName();
    resetVariables();
    printPoint();
    printHistoryMath();
  }
});

$boardItem6.addEventListener("click", function () {
  if ($boardItem6.textContent || !game) return;
  printMove($boardItem6);
  verifyWinner();
  toggleMoveVar();
  if (winner) {
    stopGameForAMoment(1500);
    setTimeout(resetBoard, 1500);
    addPoint(winner, 1);
    printWinnerName();
    resetVariables();
    printPoint();
    printHistoryMath();
  }
});

$boardItem7.addEventListener("click", function () {
  if ($boardItem7.textContent || !game) return;
  printMove($boardItem7);
  verifyWinner();
  toggleMoveVar();
  if (winner) {
    stopGameForAMoment(1500);
    setTimeout(resetBoard, 1500);
    addPoint(winner, 1);
    printWinnerName();
    resetVariables();
    printPoint();
    printHistoryMath();
  }
});

$boardItem8.addEventListener("click", function () {
  if ($boardItem8.textContent || !game) return;
  printMove($boardItem8);
  verifyWinner();
  toggleMoveVar();
  if (winner) {
    stopGameForAMoment(1500);
    setTimeout(resetBoard, 1500);
    addPoint(winner, 1);
    printWinnerName();
    resetVariables();
    printPoint();
    printHistoryMath();
  }
});

$switcherBot.addEventListener("click", function () {
  $switcherBot.classList.toggle("active");
});
