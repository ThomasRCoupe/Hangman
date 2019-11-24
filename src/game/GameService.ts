import { IGameService } from "./IGameService";
import { GameStateManager } from "./GameStateManager";
import { IDictionaryService } from "../dictionary/dictionaryModule";

export class GameService implements IGameService {
    private gameStateManager: GameStateManager;

    /**
     * Used to inject a dictionary service dependency.
     * @param dictionaryService 
     */
    constructor(dictionaryService: IDictionaryService) {
        this.gameStateManager = new GameStateManager(dictionaryService);
    }

    /**
     * Returns true if the game is over.
     */
    public getIsGameOver(): boolean {
        return this.gameStateManager.isGameOver();
    }
    
    /**
     * Starts a new game.
     */
    public newGame(): void {
        this.gameStateManager.initialiseGame();
    }

    /**
     * Guesses the supplied character.
     * @param character The character to guess.
     */
    public makeGuess(character: string): void {
        this.gameStateManager.makeGuess(character);
    }    
    
    /**
     * Gets the  current number of lives left to the user.
     */
    public getLives(): number {
        return this.gameStateManager.getLives();
    }
    
    /**
     * Gets the string of the word as currently guessed, with unguessed letters masked.
     */
    public getGuessWord(): string {
        return this.gameStateManager.createGuessString();
    }

    /**
     * Get number of letters still to guess
     */
    getAmountOfLettersStillToGuess(): number {
        return this.gameStateManager.getAmountOfLettersToGuess();
    }

    /**
     * Gets whether the game has been won.
     */
    getIsGameWon(): boolean {
        return this.gameStateManager.getIsGameWon();
    }
}