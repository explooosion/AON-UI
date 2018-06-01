import { h, app } from 'hyperapp'
import './Status.scss'

const Status = ({ props }) => {
  const { state, actions } = props
  return (
    <div class="status">
      Loading: <span>{state.progress}%</span>
    </div>
  )
}

export default Status