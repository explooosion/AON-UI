export default class UELib {

  constructor(actions) {

    this.actions = actions
    if (typeof this.actions === 'undefined') return

    this.ue4 = null

    if (typeof ue === 'object' && typeof ue.interface === 'object') {

      if (typeof ue.interface.broadcast !== 'function') return

      try {

        ue.interface = {}

        ue.interface.broadcast = (name, data) => {
          if (typeof data !== 'undefined')
            ue.interface.broadcast(name, JSON.stringify(data))
          else
            ue.interface.broadcast(name, '')
        }

        this.ue4 = ue.interface.broadcast

        ue.interface.setFPS = (fps) => {
          this.FPS = fps.toFixed(1)
        }

        // simple way
        ue.interface.setCurrentHero = actions.player.update
        ue.interface.setProgress = actions.status.update

        // or bind event
        // ue.interface.setProgress = this.setProgress.bind(this)
        // ue.interface.hideProgress = this.hideProgress.bind(this)
        // ue.interface.setCurrentHero = this.setCurrentHero.bind(this)

      } catch (e) { alert(e) }

    } // end if

  }

  // setCurrentHero(val) {
  //   this.actions.player.update(val)
  // }

}