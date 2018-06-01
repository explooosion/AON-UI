import { h } from 'hyperapp'

import Player from './Player'
import Status from './Status'

/**
 * Add your models 
 * Ex. { namespace: model }
 */
const models = {
  player: Player,
  status: Status,
}

let state = {}

let actions = {}

/**
 * Compose other models
 * @param {Object} models 
 */
const compose = models => {
  Object.keys(models).forEach(namespace => {
    state[namespace] = models[namespace].state
    actions[namespace] = models[namespace].actions
  })
}

compose(models)

export {
  state, actions
}  