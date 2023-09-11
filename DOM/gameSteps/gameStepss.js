"use strict";

const settings = {
    rowsCount: 10,
    colsCount: 10,
    startPositionX: 0,
    startPositionY: 0,
    startDirection: 'right',
    stepsInSeconds: 5,
    playerCellColor: '#AA3333',
    emptyCellColor: '#EEEEEE', 

};

const player = {
    x: null,
    y: null,
    direction: null,
    cellElements: null, // Массив со всеми ячейками которые мы создавали

    init (startX, startY, startDirection) {   // Надо инициализировать игрока, игрок не знает, где у него X и где Y (Где находится игрок);
    this.x = startX;
    this.y = startY;
    this.direction = startDirection;      // Этому методу Init, просто будем передавать стартовые настройки игрока, он запишет их в свойства const player {x, y, direction}. Делаем для того, чтоб не было зависимость от const settings {x, y, direction
    }
};



const game = {
    player,
    settings,
    containerElement: null, // Если есть слово Element значит будет какой то тэг хранится, тут мы получим доступ к нашей таблице


    run () {
        this.init();
        this.render();

    },

    init () {
        this.player.init(this.settings.startPositionX, this.settings.startPositionY, this.settings.startDirection); //Вывели игрока
        this.containerElement = document.getElementById('game'); // Положили table в наше свойство containerElement
        this.initCells(); // Хочу отрисовать наши ячейки, думаю надо создать для этого метод отдельный
        this.initEventHandlers(); 
    },

    initEventHandlers() {

    },

    initCells() {
        this.containerElement.innerHTML = ''; // Очищаем на всякий случай наш элемент от текста ( необязательно)
        this. cellElements = []; // Массив со всеми td
        for ( let row = 0; row < this.settings.rowsCount; row++ ) {    // Пока у нас строки меньше чем rowsCount заполняем row
             const trElem = document.createElement('tr'); // Создали переменную заполним ее tr
             this.containerElement.appendChild(trElem); // Происходит здесь следующее, мы пробежимся в цикле for столько раз, сколько строк надо вывести, 'tr' это как раз и есть строка в таблице, мы ее создаем и вставляем как ребенка в нашу таблицу
             for (let col = 0; col < this.settings.colsCount; col ++) { // Создали переменную заполняем ее td
                const cell = document.createElement('td');
                this.cellElements.push(cell);
                trElem.appendChild(cell);   // Добавляем в tr ребенка td
             }
         }
         
    },
};

window.addEventListener('load', () => game.run()); // Когда вешаем событие пишем такую конструкцию, когда будет выполнятся стрелочная функция она запустит наш метод run;
