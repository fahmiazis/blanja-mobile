import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Input, Item, Header, Body, Left } from 'native-base'

export default class ProfileAddress extends Component {
    render() {
        return (
            <View style={style.parent1}>
            <Header style={style.header}>
                <Left />
                <Body><Text>Shipping Address</Text></Body>
            </Header>
            <View style={style.parent}>
                <Text style={style.textAddress}>Shipping Address</Text>
                <View style={style.bodyAddress}>
                    <View style={style.nameAddress}>
                        <Text style={style.name}>Jane Doe</Text>
                        <Text style={style.change}>Change</Text>
                    </View>
                    <Text style={style.street} name="street">3 Newbridge Court</Text>
                    <Text style={style.districk} name="districk">Chino hils, CA 91709, United States</Text>
                </View>
                <Button block bordered style={style.btn}><Text style={style.textbtn}>ADD NEW ADDRESS</Text></Button>
            </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    parent: {
        flex: 1,
        marginHorizontal: "5%",
    },
    parent1: {
        flex:1
    },
    bodyAddress: {
        backgroundColor: "rgb(255,255,255)",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingTop: 20,
        elevation: 2,
        marginBottom: 40,
    },
    textAddress: {
        marginTop: 40,
        marginBottom: 20,
        fontSize: 15,
        fontWeight: "bold",
    },
    nameAddress: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    name: {
        fontWeight: "bold",
    },
    change: {
        color: "rgb(219,48,34)",
    },
    districk: {
        marginBottom: 20,
    },
    btn: {
        borderRadius: 30,
        backgroundColor: "rgb(242,242,242)",
        borderColor: "rgb(0,0,0)"
    },
    textbtn: {
        fontSize: 20
    },
    input: {
    backgroundColor: "rgb(255,255,255)",
    marginBottom: 20,
    },
    header: {
        backgroundColor: "rgb(255,255,255)"
    }
})