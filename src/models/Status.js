import { h } from 'hyperapp'

const Status = {
  state: {
    progress: 0,
  },
  actions: {
    update: val => state => ({ progress: val }),
  }
}

export default Status