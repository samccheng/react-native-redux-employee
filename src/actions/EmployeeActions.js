import { EMPLOYEE_CREATE } from './types'

export const employeeCreate = ({prop, value}) => {
  return {
    type: EMPLOYEE_CREATE,
    payload: { prop, value }
  }
}
