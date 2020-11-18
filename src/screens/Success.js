import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Button } from 'native-base'

import bag from '../assets/img/bags.png'

import {connect} from 'react-redux'
import checkout from '../redux/actions/checkout'
import cart from '../redux/actions/cart'

class Success extends Component {
    
    componentDidMount(){
        this.props.getCart(this.props.auth.token)
        this.props.getCheckout(this.props.auth.token)
    }
    
    render() {
        return (
            <View style={style.parent}>
                <Image style={style.img} source={bag}/>
                <Text style={style.success}>Success !</Text>
                <Text style={style.text}>Your order will be delivered soon.</Text>
                <Text style={style.text}>Thank you for choosing our app</Text>
                <Button style={style.btn} large block onPress={() => this.props.navigation.navigate('Tabbed')}>
                    <Text style={style.textbtn}>
                        CONTINUE SHOPPING
                    </Text>
                </Button>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    checkout: state.checkout
  })
  
  const mapDispatchToProps = {
    getCheckout: checkout.getCheckout,
    getCart: cart.getCart
  }

export default connect(mapStateToProps, mapDispatchToProps)(Success)

const style = StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(255,255,255)"
    },
    img: {
        marginBottom: 30,
    },
    success: {
        fontWeight: "bold",
        fontSize: 40,
        marginBottom: 15,
    },
    btn: {
        marginTop: 170,
        backgroundColor: "rgb(219,48,34)",
        borderRadius: 30,
        marginHorizontal: "5%",  
    },
    textbtn: {
        color: "rgb(255,255,255)",
        fontSize: 20,
    },
    text: {
        fontSize: 15
    },
})
