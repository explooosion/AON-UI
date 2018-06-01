import './index.scss'
import { h, app } from 'hyperapp'
import { state, actions } from './models/index'
import UELib from './plugin/UELib'

// import components
import Player from './components/Player'
import Status from './components/Status'

const view = (state, actions) => {

  // create ue4 event emitter and handler
  const uelib = new UELib(actions)

  // connect models
  const connect = model => ({
    state: state[model],
    actions: actions[model],
  })

  return (
    <div>
      <h1>Hello AON UI - Testing</h1>
      <Player props={connect('player')} />
      <Status props={connect('status')} />
    </div>
  )
}

const main = app(state, actions, view, document.body)
