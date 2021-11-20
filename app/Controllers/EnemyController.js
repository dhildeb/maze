import { ProxyState } from "../AppState.js";
import { enemyService } from "../Services/EnemyService.js";

export class EnemyController {
  constructor() {
    ProxyState.on('timer', _drawEnemy)
  }

}
function _drawEnemy() {
  if (ProxyState.level > 75) {
    enemyService.moveTowardPlayer()
    document.getElementById('enemy').innerHTML = `
    <div class='enemy' style='left: ${ProxyState.enemy.x}px; top: ${ProxyState.enemy.y}px;'></div>
    `
  }
}