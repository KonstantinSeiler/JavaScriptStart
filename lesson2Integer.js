
let number;
let attempts;

resetGame();
tryGuessNumber();

function resetGame() {
    attempts = 0;
    number = randomInteger(1, 10);
}
    
function tryGuessNumber(number) {
     const userAnswer = (prompt('Введите число от 0 до 100, для выхода наберите -1.'));
      
     if (userAnswer === -1) {
        return alert ('Прощай');
}

if (Number.isNaN(userAnswer)) { 
    alert ('Необходимо ввести целое число от 0 до 100.');
    return tryGuessNumber();
}

attempts++;

if (userAnswer > number) {
    alert ('Попробуй число меньше.');

} else if (userAnswer < number) {
    alert('Попробуй число больше.');

} else {
    alert(`Поздравляю! Вы угадали число с ${attempts} попытки.`);
    return;
}

tryGuessNumber();

}
