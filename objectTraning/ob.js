// Функции записанные внутри объекта - НАЗЫВАЕТСЯ МЕТОД 


// const myCar = {
//     manufacturer: 'BNW',
//     color: 'black',
//    possibleColors: ['black', 'red', 'brown', 'grey'],
//    engine: {
//     engineCode: 'B58',
//     power: 350,
//    }, 
//    beep() {
//     console.log('Машина подает сигнал!');
//    },
// };

// Вывод свойств с их значениями
// for (const prop in myCar){
//     console.log(`В объекте есть свойство ${prop}, в свойстве лежит значение: ${myCar[prop]}`)
// }


// // Дай мне все ключи объекта myCar
// console.log(Object.keys(myCar));



// let a = {
//     number: 1,
// };
// console.log(a); // 1
// incOne(a);
// console.log(a); // 1


// function incOne(param) {
//     return param.number++;
// }

// Обращаемся к объекту
// function getObject() {
//     return {
//         number: 5,
//         sayNumber() {
//             console.log(`Номер в данном объекте: ${this.number}`);
//         }
//     };
// }

// const myObj = getObject();
// myObj.sayNumber();



const settings = {
    rowCount: 10,
    colsCount: 10,
    startPositionX: 0,
    startPositionY: 0,
    };
    
    const game = {
       settings, // Это тоже самое что settings: settings. В объекте game будет свойство settings и в этом свойстве, будет лежать переменная которая будет доступна по названию settings.

       run() {
        console.log(this.settings);
       }
    };    
