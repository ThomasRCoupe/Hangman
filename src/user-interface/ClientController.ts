import { IGameService } from "../game/GameModule";
import { ClientView } from "./ClientView";

export class ClientController {
    private gameService: IGameService;
    private clientView: ClientView;
    
    constructor(gameService: IGameService) {
        this.gameService = gameService;
        this.clientView = new ClientView(this);
    }

    launch() {
        this.gameService.newGame();
        this.displayGameState();
    }

    displayGameState(warning?: string) {
        if(this.gameService.getIsGameOver()) {
            this.clientView.displayGameOver();
        } else if(this.gameService.getIsGameWon()) {
            this.clientView.displayVictory();
        } else {
            this.clientView.promptTurn(this.gameService.getLives(), this.gameService.getGuessWord(), warning);
        }
    }

    makeGuess(guess: string) {
        if(guess.length > 1) {
            this.displayGameState("Only submit a single letter!");
        } else {
            this.gameService.makeGuess(guess);
            this.displayGameState();
        }
    }
}