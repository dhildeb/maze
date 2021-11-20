import { ProxyState } from "../AppState.js";
import { enemyService } from "./EnemyService.js";


class GameService {
  constructor() {

  }
  gameOver() {
    ProxyState.game = false
    let highScore = JSON.parse(window.localStorage.getItem("highScore-maze"))
    if ((ProxyState.level - 72) > highScore) {

      window.localStorage.setItem("highScore-maze", JSON.stringify((ProxyState.level - 72)))
    }
    ProxyState.timer = 0
    _setPoints()
    return true
  }
  restart() {
    location.reload()
  }
  score() {
    ProxyState.position = ProxyState.goal
    ProxyState.level += 1
    ProxyState.points += 1
    if ($(window).width() < 700) {
      ProxyState.timer += 1
    } else {
      ProxyState.timer += 5
    }
    enemyService.increaseEnemySpeed()
    enemyService.spawnEnemy()
  }
  start(num) {
    ProxyState.weapon = num
    let x = setInterval(function () {
      document.getElementById("timer").innerHTML = ProxyState.timer
      if (ProxyState.timer <= 0) {
        app.gameController.gameOver() ? clearInterval(x) : ProxyState.timer += 5
      }
      if (ProxyState.timer > 0) {
        ProxyState.timer--
      }
    }, 1000);
    ProxyState.points = _getPoints()

    enemyService.determineEnemySpeed()

  }
}

function _getPoints() {
  let points = JSON.parse(window.localStorage.getItem("power-points"))
  return points ?? 0
}
function _setPoints() {
  window.localStorage.setItem("power-points", JSON.stringify((ProxyState.points)))
}

export const gameService = new GameService()