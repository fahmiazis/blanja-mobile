import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Input, Item, Button, Form} from 'native-base'

import {connect} from 'react-redux'

import address from '../redux/actions/address'

class Address extends Component {
    state = {
        addr_name: '',
        recipient: '',
        address: '',
        city: '',
        region: '',
        country: '',
        postal_code: '',
    }

    postAddress = () => {
        const {addr_name, recipient, address, city, region, country, postal_code} = this.state
        const data = {
            addr_name,
            recipient,
            address,
            city: city + ', ' + region + ', ' + country,
            postal_code
        }
        console.log(data)
        this.props.addAddress(this.props.auth.token, data)
        const {alertMsg} = this.props.address
        if (alertMsg === 'Success add address'){
            this.props.getAddress(this.props.auth.token)
            this.props.navigation.navigate('ProfileAddress')
        }
    }

    render() {
        return (
            <View style={style.parent}> 
                <View style={style.form}>
                    <Form>
                    {/* <Text style={style.inputNull}>We have sent an email containing a password reset inistruction to your email. Please check your email</Text> */}
                        <Item style={style.input}>
                            <Input onChangeText={addr_name=>this.setState({addr_name: addr_name, recipient: addr_name})} placeholder="Full Name" />
                        </Item>
                        <Item style={style.input}>
                            <Input onChangeText={address=>this.setState({address})} placeholder="Address" />
                        </Item>
                        <Item style={style.input}>
                            <Input onChangeText={city=>this.setState({city})} placeholder="City" />
                        </Item>
                        <Item style={style.input}>
                            <Input onChangeText={region=>this.setState({region})} placeholder="State/Province/Region" />
                        </Item>
                        <Item style={style.input}>
                            <Input onChangeText={postal_code=>this.setState({postal_code})} placeholder="Zip Code (Postal Code)" />
                        </Item>
                        <Item style={style.input}>
                            <Input onChangeText={country=>this.setState({country})} placeholder="Country" />
                        </Item>
                        <Button onPress={() => this.postAddress()} style={style.btn} block>
                            <Text style={style.btntext}>SAVE ADDRESS</Text>
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
    width: "100%",
    paddingRight: 10,
    marginTop: 20
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
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  btn: {
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: "rgb(219,48,34)",
      marginLeft: 10
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
    auth: state.auth,
    address: state.address
})

const mapDispatchToProps = {
    addAddress: address.addAddress,
    getAddress: address.getAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(Address);