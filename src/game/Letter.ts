export class GuessLetter {
    private letter: string;
    public guessed: boolean;

    constructor(letter: string) {
        if(letter.length != 1) {
            throw new Error("Invalid letter length.");
        }
        this.letter = letter;
        this.guessed = false;
    }

    public Letter(): string {
        return this.letter;
    }

}