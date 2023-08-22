

const settingsTableTennis = {
    rowCount: 3,
    colsCount: 3,
    startPositionX: 1,
    startPositionY: 1,
    };

    const player ={
        x: null, 
        y: null,
    
        init(startX, startY) { 
            this.x = startX; 2
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
        settingsTableTennis,
        player,
    
        run () {
            this.player.init(this.settingsTableTennis.startPositionX, this.settingsTableTennis.startPositionY);
    
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
    
            for (let row = 0; row < this.settingsTableTennis.rowCount; row++) {
                for (let col =0; col < this.settingsTableTennis.colsCount; col++) {
                    if (this.player.y === row && this.player.x ===col){
                        map += 'MoneyBag ';
                    } else {
                        map += 'DONIC BUTTERFLY ';
                    }
                }
                map += '\n'; 
            }

            console.clear
            console.log(map);
        },
    
        getDirection() {
            const availableDirections = [-1, 2, 4, 6, 8];
    
            while (true) {
    
                const direction = parseInt(prompt('Введите число, куда вы хотите переместиться, для выхода -1.')); 
    
                if (!availableDirections.includes(direction)) { 
                    alert(`Для перемещения необходимо ввести одно из числе: ${availableDirections.join(', ')}.`); 
                    continue;
                }
                return direction;
            }
        },
    
    };
    
    game.run();
    
