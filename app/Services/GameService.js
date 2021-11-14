import { ProxyState } from "../AppState.js";

class GameService {

  gameOver() {
    ProxyState.game = false
  }
  restart() {
    ProxyState.level = 72
    ProxyState.position = null
  }
  score() {
    ProxyState.position = ProxyState.goal
    ProxyState.level += 1
  }
}

export const gameService = new GameService()