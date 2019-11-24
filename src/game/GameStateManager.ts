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
        this.gameState = new GameState(word);
    }

    public makeGuess(character: string) {
        //TODO: character validation
        try {
            var guessCorrect = GuessWordHelper.guessLetter(character, this.gameState.guessWord);
            if(!guessCorrect) {
                this.gameState.lives--;
            }
        } catch {
            //The submitted sting was invalid; do nothing.
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

    public isGameWon(): boolean {
        return GuessWordHelper.haveAllLettersBeenGuessed(this.gameState.guessWord);
    }

    /**
     * Can be used to obtain the word for display at the end of the game, where it will not allow players to cheat.
     * Otherwise, it returns null.
     */
    public getWordAfterGameIsFinished(): string | null {
        if(this.isGameOver() || this.isGameWon()) {
            return this.gameState.guessWord.word;
        } 
        return null;
    }
}