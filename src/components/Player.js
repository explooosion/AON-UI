import { h, app } from 'hyperapp'
import './Player.scss'

const Player = ({ props }) => {
  const { state, actions } = props
  return (
    <div>
      <h3 class="player-name">{state.name}</h3>
      <p>Testing Counter:{state.counter}<button type="button" onclick={() => actions.up()}>Send</button></p>
      <p>HeroName:{state.HeroName}</p>
      <p>CurrentMoveSpeed:{state.CurrentMoveSpeed}</p>
      <p>CurrentHP:{state.CurrentHP}</p>
      <p>CurrentAttackSpeed:{state.CurrentAttackSpeed}</p>
      <p>CurrentLevel:{state.CurrentLevel}</p>
      <p>CurrentAttack:{state.CurrentAttack}</p>
      <p>CurrentArmor:{state.CurrentArmor}</p>
      <p>CurrentAttackRange:{state.CurrentAttackRange}</p>
    </div>
  )
}

export default Player