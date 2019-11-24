import { IDictionaryService } from "./IDictionaryService";
import { Dictionary } from './Dictionary'

export class DictionaryService implements IDictionaryService {
    private dictionary: Dictionary;

    constructor() {
        this.dictionary = new Dictionary();
    }
    
    getRandomWord(): string {
        return this.dictionary.getRandomWord();
    }
}