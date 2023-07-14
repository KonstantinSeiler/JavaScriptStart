
let numberTestCase;
let countRewiev;
let countTestCase;
let answerWhoAreYou;
let realizeFeature;
let answerNotFeature;

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
        countTestCase = confirm('Значит ты у нас тестировщик, и написал тестовые сценарии?');

    }


    if (countTestCase === true) {
        alert ('Отлично, отправляй Тимлиду');

        return tryCountRewiev();

    }
    
    
    if (countTestCase === false) {
        answerWhoAreYou = prompt ('Кто ты воин? Разработчик, Тимлид, Рюма');
    
    }
    
    
     if (answerWhoAreYou === 'Разработчик') {
        realizeFeature = confirm('Реализовал фичу?')
     }


    if (realizeFeature === true) {
        return alert ('Твоя карточка заапрувлена!');
    }
            
            
    if (realizeFeature === false) {
        answerNotFeature = confirm('Ты автоматизировал?');
    }

    if (answerNotFeature === true) {
        alert ('Твоя карточка заапрувлена!');
    }
            
                    return tryCountRewiev();
                }

            
        
  

UpdateRewiev();
