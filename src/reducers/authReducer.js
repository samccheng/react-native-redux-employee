import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN } from '../actions/types'

const initial = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
}


export default (state=initial, action) => {
  switch(action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    case LOGIN_SUCCESS:
      return { ...state, ...initial, user: action.payload }
    case LOGIN_FAIL:
      return { ...state, error: 'authentication failed', loading: false, password: '' }
    case LOGIN:
      return { ...state, loading: true, error: '' }
    default:
      return state
  }
}
