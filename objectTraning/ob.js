// Функции записанные внутри объекта - НАЗВАЕТСЯ МЕТОД 


const myCar = {
    manufacturer: 'BNW',
    color: 'black',
   possibleColors: ['black', 'red', 'brown', 'grey'],
   engine: {
    engineCode: 'B58',
    power: 350,
   }, 
   beep() {
    console.log('Машина подает синал!');
   },
};

// Вывод свойств с их значениями
for (const prop in myCar){
    console.log(`В объекте есть свойство ${prop}, в свойстве лежит значение: ${myCar[prop]}`)
}


// // Дай мне все ключи объекта myCar
console.log(Object.keys(myCar));



let a = {
    number: 1,
};
console.log(a); // 1
incOne(a);
console.log(a); // 1


function incOne(param) {
    return param.number++;
}
