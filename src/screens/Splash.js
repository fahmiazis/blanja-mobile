import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

import logo from '../assets/img/logo.png'

export default class Splash extends Component {
    render() {
        return (
            <View style={style.parent}>
                <Image source={logo} />
            </View>
        )
    }
}

const style = StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})