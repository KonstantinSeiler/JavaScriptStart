// let name = prompt("Как вас зовут?");
// alert (name);
let tempTc = prompt("Введите температуру по Цельсию")
alert(9/5 * tempTc + 32);

let name = "Василий"
let admin = "Василий"
console.log(admin)

const firstNumberBillet = prompt("Введите номер билета 6 цифры через пробел");

console.log("🚀 ~ file: js.js:11 ~ firstNumberBillet:", firstNumberBillet)

if (firstNumberBillet && firstNumberBillet.length === 7) {
    const arr = firstNumberBillet.split(' ');

    console.log("🚀 ~ file: js.js:14 ~ arr:", arr)

    if (arr[0] === arr[1]) {
        alert("У вас счастливый билет");
    } else {
        alert("У вас не счастливый билет");
    }
}
  
const goodsCount = 0;

if (goodsCount > 0) {
    console.log (`Колличество товаров в корзине : ${goodsCount}`);
} else {
    console.log ('Корзина пуста');
}

goodsCount > 0
? console.log(`Колличество товаров в корзине : ${goodsCount}`)
: console.log ('Корзина пуста');

let text = goodsCount > 0 ? `Количество товаров в корзине: ${goodsCount}` : `Корзина пуста.`;
console.log(text);

const good = prompt('Введите фрукт')

if (good === 'Бананы') {
    alert('Цена на бананы 50 руб');

} else if (good === 'Манго') { 
alert('Манго стоит 80 руб');
}
const good = prompt('Введите фрукт')
switch (good) {
    case 'Бананы':
        alert('Цена на бананы 50 руб')
        break;
    case 'Манго':
        alert('Манго стоит 80 руб')
        break;
    default:
        alert('Go home')
}
const bananaStaff = 'Пятихат'

 sayPrice() {
    alert('Please enter a price')
}
sayPrice()

let a = 1;
if (a === 1) {
    let a = 2;
  alert(a);
//   let a = 2;
}
alert(a);

function add () {
const sum = a + b;
return sum;
}

const mySum = add (2, 3);


function getGoodPrice(good) {
    switch (good) {
        case 'Бананы' :
            return 50;
        case 'Манго' :
            return 80;
        case 'Яблоки' :
        case 'Груши' :
            return 40;
        default:
            return false;
    }
}

function getPriceByCount(good, count) {
    const price = getGoodPrice(good);
    if ( price === false) {
        console.error('Товар не найден');
        return false;
    }
    return price * count; 

}

console.log(getPriceByCount('Манго', 5));
console.log(getPriceByCount('Авакадо', 15));

const mangoPrice = getGoodPrice('Манго');
const avocadoPrice = getGoodPrice('Авакадо');

alert(mangoPrice);
alert(avocadoPrice);
alert(mangoPrice);

console.log(mangoPrice);

console.log(recursion1(3));

function recursion1(x) {
    if (x === 1) {
        return "1";
    }
    
    return recursion2(x - 1) + " " + x;
}

function recursion2(x) {
    if (x === 1) {
        return "1";
    }

    return recursion3(x - 1) + " " + x;
}

function recursion3(x) {
    if (x === 1) {
        return "1";
    }
    
    return recursion4(x - 1) + " " + x;
}

//Округялет число в низ(остаток)// Math.random() -> Выводит псевдорандомное число основанное на времени ПК в нано секундах до 0, т.е 0.44234234
Math.floor(Math.random() * 100)
