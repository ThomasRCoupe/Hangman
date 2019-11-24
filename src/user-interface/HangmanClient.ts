import { ClientController } from './ClientController'
import { IGameService } from '../game/GameModule';

export class HangmanClient {
    startHangman(gameService: IGameService) {
        var clientController = new ClientController(gameService);
        clientController.launch();
    }
}