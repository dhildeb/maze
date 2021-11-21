import { ProxyState } from "../AppState.js"
import { gameService } from "../Services/GameService.js"

export class SettingsController {
  displaySettings() {
    document.getElementById('settings').innerHTML = `
<div class="container text-light p-5">
  <form class="row flex-column px-5" onsubmit="app.settingsController.changeSettings(event)">
    <label for="safe">Safe Blocks Color</label>
    <input type="color" name="safe" id="safe" value='${ProxyState.safeBlockColor}'>
    <label for="safe">Deadly Blocks Color</label>
    <input type="color" name="deadly" id="deadly" value='${ProxyState.deadlyBlockColor}'>
    <input class="btn btn-primary mt-3" type="submit">
  </form>
</div>
`
    $('#settingsModal').modal('toggle')
  }
  changeSettings(event) {
    event.preventDefault()
    window.localStorage.setItem("safeBlockColor", JSON.stringify(event.target.safe.value))
    window.localStorage.setItem("deadlyBlockColor", JSON.stringify(event.target.deadly.value))
    gameService.restart()
  }
}