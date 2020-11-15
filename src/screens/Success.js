import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Button } from 'native-base'

import bag from '../assets/img/bags.png'

export default class Success extends Component {
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
