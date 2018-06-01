import './index.scss'
import { h, app } from 'hyperapp'
import { state, actions } from './models/index'
import UnrealAPI from './plugin/UnrealAPI'

// import components
import Player from './components/Player'
import Status from './components/Status'

let unrealapi

const view = (state, actions) => {

  // create ue4 event emitter and handler
  unrealapi = new UnrealAPI(actions)

  // connect models
  const connect = model => ({
    state: state[model],
    actions: actions[model],
    ueapi: unrealapi,
  })

  return (
    <div>
      <Player props={connect('player')} />
      <Status props={connect('status')} />
    </div>
  )
}

const main = app(state, actions, view, document.body)
