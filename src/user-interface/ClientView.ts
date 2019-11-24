import * as readline from 'readline';
import { ClientController } from './ClientController';

export class ClientView {
    clientController: ClientController;

    constructor(clientController: ClientController) {
        this.clientController = clientController;
    }

    public promptTurn(lives: number, guessWord: string, warning?: string) {
        console.clear();
        console.log("HANGMAN");
        console.log("\n");
        console.log("Word: " + guessWord);
        console.log("Lives: " + lives);
        if(warning) {
            console.log(warning);
        }
        console.log("\n");
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Guess a letter: ', (answer) => {

        })
    }

    public displayGameOver() {
        console.clear();
        console.log("HANGMAN");
        console.log("\n");
        console.log("GAME OVER!");
        console.log("\n");

        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Retry?[Y/N]: ', (answer) => {
            if(answer == 'Y' || answer == 'y') {
                this.clientController.launch();
            }
        })
    }

    public displayVictory() {
        console.clear();
        console.log("HANGMAN");
        console.log("\n");
        console.log("YOU WON!");
        console.log("\n");

        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Play Again?[Y/N]: ', (answer) => {
            if(answer == 'Y' || answer == 'y') {
                this.clientController.launch();
            }
        })
    }
}