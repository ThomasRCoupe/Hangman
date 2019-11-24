export interface IGameService {
    /**
     * Guesses the supplied character.
     * @param character The character to guess.
     */
    makeGuess(character: string): void;

    /**
     * Gets the current number of lives left to the user.
     */
    getLives(): number;

    /**
     * Get number of letters still to guess
     */
    getAmountOfLettersStillToGuess(): number;

    /**
     * Gets the string of the word as currently guessed, with unguessed letters masked.
     */
    getGuessWord(): string;

    /**
     * Returns true if the game is over.
     */
    getIsGameOver(): boolean;

    /**
     * Gets whether the game has been won.
     */
    getIsGameWon(): boolean;
    
    /**
     * Starts a new game.
     */
    newGame(): void;

    /**
     * Can be used to obtain the word for display at the end of the game, where it will not allow players to cheat.
     */
    getWordAfterGameIsFinished(): string | null;
}