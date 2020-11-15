import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Input, Item, Button, Form} from 'native-base'

import {connect} from 'react-redux'

import {login} from '../redux/actions/auth'

class Forgot extends Component {
    state = {
        email: '',
    }
    login = ()=>{
        const {email} = this.state
        this.props.login(email)
    }
    render() {
        return (
            <View style={style.parent}>
                <View style={style.form}>
                    <View>
                        <Text style={style.titleText}>Forgot password</Text>
                    </View>
                    <Form>
                       <Text style={style.input}>Please, enter your email address. You will receive a link to create a new password via email</Text>
                        <Item style={style.inputPassword}>
                            <Input onChangeText={email=>this.setState({email})} placeholder="Email" secureTextEntry />
                        </Item>
                        <Button onPress={this.login} style={style.btn} block>
                            <Text style={style.btntext}>send</Text>
                        </Button>
                    </Form>
                </View>
            </View>        
        );
    }
}

const style = StyleSheet.create({
  parent: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "rgb(249,249,249)",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 120,
    marginTop: 30,
  },
  form: {
      color: "black",
      width: "90%",
  },
  input: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  inputPassword: {
    marginBottom: 30,
    borderRadius: 5,
    backgroundColor: "white",
    elevation: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  btn: {
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: "rgb(219,48,34)",
  },
  btntext: {
    fontSize: 19,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
})

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Forgot);