import { ProxyState } from "../AppState.js";
import { enemyService } from "../Services/EnemyService.js";

export class EnemyController {
  constructor() {
    ProxyState.on('enemySpeed', _drawEnemy)
  }

  moveTowardPlayer() {
    enemyService.moveTowardPlayer()
  }

}
function _drawEnemy() {
  document.getElementById('enemy').innerHTML = `
    <div class='enemy' style='left: ${ProxyState.enemy.x}px; top: ${ProxyState.enemy.y}px;' onmouseover="app.gameController.gameOver()"></div>
    `
}