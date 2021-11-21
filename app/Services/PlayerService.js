import { ProxyState } from "../AppState.js"
import { gameService } from "./GameService.js"

class PlayerService {
  handleHit(id = 0) {
    if (ProxyState.powerMode) {
      ProxyState.points -= 5
      if (ProxyState.points < 5) {
        ProxyState.powerMode = false
      }
      console.log(id)
      console.log(ProxyState.enemies)
      ProxyState.enemies = ProxyState.enemies.filter(e => e.id != id)
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