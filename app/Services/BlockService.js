import { ProxyState } from "../AppState.js";

class BlockService {

  changePosition(pos) {
    ProxyState.position = pos
    ProxyState.moved = true
  }

}

export const blockService = new BlockService()