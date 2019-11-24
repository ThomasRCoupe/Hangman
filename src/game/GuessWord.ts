import { GuessLetter } from './Letter';

export class GuessWord {
    public guessWord: GuessLetter[];
    public readonly word: string;

    constructor(word: string) {
        this.word = word;
        this.guessWord = [];
        let wordArray: string[] = Array.from(word);

        wordArray.forEach(character => {
            this.guessWord.push(new GuessLetter(character));
        });
    }
}