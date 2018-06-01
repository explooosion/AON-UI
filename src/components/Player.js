import { h, app } from 'hyperapp'
import './Player.scss'

const Player = ({ props }) => {
  const { state, actions, ue } = props
  return (
    <div class="player">
      <h3 class="player-name">{state.name}</h3>
      <p>Testing Counter:{state.counter}<button class="can-select" type="button" onclick={() => actions.up()}>Send</button></p>
      <p>HeroName:{state.HeroName}</p>
      <p>CurrentMoveSpeed:{state.CurrentMoveSpeed}</p>
      <p>CurrentHP:{state.CurrentHP}</p>
      <p>CurrentAttackSpeed:{state.CurrentAttackSpeed}</p>
      <p>CurrentLevel:{state.CurrentLevel}</p>
      <p>CurrentAttack:{state.CurrentAttack}</p>
      <p>CurrentArmor:{state.CurrentArmor}</p>
      <p>CurrentAttackRange:{state.CurrentAttackRange}</p>
      {state.skill.map(url => (
        <div class="skill-group can-select">
          <button class="skill-up can-select" type="button" onclick={e => actions.skillLevelUp(ue)}></button>
          <img class="skill-img" src={url} />
        </div>
      ))}
      {state.buff.map(url => (
        <img class="skill-img" src={url} />
      ))}
    </div>
  )
}

export default Player