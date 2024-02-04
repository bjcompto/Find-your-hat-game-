const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(gameField) {
        this.gameField = gameField; 
    }

    newGame() {
        console.log(this.gameField); 
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
        this.holePresent();
    }

    holePresent() {
        for(let i = 0; i < this.gameField.length; i++) {
            for(let j = 0; j < this.gameField[i].length; j++) {
                if(this.gameField[i][j] === this.hole) {
                    console.log('There is a hole here.')
                    this.newGame();
                    break; 
                }
            }
        }
    }

}



const gameOne = new Field([
    [pathCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, fieldCharacter],
    [fieldCharacter, hat, fieldCharacter]
])


gameOne.userDirections(); 
