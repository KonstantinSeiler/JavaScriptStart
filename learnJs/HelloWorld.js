
let number;

let attempts;

startGame();

function startGame() {

 resetGame();


 while (true) {
   const guess = prompt('Попробуйте отгадать сколько ревью надо пройти? можете ввести -1 если хотите закончить игру.');

   if (guess === '-1') {
     return alert('Игра завершена.');
   }


   if (!validation(guess)) {

     alert('Необходимо ввести 4 целых положительных цифры.');
     continue;
   }


   attempts++;


   const result = checkGuess(guess);


   if (result[0] !== 4) {

     alert(`Быки: ${result[0]}. Коровы: ${result[1]}`);

     continue;
   }


   alert(`Поздравляем! Вы угадали все цифры. Кол-во попыток: ${attempts}.`);

   if (!confirm('Хотите сыграть еще раз?')) {

     return alert('До свидания');
   }

   resetGame();
 }
}


function resetGame() {

 attempts = 0;

 number = [];

 while (number.length < 4) {

   const part = Math.floor(Math.random() * 10);

   if (!number.includes(part)) {
     number.push(part);
   }
 }
}


function validation(guess) {

 const guessLiterals = guess.split('');

 if (guessLiterals.length !== 4) {
   return false;
 }

 for (let i = 0; i < guessLiterals.length; i++) {
   if (!Number.isInteger(+guessLiterals[i])) {
     return false;
   }
 }

 return true;
}


function checkGuess(guess) {

 const result = [0, 0];

 const guessLiterals = guess.split('');

 for (let i = 0; i < guessLiterals.length; i++) {

   const num = parseInt(guessLiterals[i]);


   if (num === number[i]) {
     result[0]++;
   } else if (number.includes(num)) {
     result[1]++;
   }
 }

 return result;
}
