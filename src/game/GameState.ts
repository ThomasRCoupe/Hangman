import { GuessWord } from "./GuessWord";

export class GameState {
    public guessWord: GuessWord;
    public lives: number;

    constructor(word: string, lives: number = 5) {
        this.guessWord = new GuessWord(word);
        this.lives = lives;
    }
}