const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(gameField) {
        this.gameField = gameField; 
    }
    //this does not actually reset game..work on last 
    newGame() {
        console.log(this.gameField); 
    }
    //setTimeout not good with for loop..learn more about why later
    /**In order to use setTimeout in for loop have to pass callback i so that function will have access to the loop's iterator
     * for example const myfunc = (i) => console.log(i); 
     * for(let i = 0; i < arr.length; i++) {
     *    setTimeout(() => doThing(i), 1500});
     * }
    */
    printBoard() {
        let bdStr = this.gameField.map(arr => arr.join('')).join('');
        console.log(bdStr); 
    }

    userPrompt() {
        const userMove = prompt('Which direction would you like to move? ').toLowerCase();
        console.log(`You want to move where again?  \n${userMove}`);
        return userMove; 
    }

    runGame() {
        //may use plyer piece to anchor player undecided 
        this.printBoard();
        //game loop 
        for(let i = 0; i < this.gameField.length; i++) {
            for(let j = 0; j < this.gameField[i].length; j++) {
                const userMove = this.userPrompt();
                //passing i n j to method 
                this.userMovement(userMove); 
                //this.holePresent();  
            }
        }
    }
    //detects hole board and ends game if encountered..
    holePresent() {
        for(let i = 0; i < this.gameField.length; i++) {
            for(let j = 0; j < this.gameField[i].length; j++) {
                if(this.gameField[i][j] === this.hole) {
                    console.log('There is a hole here.')
                    this.newGame();
                    break; 
                } else {
                    //what to do if hole not presetn 
                }
            }
        }
    }
    
   userMovement(str) {
        
        if(str === 'right') {
            console.log('Moving to the right');
            for(let i = 0; i < this.gameField.length; i++) {
                for(let j = 0; j < this.gameField[i].length - 1; j++) {
                    this.gameField[i][j + 1] = pathCharacter; 
                    break; 
                }  
            }
        } else {
            console.log('invalid entry\n'); 
        }  
        
        this.printBoard();
       
            /*
            if(str === 'right') {
            //move r + 1;
                console.log('Moving piece right');
                this.gameField[i][j + 1] = pathCharacter; 
                //return 
            } else {
                console.log('invalid entry\n');
                //this.printBoard();
            } this.printBoard();
            return
            */       
    }

    plyer() {
        this.gameField[0][0] = pathCharacter; 
        //console.log(this.gameField); 
    }
}

const gameOne = new Field([
    [pathCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, fieldCharacter],
    [fieldCharacter, hat, fieldCharacter]
])

gameOne.runGame(); 
//gameOne.printBoard();

