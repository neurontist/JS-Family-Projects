let boxes = document.querySelectorAll('.box');
let btn = document.querySelector('#resetButton');
let heading = document.querySelector('.heading');

let playerO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (box.innerHTML != '') return;
    if (playerO) {
      box.innerText = 'O';
      playerO = false;
    } else {
      box.innerText = 'X';
      playerO = true;
    }
    checkWin();
  });
});

btn.addEventListener('click', () => {
  boxes.forEach((box) => {
    box.innerText = '';
    heading.innerText = 'Tic Tac Toe';
    playerO = true;
  });
});

function checkWin() {
  winPatterns.forEach((pattern) => {
    let box1 = boxes[pattern[0]].innerText;
    let box2 = boxes[pattern[1]].innerText;
    let box3 = boxes[pattern[2]].innerText;

    if (box1 != '' && box1 === box2 && box2 === box3 && box1 === 'O') {
      heading.innerText = 'Player O Wins!';
    } else if (box1 != '' && box1 === box2 && box2 === box3 && box1 === 'X') {
      heading.innerText = 'Player X Wins!';
    }
  });
}
