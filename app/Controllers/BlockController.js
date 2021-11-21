import { ProxyState } from "../AppState.js"
import { blockService } from '../Services/BlockService.js'
export class BlockController {
  constructor() {
    ProxyState.on('blocks', _drawBoard)
  }
  changePosition(pos) {
    blockService.changePosition(pos)
  }
}
function _drawBoard() {
  let template = ''
  ProxyState.blocks.forEach(b => {

    if (b.goal) {
      template += b.GoldTemplate
    } else if (b.current) {
      template += b.CurrentTemplate
    }
    else if (b.good) {
      template += b.SafeTemplate
    }
    else if (!b.good) {
      template += b.DeadlyTemplate
    }
  })
  document.getElementById('board').innerHTML = template
}
