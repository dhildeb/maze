import { ProxyState } from "../AppState.js"
import { gameService } from '../Services/GameService.js'
export class GameController {
  constructor() {
    ProxyState.on('game', _endGame)
    ProxyState.on('weapon', _start)
    ProxyState.on('points', _updatePoints)
    ProxyState.on('powerMode', _activatePowerMode)
  }
  gameOver() {
    return gameService.gameOver()
  }
  restart() {
    gameService.restart()
  }
  score() {
    gameService.score()
  }
  start(num) {
    gameService.start(num)
  }
  powerMode() {
    gameService.powerMode()
  }
}

function _endGame() {
  document.getElementById('board').innerHTML = `<h1 class='text-danger text-center'>Game Over<h1>
  <p class='p-5'>Score: ${ProxyState.level - 72}</p>
  <p class='restart text-center' onclick='app.gameController.restart()'>Restart</p>
  `
}
function _start() {
  let weapon = 'arrow'
  switch (ProxyState.weapon) {
    case 1:
      weapon = 'arrow'
      break
    case 2:
      weapon = 'pointer'
      break
    case 3:
      weapon = 'url(assets/img/cur1.gif) 40 35,auto;'
      break
    case 4:
      weapon = 'url(assets/img/cur22.gif) 30 29,auto;'
      break
    case 5:
      weapon = 'url(assets/img/gam880.gif) 30 31,auto;'
      break
    case 6:
      weapon = 'url(assets/img/gam1416.png) 62 31,auto;'
      break
    case 7:
      weapon = 'none'
      break
  }
  let sheet = document.createElement('style')
  sheet.innerHTML = `body {cursor: ${weapon}}`
  document.body.appendChild(sheet)
  ProxyState.level = ProxyState.level
}

function _updatePoints() {
  document.getElementById('points').innerHTML = ProxyState.points
}
function _activatePowerMode() {
  if (ProxyState.powerMode) {
    document.body.classList.add('power-mode')
  } else {
    document.body.classList.remove('power-mode')
  }
}