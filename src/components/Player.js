import { h, app } from 'hyperapp'
import './Player.scss'

const Player = ({ props }) => (
  <div>
    {console.log(props)}
    <h3 class="player-name">{props.name}</h3>
  </div>
)

export default Player