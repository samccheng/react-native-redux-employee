import React from 'react'
import { View, Text } from 'react-native'
import { Btn } from './common'

class EmployeeList extends React.Component {
  static navigationOptions = ({navigation}) => {
    return  {
      title: 'Employee List',
      headerRight: <Btn onPress={() => navigation.navigate('CreateEmployee')}>add</Btn>
    }
  }

  render() {
    return (
      <View>
        <Text>employee list</Text>
      </View>
    )
  }
}

export default EmployeeList
