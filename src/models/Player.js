import { h } from 'hyperapp'

const Player = {
  state: {
    name: 'AON test-man',
    counter: 0,
    HeroName: '',
    CurrentMoveSpeed: 0,
    CurrentHP: 0,
    CurrentAttackSpeed: 0,
    CurrentLevel: 0,
    CurrentAttack: 0,
    CurrentArmor: 0,
    CurrentAttackRange: 0,
  },
  actions: {
    update: val => state => ({
      HeroName: val.HeroName,
      CurrentMoveSpeed: val.CurrentMoveSpeed,
      CurrentHP: val.CurrentHP,
      CurrentAttackSpeed: Math.floor(val.CurrentAttackSpeed * 100),
      CurrentLevel: val.CurrentLevel,
      CurrentAttack: val.CurrentAttack,
      CurrentArmor: val.CurrentArmor,
      CurrentAttackRange: val.CurrentAttackRange,
    }),
    up: () => state => ({ counter: state.counter + 1 }),
  }
}

export default Player