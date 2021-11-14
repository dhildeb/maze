import { BlockController } from "./Controllers/BlockController.js";
import { GameController } from "./Controllers/GameController.js";
class App {
  blockController = new BlockController()
  gameController = new GameController()
}

window["app"] = new App();
$(document).mouseleave(() => {
  app.gameController.gameOver()
})
