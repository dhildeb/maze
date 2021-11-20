import { ProxyState } from "../AppState.js"
import { getColor } from "../Utils/generateColor.js"
import { blockService } from '../Services/BlockService.js'
export class BlockController {
  constructor() {
    ProxyState.on('moved', _change)
    ProxyState.on('level', _draw)
  }
  changePosition(pos) {
    blockService.changePosition(pos)
  }
}

function _draw() {
  let template = ''

  for (let i = 0; i < ProxyState.level; i++) {
    let id = 'block' + (i + 1)

    if (id === ProxyState.position) {
      template += `
      <div id="block${i + 1}" class="col-1 p-0 p--1">
        <div class="block" style="border: 1px solid white">
        </div>
      </div>
      `
      continue
    }

    let color = getColor()
    template += `
    <div id="block${i + 1}" class="col-1 p-0 p--1">
      <div class="block" style="background-color: ${color}" onmouseover="app.${color === 'green' ? 'blockController.changePosition' : 'playerController.handleHit'}('block${i + 1}')">
      </div>
    </div>
    `
  }
  document.getElementById('board').innerHTML = template
  _drawGoal()
}

function _change() {
  let template = ''
  let id = ''
  let color = getColor()
  for (let i = 0; i < ProxyState.level; i++) {
    id = 'block' + (i + 1)
    if (ProxyState.position != id && ProxyState.goal != id) {
      color = getColor()
      template = `
        <div class="block" style="background-color: ${color}" onmouseover="app.${color === 'green' ? 'blockController.changePosition' : 'playerController.handleHit'}('${id}'); this.onmouseover = null;">
        </div>
        `
      document.getElementById(id).innerHTML = template
    }
  }
}

function _drawGoal() {
  let goal = Math.round(Math.random() * (ProxyState.level - 1)) + 1
  ProxyState.goal = 'block' + (goal)
  let template = `
      <div class="block" style="border: 1px solid gold; background-color: gold" onmouseover="app.gameController.score()">
      </div>
    `
  document.getElementById(ProxyState.goal).innerHTML = template
}