import { IDictionaryService } from "./dictionary/DictionaryModule";
import { DictionaryService } from "./dictionary/DictionaryService";
import { IGameService, GameService } from "./game/GameModule";
import { HangmanClient } from './user-interface/UserInterfaceModule'

// The entry point for the hangman game
let dictionaryService: IDictionaryService = new DictionaryService();
let gameService: IGameService = new GameService(dictionaryService);
let hangmanClient: HangmanClient = new HangmanClient();
hangmanClient.startHangman(gameService);
