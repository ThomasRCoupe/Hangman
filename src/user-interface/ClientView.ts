import * as readline from 'readline';
import { ClientController } from './ClientController';

export class ClientView {
    private clientController: ClientController;
    private rl: readline.Interface;

    constructor(clientController: ClientController) {
        this.clientController = clientController;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
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

        this.rl.question('Guess a letter: ', (answer) => {
            this.clientController.makeGuess(answer);
        })
    }

    /**
     * @param word The word that the player was guessing.
     */
    public displayGameOver(word: string | null) {
        console.clear();
        console.log("HANGMAN");
        console.log("\n");
        console.log("GAME OVER!");
        console.log("\n");
        if(word) {
            console.log(`The word was ${word}`);
            console.log("\n");
        }

        this.rl.question('Retry?[Y/N]: ', (answer) => {
            if(answer == 'Y' || answer == 'y') {
                this.clientController.launch();
            } else {
                this.rl.close();
            }
        })
    }

    /**
     * @param word The word that the player was guessing.
     */
    public displayVictory(word: string | null) {
        console.clear();
        console.log("HANGMAN");
        console.log("\n");
        console.log("YOU WON!");
        console.log("\n");
        if(word) {
            console.log(`The word was ${word}`);
            console.log("\n");
        }

        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Play Again?[Y/N]: ', (answer) => {
            if(answer == 'Y' || answer == 'y') {
                this.clientController.launch();
            } else {
                this.rl.close();
            }
        })
    }
}