'use strict';
let sectionZero = document.querySelector('.player--0');
let playOneScore = document.getElementById('score--0');
let playOneCurrent = document.getElementById('current--0');

let playTwoScore = document.getElementById('score--1');
let playTwoCurrent = document.getElementById('current--1');

let newGame = document.querySelector('.btn--new');
let rollDice = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let diceImage = document.querySelector('.dice');

// let switchPlayers = true;

// let firstPlayerScore = 0;
// let secondPlayerScore = 0;

// diceImage.classList.add('hidden');

// const setText = (element, value) => {
//   element.textContent = value;
// };

// rollDice.addEventListener('click', theGame);

// function theGame() {
//   let theRandomDice = Math.trunc(Math.random() * 6 + 1);
//   diceImage.src = `dice-${theRandomDice}.png`;
//   diceImage.classList.remove('hidden');

//   if (theRandomDice === 1) {
//     switching();
//     if (!switchPlayers) {
//       setText(playOneScore, firstPlayerScore);
//     }
//     if (switchPlayers) {
//       setText(playTwoScore, secondPlayerScore);
//     }
//     setText(playOneCurrent, 0);
//     setText(playTwoCurrent, 0);
//   }

//   if (switchPlayers) {
//     setText(playOneCurrent, theRandomDice);

//     firstPlayerScore += theRandomDice;

//     if (theRandomDice === 1) {
//       setText(playOneCurrent, 0);
//       setText(playTwoScore, 0);
//       secondPlayerScore = 0;
//     }
//   }
//   if (!switchPlayers) {
//     playTwoCurrent.textContent = theRandomDice;

//     secondPlayerScore += theRandomDice;
//     if (theRandomDice === 1) {
//       setText(playTwoCurrent, 0);
//       setText(playOneScore, 0);
//       firstPlayerScore = 0;
//     }
//   }
// }

// function switching() {
//   if (switchPlayers) {
//     setText(playOneScore, firstPlayerScore);
//     setText(playOneCurrent, 0);
//   }
//   if (!switchPlayers) {
//     setText(playTwoScore, secondPlayerScore);
//     setText(playTwoCurrent, 0);
//     playTwoCurrent.textContent = 0;
//   }
//   switchPlayers = !switchPlayers;
// }

// btnHold.addEventListener('click', switching);

// newGame.addEventListener('click', function () {
//   playTwoCurrent.textContent = 0;
//   playOneCurrent.textContent = 0;
//   playOneScore.textContent = 0;
//   playTwoScore.textContent = 0;
//   firstPlayerScore = 0;
//   secondPlayerScore = 0;
//   switchPlayers = true;
// });
