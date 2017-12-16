import firebase from 'firebase'
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from './types'

export const inputChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const login = (email, password, cb) => dispatch => {
  dispatch({ type: LOGIN })

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then( user => loginSuccess(dispatch, user, cb))
    .catch( () => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( user => loginSuccess(dispatch, user, cb))
      .catch(() => loginFail(dispatch))
    })
}

const loginSuccess = (dispatch, user, cb) => {
  dispatch({ type: LOGIN_SUCCESS, payload: user })
  cb()
}

const loginFail = (dispatch) => {
  dispatch({ type: LOGIN_FAIL })
}
