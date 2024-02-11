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

    userPrompt() {
        const userMove = prompt('Which direction would you like to move? ');
        //console.log(typeof userMove); 
        console.log(`You want to move where again? \n${userMove}  \nLet me see if that's possible lol`); 
        return userMove; 
    }

    runGame() {
        const userMove = this.userPrompt(); 
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
        console.log('received user input:', str);
        if(str === 'right') {
            //move right 1 space;
            console.log('moving right'); 
        } else if(str === 'left') {
            //move left 1 space;
            console.log('moving left');
        } else if (str === 'up') { //************for some reason up is returning invalid entry instead of console logging 'moving up'; 
            //move up 1 space;
            console.log('moving up');
        } else if(str === 'down') {
            //move down 1 space; 
            console.log('moving down'); 
        } else {
            console.log('invalid entry.  You can move right, left, up or down.  Enter valid entry')
            return; 
        }
    }

}



const gameOne = new Field([
    [pathCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, fieldCharacter],
    [fieldCharacter, hat, fieldCharacter]
])


gameOne.runGame(); 
