import { ProxyState } from "../AppState.js";
import { enemyService } from "../Services/EnemyService.js";

export class EnemyController {
  constructor() {
    ProxyState.on('enemySpeed', _drawEnemy)
    ProxyState.on('enemies', _drawEnemies)
  }

  moveTowardPlayer() {
    enemyService.moveTowardPlayer()
  }
  battle() {
    enemyService.battle()
  }
  moveSpawns() {
    enemyService.moveSpawns()
  }
}
function _drawEnemy() {
  if (ProxyState.level > 75) {
    document.getElementById('enemy').innerHTML = `
    <div class='enemy' style='left: ${ProxyState.enemy.x}px; top: ${ProxyState.enemy.y}px;' onmouseover="app.enemyController.battle()"></div>
    `
  }
}

function _drawEnemies() {
  let template = ''
  ProxyState.enemies.forEach(enemy => {
    template += enemy.Template
  });
  document.getElementById('enemies').innerHTML = template
}