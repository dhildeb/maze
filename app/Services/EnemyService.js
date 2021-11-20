import { ProxyState } from "../AppState.js";

class EnemyService {

  moveTowardPlayer() {
    let playerPos = ProxyState.player
    let enemyPos = ProxyState.enemy

    // if (Math.abs(playerPos.x - enemyPos.x) > 25) {
    //   playerPos.x > enemyPos.x ? enemyPos.x += 25 : enemyPos.x -= 25
    // } else {
    //   enemyPos.x = playerPos.x
    // }

    // if (Math.abs(playerPos.y - enemyPos.y) > 25) {
    //   playerPos.y > enemyPos.y ? enemyPos.y += 25 : enemyPos.y -= 25
    // } else {
    //   enemyPos.y = playerPos.y
    // }

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
    if (ProxyState.enemySpeed > -5) {
      ProxyState.enemySpeed -= 2
    }
  }
}

export const enemyService = new EnemyService()

