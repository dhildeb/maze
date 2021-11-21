import { ProxyState } from "../AppState.js";
import { Block } from "../Models/Block.js";

class BlockService {

  changePosition(pos) {
    ProxyState.blocks.forEach(b => b.id == pos ? b.current = true : b.current = false)
    this.changeBoard()
  }
  changeBoard() {
    ProxyState.blocks.forEach(b => {
      if (!b.current && !b.goal) {
        b.determineAlignment()
      }
    })
    ProxyState.blocks = ProxyState.blocks
  }

  handleBlockCount() {
    if (ProxyState.level > ProxyState.blocks.length) {
      ProxyState.blocks = [...ProxyState.blocks, new Block]
      this.handleBlockCount()
    }
  }
  setGoal() {
    let newGoal = Math.floor(Math.random() * ProxyState.blocks.length)
    ProxyState.blocks.forEach((b, i) => {
      b.goal ? b.good = true : ''
      i == newGoal ? b.goal = true : b.goal = false
    })
    ProxyState.blocks = ProxyState.blocks
  }

}

export const blockService = new BlockService()