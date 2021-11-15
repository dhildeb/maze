import { ProxyState } from "../AppState.js";

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
  }
  restart() {
    ProxyState.position = null
    ProxyState.level = 72
    ProxyState.timer = 71
  }
  score() {
    ProxyState.position = ProxyState.goal
    ProxyState.level += 1
    ProxyState.timer += 10
  }
  start(num) {
    ProxyState.weapon = num
    let x = setInterval(function () {
      document.getElementById("timer").innerHTML = ProxyState.timer
      if (ProxyState.timer < 0) {
        this.gameOver()
        clearInterval(x)
      }
      if (ProxyState.timer > 0) {
        ProxyState.timer--
      }
    }, 1000);
  }
}

export const gameService = new GameService()