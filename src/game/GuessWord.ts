import { GuessLetter } from './Letter';

export class GuessWord {
    public guessWord: GuessLetter[];

    constructor(word: string) {
        this.guessWord = [];
        let wordArray: string[] = Array.from(word);

        wordArray.forEach(character => {
            this.guessWord.push(new GuessLetter(character));
        });
    }
}