import { EventEmitter } from "./Utils/EventEmitter.js"
import { getRandomColor } from "./Utils/generateColor.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  game = true
  level = 72
  moved = false
  position = null
  goal = null
  weapon = 1
  timer = 71
  points = 0
  powerMode = false
  enemy = { x: 50, y: 50 }
  player = { x: 0, y: 0 }
  enemySpeed = 54
  enemies = []
  blocks = []
  safeBlockColor = JSON.parse(window.localStorage.getItem("safeBlockColor")) ?? '#008000'//'transparent'
  deadlyBlockColor = JSON.parse(window.localStorage.getItem("deadlyBlockColor")) ?? '#ff0000'//getRandomColor()
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
