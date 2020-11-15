import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

import notif from '../assets/img/notif.png'

export default class Notif extends Component {
    render() {
        return (
            <View style={style.parent}>
                <Image source={notif} />
                <Text style={style.text}>No notification yet</Text>
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
    text: {
        marginTop: 15,
    },
})