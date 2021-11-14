import { ProxyState } from "../AppState.js";

class GameService {

  gameOver() {
    ProxyState.game = false
  }
  restart() {
    ProxyState.position = null
    ProxyState.level = 72
  }
  score() {
    ProxyState.position = ProxyState.goal
    ProxyState.level += 1
  }
}

export const gameService = new GameService()