import { h, app } from 'hyperapp'
import './Player.scss'

const Player = props => (state, actions) => {

  const player = { state: state.player, actions: actions.player }

  return (
    <div>
      <h3 class="player-name">{player.state.name}</h3>
      <p>Testing Counter:{player.state.counter}<button type="button" onclick={() => player.actions.up()}>Send</button></p>
      <p>HeroName:{player.state.HeroName}</p>
      <p>CurrentMoveSpeed:{player.state.CurrentMoveSpeed}</p>
      <p>CurrentHP:{player.state.CurrentHP}</p>
      <p>CurrentAttackSpeed:{player.state.CurrentAttackSpeed}</p>
      <p>CurrentLevel:{player.state.CurrentLevel}</p>
      <p>CurrentAttack:{player.state.CurrentAttack}</p>
      <p>CurrentArmor:{player.state.CurrentArmor}</p>
      <p>CurrentAttackRange:{player.state.CurrentAttackRange}</p>
    </div>
  )
}

export default Player