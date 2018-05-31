import './index.scss'
import { h, app } from 'hyperapp'
import { state, actions } from './models/index'
import UELib from './plugin/UELib'

// import components
import Player from './components/Player'

const view = (state, actions) => {

  // create ue4 event emitter and handler
  const uelib = new UELib(actions)

  return (
    <div>
      <h1>Hello AON UI - Testing</h1>
      <Player props={(state.player, actions.player)} />
    </div>
  )
}

const main = app(state, actions, view, document.body)
