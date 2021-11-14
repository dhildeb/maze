import { ProxyState } from "../AppState.js"
import { gameService } from '../Services/GameService.js'
export class GameController {
  constructor() {
    ProxyState.on('game', _endGame)
  }
  gameOver() {
    gameService.gameOver()
  }
  restart() {
    gameService.restart()
  }
  score() {
    gameService.score()
  }
}

function _endGame() {
  document.getElementById('board').innerHTML = `<h1 class='text-danger text-center'>Game Over<h1>
  <p class='p-5'>Score: ${ProxyState.level - 72}</p>
  <p class='restart text-center' onclick='app.gameController.restart()'>Restart</p>
  `

}