const resultSumTestId = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
let action = '+';


plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}

function printResult(result) {
    if (result === '+') {
        resultSumTestId.style.color = 'red';
    } else {
        resultSumTestId.style.color = 'green';
    }
    resultSumTestId.textContent = result;
}

submitBtn.onclick = function () {
    if (action === '+') {
    const sum = Number(input1.value) + Number(input2.value);
    printResult(result);
    resultSumTestId.textContent = sum;
    } else {
        const sum = Number(input1.value) - Number(input2.value);
        printResult(result);
        resultSumTestId.textContent = sum;
        }
}



console.log(resultSumTestId);
