import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Input, Item, Button, Form} from 'native-base'

import {connect} from 'react-redux'

import auth from '../redux/actions/auth'
import Icon from 'react-native-vector-icons/FontAwesome'

class Login extends Component {
    state = {
        email: '',
        password: '',
    }
    login = ()=>{
        const {email, password} = this.state
        const data = {
            email,
            password
        }
        console.log(data)
        this.props.login(data)
    }
    render() {
        return (
            <View style={style.parent}> 
                <View style={style.form}>
                    <View>
                        <Text style={style.titleText}>Login</Text>
                    </View>
                    <Form>
                    {/* <Text style={style.inputNull}>We have sent an email containing a password reset inistruction to your email. Please check your email</Text> */}
                        <Item style={style.input}>
                            <Input onChangeText={email=>this.setState({email})} placeholder="Email" />
                        </Item>
                        <Item style={style.inputPassword}>
                            <Input onChangeText={password=>this.setState({password})} placeholder="Password" secureTextEntry />
                        </Item>
                        <View style={style.textForgot}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                                <View style={style.textLink}>
                                    <Icon name="long-arrow-right" size={30} color="rgb(219,48,34)" />
                                    <Text style={style.text}>Forgot your password ?</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Button onPress={this.login} style={style.btn} block>
                            <Text style={style.btntext}>Login</Text>
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
  inputNull: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "white",
    elevation: 1,
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
  textForgot: {
    fontSize: 15,
    marginBottom: 25,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  textLink: {
      flexDirection: "row-reverse",
      alignItems: "center",
  },
  text: {
      marginRight: 5,
  }
})

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = {
    login: auth.login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);