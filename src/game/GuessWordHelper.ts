import { GuessWord } from "./GuessWord";

export class GuessWordHelper {

    /**
     * Returns true if the guess is correct. If a letter is guessed, all occurences of that letter within
     * the guess word will have their 'guessed' property set to true.
     * @param character The character that is guessed.
     * @param guessWord The GuessWord to check.
     */
    public static guessLetter(character: string, guessWord: GuessWord): boolean {
        if(character.length != 1) {
            throw new Error("Invalid letter length.");
        }
        let guessCorrect: boolean = false;
        guessWord.guessWord.forEach(guessLetter => {
            if(guessLetter.Letter().toUpperCase() === character.toUpperCase()) {
                guessLetter.guessed = true;
                guessCorrect = true;
            }
        });

        return guessCorrect;
    }

    /**
     * Returns a string of the guest word, obscuring all letters that have not been guessed with underscores.
     * @param guessWord The GuessWord to generate the string from.
     */
    public static createGuessString(guessWord: GuessWord): string {
        var guessString = "";
        guessWord.guessWord.forEach(guessLetter => {
            if(guessLetter.guessed == true) {
                guessString += guessLetter.Letter();
            } else {
                guessString += "_";
            }
        });
        return guessString;
    }

    public static getAmountOfLettersToGuess(guessWord: GuessWord): number {
        let amountOfLettersStillToGuess: number = 0;

        guessWord.guessWord.forEach(guessLetter => {
            if(!guessLetter.guessed) {
                amountOfLettersStillToGuess++;
            }
        });

        return amountOfLettersStillToGuess;
    }

    public static haveAllLettersBeenGuessed(guessWord: GuessWord) {
        var haveAllLettersBeenGuessed = true;
        guessWord.guessWord.forEach(guessLetter => {
            if(!guessLetter.guessed) {
                haveAllLettersBeenGuessed = false;
            }
        });

        return haveAllLettersBeenGuessed;
    }
}