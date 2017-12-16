import React from 'react'
import { Picker, Text, StyleSheet } from 'react-native'
import { Card, CardItem, Btn, Input } from './common'
import { connect } from 'react-redux'
import { employeeCreate } from '../actions/EmployeeActions'

class CreateEmployee extends React.Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Input
            label="name"
            placeholder="john doe"
            value={this.props.employee.name}
            onChangeText={ value => this.props.employeeCreate({ prop: 'name', value }) }
          />
        </CardItem>

        <CardItem>
          <Input
            label="number"
            placeholder="555-555-5555"
            value={this.props.employee.phone}
            onChangeText={ value => this.props.employeeCreate({ prop: 'phone', value })}
          />
        </CardItem>

        <CardItem style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextstyle}>shift</Text>
          <Picker
            selectedValue={this.props.employee.shift}
            onValueChange={ value => this.props.employeeCreate({ props: 'shift', value })}
          >
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wednesday' value='Wednesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
            <Picker.Item label='Saturday' value='Saturday' />
            <Picker.Item label='Sunday' value='Sunday' />
          </Picker>
        </CardItem>

        <CardItem>
          <Btn>create</Btn>
        </CardItem>

      </Card>
    )
  }
}

const styles = StyleSheet.create({
  pickerTextstyle: {
    fontSize: 18,
    paddingLeft: 20,
    marginTop: 10
  }
})

const mapStateToProps = ({employee}) => {
  console.log({employee})
  return { employee }
}

export default connect(mapStateToProps, { employeeCreate })(CreateEmployee)
