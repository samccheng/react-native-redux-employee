import React from 'react'
import { StackNavigator } from 'react-navigation'
import LoginForm from './components/LoginForm'
import CreateEmployee from './components/CreateEmployee'
import EmployeeList from './components/EmployeeList'

const RootNavigator = StackNavigator({
  Home: {
    screen: LoginForm,
    navigationOptions: {
     headerTitle: 'Home'
   }
 },
  EmployeeList: {
    screen: EmployeeList
  },
  CreateEmployee: {
    screen: CreateEmployee,
    navigationOptions: {
      headerTitle: 'create employee'
    }
  }
})

export default RootNavigator
