import * as fs from 'fs';

export class Dictionary {
    readonly dictionaryURL = "../resource/words_alpha.txt";
    words : string[];

    constructor() {
        //TODO: Potentially increase efficiency.
        this.words = fs.readFileSync(this.dictionaryURL, 'utf8').split('\n');
    }
    
    getRandomWord(): string {
        var word = this.words[Math.floor(Math.random() * this.words.length)];
        return word.trim().replace('\n', '');
    }
}