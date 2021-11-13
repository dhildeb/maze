import { ProxyState } from "../AppState.js"
import { getColor } from "../Utils/generateColor.js"
import { blockService } from '../Services/BlockService.js'
export class BlockController {
  constructor() {
    ProxyState.on('position', _change)
    ProxyState.on('game', _endGame)
    _draw()
  }
  changePosition(pos) {
    console.log(pos)
    blockService.changePosition(pos)
  }
  gameOver() {
    blockService.gameOver()
  }
}

function _draw() {
  let template = ''
  for (let i = 0; i < ProxyState.level; i++) {
    let color = getColor()
    template += `
    <div id="block${i + 1}" class="col-1 p-0 p--1">
      <div class="block" style="border: 1px solid ${color}" onmouseover="app.blockController.changePosition('block${i + 1}')">
      </div>
    </div>
    `
  }
  document.getElementById('board').innerHTML = template
}

function _change() {
  let template = ''
  let id = ''
  let color = getColor()
  for (let i = 0; i < ProxyState.level; i++) {
    id = 'block' + (i + 1)
    console.log(id)
    if (ProxyState.position != id) {
      color = getColor()
      template = `
        <div class="block" style="border: 1px solid ${color}" onmouseover="app.blockController.${color === 'green' ? 'changePosition' : 'gameOver'}('${id}'); this.onmouseover = null;">
        </div>
        `
      document.getElementById(id).innerHTML = template
    }
  }
}
function _endGame() {
  document.getElementById('board').innerHTML = '<h1>Game Over<h1>'
}