const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(gameField) {
        this.gameField = gameField; 
    }

    printBoard() {
        setTimeout(() => {
            let twoArrToStr = this.gameField.map(arr => arr.join('')).join('');
            console.log(twoArrToStr); 
        }, 1500);
    }

    userDirections() {
        const userMove = prompt('Which direction would you like to move? ');
        console.log(`You want to move: ${userMove}`); 
        this.printBoard();
    }


}



const gameOne = new Field([
    [pathCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, fieldCharacter],
    [fieldCharacter, hat, fieldCharacter]
])


gameOne.userDirections(); 
