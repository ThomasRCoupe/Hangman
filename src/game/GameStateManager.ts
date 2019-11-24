import { GameState } from "./GameState";
import { IDictionaryService } from "../dictionary/dictionaryModule";
import { GuessWordHelper } from "./GuessWordHelper";

/**
 * Manages the game's logic.
 */
export class GameStateManager {
    private gameState: GameState;
    private dictionaryService: IDictionaryService;

    constructor(dictionaryService: IDictionaryService) {
        this.dictionaryService = dictionaryService;
        this.initialiseGame();
    }

    public initialiseGame() {
        var word = "";

        while(word.length < 3) {
            word = this.dictionaryService.getRandomWord();
        }
        this.gameState = new GameState(word, 5);
    }

    public makeGuess(character: string) {
        //TODO: character validation
        if(!GuessWordHelper.guessLetter(character, this.gameState.guessWord)) {
            this.gameState.lives--;
        }
    }

    public createGuessString(): string{
        return GuessWordHelper.createGuessString(this.gameState.guessWord);
    }

    public getLives(): number {
        return this.gameState.lives;
    }

    public isGameOver(): boolean {
        return this.gameState.lives < 0;
    }

    public getAmountOfLettersToGuess(): number {
        return GuessWordHelper.getAmountOfLettersToGuess(this.gameState.guessWord);
    }

    public getIsGameWon(): boolean {
        return GuessWordHelper.haveAllLettersBeenGuessed(this.gameState.guessWord);
    }
}