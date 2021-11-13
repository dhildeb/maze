import { ProxyState } from "../AppState.js";

class BlockService {

  changePosition(pos) {
    ProxyState.position = pos
  }
  gameOver() {
    ProxyState.game = false
  }
}

export const blockService = new BlockService()