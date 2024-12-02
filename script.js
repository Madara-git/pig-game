'use strict';
let newGame = document.querySelector('.btn--new');
let rollDice = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let diceImage = document.querySelector('.dice');
let isPlaying = true;
let score = [0, 0];
let index = 0;
let currentScore = 0;
diceImage.classList.add('hidden');
function gameChange() {
  document.getElementById(`current--${index}`).textContent = 0;
  currentScore = 0;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  index = index === 0 ? 1 : 0;
}
rollDice.addEventListener('click', function () {
  let random = Math.floor(Math.random() * 6 + 1);
  diceImage.src = `dice-${random}.png`;
  if (isPlaying) {
    diceImage.classList.remove('hidden');
    if (random !== 1) {
      document.getElementById(`current--${index}`).textContent = currentScore +=
        random;
    } else {
      document.getElementById(`score--${index}`).textContent = 0;
      score[index] = 0;
      gameChange();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (isPlaying) {
    document.getElementById(`score--${index}`).textContent = score[index] +=
      currentScore;
  }
  if (score[index] >= 100) {
    diceImage.classList.add('hidden');
    isPlaying = false;
    document.querySelector(`.player--${index}`).classList.add('player--winner');
  } else {
    gameChange();
  }
});
newGame.addEventListener('click', function () {
  index = 0;
  score = [0, 0];
  isPlaying = true;
  currentScore = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  diceImage.classList.add('hidden');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
});
