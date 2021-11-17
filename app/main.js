import { ProxyState } from "./AppState.js";
import { BlockController } from "./Controllers/BlockController.js";
import { GameController } from "./Controllers/GameController.js";
class App {
  blockController = new BlockController()
  gameController = new GameController()
}

window["app"] = new App();
$(document).mouseleave(() => {
  if (ProxyState.moved) {
    app.gameController.gameOver()
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
document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    app.gameController.powerMode()
  }
}