//DTO объекты - просто хранят данные в удобном виде, не перемещает их



const settings = {
rowCount: 10,
colsCount: 10,
startPositionX: 2,
startPositionY: 8,
};

const player ={
    x: null, // Можно ссылаться на settings x: settings.startPositionX, (Не очень хоршо мы тянем за собой объект settings)
    y: null,

    init(startX, startY) { // Метод init проставляет стартовые позиции, запишет значения
        this.x = startX; // this. здесь ссылается на const player
        this.y = startY;
    },

    move(direction) {
        switch (direction) {
            case 2:
                this.y++;
                break;
            case 4:
                this.x--;
                break;
            case 6:
                this.x++;
                break;
            case 8:
                this.y --;
                break;
        }
    },
 };

const game = {
    // settings: config, // Как вариант, в этом случае ссылаемся на this.settings (не на config)
    settings, // Доступная в стандартах Е6 заменяет записать settings: settings or : config...
    player,

    run () {
        this.player.init(this.settings.startPositionX, this.settings.startPositionY); // метод run в объекте game, this. ссылается на game

        while (true) {
            this.render();

            const direction = this.getDirection();

            if ( direction === -1) {
                return alert('До свидания.');
            }

            this.player.move(direction);
        }
    },

    render() { // Поле
        let map = '';

        for (let row = 0; row < this.settings.rowCount; row++) {
            for (let col =0; col < this.settings.colsCount; col++) {
                if (this.player.y === row && this.player.x ===col){
                    map += '0 ';
                } else {
                    map += 'x ';
                }
            }
            map += '\n'; // Перенос строки
        }
        console.clear
        console.log(map);
    },

    getDirection() {
        const availableDirections = [-1, 2, 4, 6, 8];

        while (true) {

            const direction = parseInt(prompt('Введите число, куда вы хотите переместиться, для выхода -1.')); // parseInt преобразует в целое число (Буквы не примет!)

            if (!availableDirections.includes(direction)) { // Метод includes, если НЕ существует значение direction в массиве availableDirections то мы заходим в alert и продолжаем (continue)
                alert(`Для перемещения необходимо ввести одно из числе: ${availableDirections.join(', ')}.`); // Метод join. преорбазует массив в строку с условиями (', ) или можно ('||')
                continue;
            }
            return direction;
        }
    },

};

game.run();
