import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"
export class Block {
  constructor() {
    this.id = generateId()
    this.good = (Math.random() * 3) > 1
    this.goal = false
    this.current = false
  }

  determineAlignment() {
    this.good = Math.random() * 3 > 1
  }
  get SafeTemplate() {
    return `<div id="block${this.id}" class="col-1 p-0 p--1">
    <div class="block" style="background-color: ${ProxyState.safeBlockColor}" onmouseover="app.blockController.changePosition('${this.id}')">
    </div >
  </div >
      `
  }
  get DeadlyTemplate() {
    return `<div id="block${this.id}" class="block col-1 p-0 p--1" >
      <div class="block" style="background-color: ${ProxyState.deadlyBlockColor}" onmouseover="app.playerController.handleHit('${this.id}')">
      </div>
  </div >
      `
  }
  get GoldTemplate() {
    return `<div id="block${this.id}" class="block col-1 p-0 p--1" >
    <div class="block" style="border: 1px solid gold; background-color: gold" onmouseover="app.gameController.score()">
    </div>
    </div>`
  }
  get CurrentTemplate() {
    return `<div id="block${this.id}" class="col-1 p-0 p--1">
    <div class="block" style="border: 1px solid white">
    </div>
  </div>`
  }
}
