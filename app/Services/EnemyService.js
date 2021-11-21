import { ProxyState } from "../AppState.js";
import { Enemy } from "../Models/Enemy.js";
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
      app.enemyController.moveSpawns()
    }
  }
  increaseEnemySpeed() {
    if (ProxyState.enemySpeed > 15) {
      ProxyState.enemySpeed -= 2
    }
  }
  battle(id = 0) {
    playerService.handleHit(id)
    ProxyState.enemySpeed++
    ProxyState.enemy.x = 50
    ProxyState.enemy.y = 50
  }
  spawnEnemy() {
    let enemy = new Enemy()
    ProxyState.enemies.push(enemy)
  }
  moveSpawns() {
    const maxX = $(window).width()
    const maxY = $(window).height()
    ProxyState.enemies.forEach(enemy => {
      let pos = enemy.getPosition()
      if (pos.x >= maxX || pos.y <= 0) {
        enemy.setDirX(!enemy.dirX)
      }
      if (pos.y >= maxY || pos.y <= 0) {
        enemy.setDirY(!enemy.dirY)
      }
      enemy.dirX ? pos.x-- : pos.x++
      enemy.dirY ? pos.y-- : pos.y++

      enemy.setPosition(pos.x, pos.y)
    })
    ProxyState.enemies = ProxyState.enemies
  }
}

export const enemyService = new EnemyService()

