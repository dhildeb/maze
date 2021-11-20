import { ProxyState } from "../AppState.js";
import { playerService } from "./PlayerService.js";

class EnemyService {

  moveTowardPlayer() {
    let playerPos = ProxyState.player
    let enemyPos = ProxyState.enemy

    playerPos.x > enemyPos.x ? enemyPos.x++ : enemyPos.x--
    playerPos.y > enemyPos.y ? enemyPos.y++ : enemyPos.y--
  }

  determineEnemySpeed() {
    const speed = ProxyState.enemySpeed
    let enemyMovement = setInterval(speedInterval, ProxyState.enemySpeed)
    function speedInterval() {
      if (speed != ProxyState.enemySpeed) {
        clearInterval(enemyMovement)
        enemyMovement = setInterval(speedInterval, ProxyState.enemySpeed);
      }
      ProxyState.enemySpeed = ProxyState.enemySpeed
      app.enemyController.moveTowardPlayer()
    }
  }
  increaseEnemySpeed() {
    if (ProxyState.enemySpeed > 15) {
      ProxyState.enemySpeed -= 2
    }
  }
  battle() {
    playerService.handleHit()
    ProxyState.enemySpeed++
    ProxyState.enemy.x = 50
    ProxyState.enemy.y = 50
  }
}

export const enemyService = new EnemyService()

