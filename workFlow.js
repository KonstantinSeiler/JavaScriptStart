
let numberTestCase;
let countRewiev;

UpdateRewiev();
tryCountRewiev();

function UpdateRewiev() {
    countRewiev = 0;
    numberTestCaseMax = 2;
    numberTestCaseMin =1;
}
    
function tryCountRewiev() {
     const userAnswer = parseInt(prompt('Введите количество ревью, которое уже прошли. Для  выхода из этого прекрасного меню наберите -1.'));
      
     if (userAnswer === -1) {
        alert ('Сказочник');

        return tryCountRewiev();
     }
    
     if (userAnswer >= 4) {
        alert ('Читай workflow на wiki');

        return tryCountRewiev();
     }
    
    if (Number.isNaN(userAnswer)) { 
        alert ('Бро, введи число, не морочь голову!');

        return tryCountRewiev();
    }


    if (userAnswer === numberTestCaseMax) {
        const countTestCase = confirm('Значит ты у нас тестировщик, и написал тестовые сценарии?');

        if (countTestCase === true) {
            return alert ('Отлично, отправляй Тимлиду');
        }

        if (countTestCase === false) {
            prompt ('Кто ты воин? Разработчик, Тимлид, Рюма');

            return tryCountRewiev();
        }
    }
}


UpdateRewiev();



// attempts++;

// if (userAnswer === numberTestCase || userAnswer != 0) {
//     const countTestCase = confirm('Значит ты у нас тестировщик, и написал тестовые сценарии?');
//     if (countTestCase === true) {
//         return alert ('Отлично, отправляй Тимлиду');

//     } else if (userAnswer === 0) {
//         return alert ('Отправь на ревью тестировщику!');
//     }

// } else if  (userAnswer <= 2) {
//     return alert ('Твоя карточка заапрувлена!');
// }
    
// // UpdateRewiev();


// tryCountRewiev();




//     confirm ('Значит ты у нас тестировщик?');
//     return tryGuessNumber();




//     attempts++;

// } else if (userAnswer < number) {
//     alert('Попробуй число больше.');
//     return tryGuessNumber();

// } else {
//     alert(`Поздравляю! Вы угадали число с ${attempts} попытки.`);
//     confirm('Играешь, бабки остались?');
//     return alert ('Бай, бай неудачник!')
// }

// resetGame(); 

// }

// tryGuessNumber();
