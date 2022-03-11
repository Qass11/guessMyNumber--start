'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log(secretNumber);

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

function displayScore(score) {
  document.querySelector('.score').textContent = score;
}

//1 I need to select check button -> document.query('.check')
//2. I need to play the game when it is clicked
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start playing');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
document.querySelector('.check').addEventListener('click', function() {
  const guess = document.querySelector('.guess').value;

  if (guess < 1 || guess > 20) {
    displayMessage('Invalid Input');
  } else if (guess !== secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = '#34CC17';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    displayMessage (
      guess > secretNumber
      ? 'Number is too high!'
      :

        'Number is too high!'
    )
  }
});

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '?';

  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '222';
  document.querySelector('.number').style.width = '15rem';

});

if (score > highscore) {
  highscore = score;
  document.querySelector('.highscore').textContent = highscore;
}