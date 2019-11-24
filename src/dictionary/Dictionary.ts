import * as fs from 'fs';

export class Dictionary {
    readonly dictionaryURL = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt";
    words : string[];

    constructor() {
        //TODO: Potentially increase efficienct.
        this.words = fs.readFileSync(this.dictionaryURL, 'utf8').split('\n');
    }
    
    getRandomWord(): string {
        return this.words[Math.floor(Math.random() * this.words.length)];
    }
}