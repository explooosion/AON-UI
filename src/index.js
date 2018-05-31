import './index.scss'
import { h, app } from 'hyperapp'
import { state, actions } from './models/index'

// import components
import Player from './components/Player'

const view = (state, actions) => (
  <div>
    <h1>Hello AON UI</h1>
    <Player />
  </div>
)

const main = app(state, actions, view, document.body)
