import { ProxyState } from "./AppState.js";
import { BlockController } from "./Controllers/BlockController.js";
import { EnemyController } from "./Controllers/EnemyController.js";
import { GameController } from "./Controllers/GameController.js";
import { PlayerController } from "./Controllers/PlayerController.js";
import { SettingsController } from "./Controllers/SettingsController.js";
class App {
  blockController = new BlockController()
  gameController = new GameController()
  enemyController = new EnemyController()
  playerController = new PlayerController()
  settingsController = new SettingsController()
}

window["app"] = new App();

$(document).on("mousemove", function (event) {
  ProxyState.player.x = event.pageX
  ProxyState.player.y = event.pageY
})

// no cheating
$(document).mouseleave(() => {
  if (ProxyState.points) {
    app.gameController.gameOver('cheating')
  }
})
let highScore = JSON.parse(window.localStorage.getItem("highScore-maze"))
switch (true) {
  case highScore > 20:
    document.getElementById('sword').classList.remove('d-none')
  case highScore > 15:
    document.getElementById('tiny').classList.remove('d-none')
  case highScore > 10:
    document.getElementById('adventurer').classList.remove('d-none')
  case highScore > 5:
    document.getElementById('lightning').classList.remove('d-none')
}
// powermode!
document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    app.playerController.powerMode()
  }
}