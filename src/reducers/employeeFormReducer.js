import { EMPLOYEE_CREATE } from '../actions/types'

const initial = {
  name: '',
  phone: '',
  shift: ''
}

export default (state = initial, action) => {
  switch(action.type) {
    case EMPLOYEE_CREATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state
  }
}
