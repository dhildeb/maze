import { ProxyState } from "../AppState.js"
import { playerService } from "../Services/PlayerService.js"

export class PlayerController {
  constructor() {
    ProxyState.on('powerMode', _activatePowerMode)
  }
  handleHit() {
    playerService.handleHit()
  }
  powerMode() {
    playerService.powerMode()
  }
}
function _activatePowerMode() {
  if (ProxyState.powerMode) {
    document.body.classList.add('power-mode')
  } else {
    document.body.classList.remove('power-mode')
  }
}