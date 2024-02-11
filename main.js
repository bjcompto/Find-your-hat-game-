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
        //console.log(typeof userMove); 
        console.log(`You want to move where again? \n${userMove}  \nLet me see if that's possible lol`); 
        this.userMovement(userMove);
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

   userMovement(str) {
        if(str === 'right') {
            //move right 1 space;
            console.log('test for accepted arg'); 
        } else if(str === 'left') {
            //move left 1 space;
        } else if (str === 'up') {
            //move up 1 space;
        } else if(str === 'down') {
            //move down 1 space; 
        } else {
            console.log('invalid entry.  You can move right, left, up or down.  Enter valid entry')
            this.userDirections(); 
        }
    }

}



const gameOne = new Field([
    [pathCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, fieldCharacter],
    [fieldCharacter, hat, fieldCharacter]
])


gameOne.userDirections(); 
