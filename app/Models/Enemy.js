import { getRandomColor } from '../Utils/generateColor.js'
import { generateId } from "../Utils/generateId.js"
export class Enemy {
  constructor() {
    this.id = generateId()
    this.color = getRandomColor()
    this.positionX = Math.random() * 500
    this.positiony = Math.random() * 500
    this.dirX = Math.random() * 2 > 1
    this.dirY = Math.random() * 2 < 1
  }
  setDirX(dir) {
    this.dirX = dir
  }
  setDirY(dir) {
    this.dirY = dir
  }
  getPosition() {
    return { x: this.positionX, y: this.positiony }
  }
  setPosition(x, y) {
    this.positionX = x
    this.positiony = y
  }
  get Template() {
    return `<div class='enemy' style='left: ${this.positionX}px; top: ${this.positiony}px; background-color: ${this.color}' onmouseover="app.enemyController.battle('${this.id}')"></div>`
  }
}
