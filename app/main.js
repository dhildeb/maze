import { BlockController } from "./Controllers/BlockController.js";

class App {
  blockController = new BlockController
}

window["app"] = new App();
