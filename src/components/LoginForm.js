import React from 'react'
import { Card, CardItem, Input, Btn, Spinner } from './common'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { inputChanged, passwordChanged, login } from '../actions'

class LoginForm extends React.Component {
  onInputChange(text) {
    this.props.inputChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onButton() {
    const { email, password } = this.props.auth
    const cb = () => this.props.navigation.navigate('EmployeeList').bind(this)

    this.props.login(email, password , cb)

  }

  onError() {
    console.log(this.props.auth.error)
    if(this.props.auth.error) {
      return (
        <View>
          <Text style={styles.errorStyle}>
            {this.props.auth.error}
          </Text>
        </View>
      )
    }
  }

  renderButton() {
    if(this.props.auth.loading){
      return <Spinner size="large" />
    }
    return <Btn onPress={this.onButton.bind(this)}>log in</Btn>
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Input
            onChangeText={this.onInputChange.bind(this)}
            label="email"
            placeholder="user@email.com"
            value={this.props.auth.email}
          />
        </CardItem>

        <CardItem>
          <Input
            secureTextEntry
            label="password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.auth.password}
          />
        </CardItem>

        {this.onError()}

        <CardItem>
          {this.renderButton()}
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  errorStyle: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 18
  }
})

const mapStateToProps = state => {

  return { auth: state.auth }
}

// const mapDispatchToProps = dispatch => {
//   return { input: text => dispatch(inputChanged(text)),
//            password: text => dispatch(passwordChanged(text)),
//            logIn: (email, password) => dispatch(login(email, password))
//   }
// }

export default connect(mapStateToProps, { inputChanged, passwordChanged, login })(LoginForm)
