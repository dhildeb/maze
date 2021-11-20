import { ProxyState } from "../AppState.js"
import { gameService } from "./GameService.js"

class PlayerService {
  handleHit() {
    if (ProxyState.powerMode) {
      ProxyState.points -= 5
      if (ProxyState.points < 5) {
        ProxyState.powerMode = false
      }
      return false
    }
    gameService.gameOver()
  }
  powerMode() {
    if (ProxyState.points > 4) {
      ProxyState.powerMode = !ProxyState.powerMode
    } else {
      ProxyState.powerMode = false
    }
  }
}
export const playerService = new PlayerService()