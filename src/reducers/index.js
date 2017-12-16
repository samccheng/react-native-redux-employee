import { combineReducers } from 'redux'
import authReducer from './authReducer'
import employeeFormReducer from './employeeFormReducer'

const reducer = combineReducers({
  auth: authReducer,
  employee: employeeFormReducer
})

export default reducer
