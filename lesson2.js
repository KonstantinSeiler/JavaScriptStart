
let number;
let attempts;

resetGame();
tryGuessNumber();

function resetGame() {
    attempts = 0;
    number = Math.floor(Math.random() * 100);
}
    
function tryGuessNumber() {
     const userAnswer = parseInt(prompt('Введите число от 0 до 100, для выхода наберите -1.'));
      
     if (userAnswer === -1 || userAnswer >= 100 ) {
        return alert ('Прощай');
}

if (Number.isNaN(userAnswer)) { 
    alert ('Необходимо ввести целое число от 0 до 100.');
    return tryGuessNumber();
}

attempts++;

if (userAnswer > number) {
    alert ('Попробуй число меньше.');
    return tryGuessNumber();

} else if (userAnswer < number) {
    alert('Попробуй число больше.');
    return tryGuessNumber();

} else {
    alert(`Поздравляю! Вы угадали число с ${attempts} попытки.`);
    confirm('Играешь, бабки остались?');
    return alert ('Бай, бай неудачник!')
}

resetGame(); 

}

tryGuessNumber();
