import { h } from 'hyperapp'

const path_prefix = 'assets/'

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
    Skill_Amount: 0,
    Buff_Amount: 0,
    skill: ['./assets/skill/a02/a02_1.png', './assets/skill/a02/a02_2.png'],
    buff: ['./assets/buff/stun.png'],
  },
  actions: {
    reduce: fn => (state, actions) => fn(state, actions),
    up: () => state => ({ counter: state.counter + 1 }), // counter testing
    update: val => (state, actions) => {
      let _skill = []
      for (let i = 1; i <= val.Skill_Amount; ++i) {
        _skill.push(path_prefix + val['Skill' + i + '_Webpath'])
      }
      let _buff = []
      for (let i = 1; i <= val.Buff_Amount; ++i) {
        _buff.push(path_prefix + val['Buff' + i + '_Webpath'])
      }
      actions.reduce(state => ({
        HeroName: val.HeroName,
        CurrentMoveSpeed: val.CurrentMoveSpeed,
        CurrentHP: val.CurrentHP,
        CurrentAttackSpeed: Math.floor(val.CurrentAttackSpeed * 100),
        CurrentLevel: val.CurrentLevel,
        CurrentAttack: val.CurrentAttack,
        CurrentArmor: val.CurrentArmor,
        CurrentAttackRange: val.CurrentAttackRange,
        Skill_Amount: val.Skill_Amount,
        skill: _skill,
        buff: _buff,
      }))
    },
    skillLevelUp: e => {
      e.emit('skillupimg1', {})
    }
  }
}

export default Player