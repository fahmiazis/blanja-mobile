import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

export default class ProfileOrder extends Component {
    render() {
        return (
            <View style={style.parent}>
                <ScrollView>
                <Text style={style.title}>My Orders</Text>
                <View style={style.card}>
                    <View style={style.bodyCard}>
                        <Text style={style.textOrder}>Order No 1947034</Text>
                        <Text style={[style.text]}>05-12-2019</Text>
                    </View>
                    <View>
                        <Text style={style.text}>Tracking number: <Text style={style.num}>IWS23143413455</Text></Text>
                        <Text style={style.text}>quantity: <Text style={style.num}>3</Text></Text>
                        <Text style={style.text}>Total amount: <Text style={style.num}>Rp50000</Text></Text>
                    </View>
                    <View style={style.deliver}>
                        <Text style={style.textDeliv}>Delivered</Text>
                    </View>
                </View>
                <View style={style.card}>
                    <View style={style.bodyCard}>
                        <Text style={style.textOrder}>Order No 1947034</Text>
                        <Text style={[style.text]}>05-12-2019</Text>
                    </View>
                    <View>
                        <Text style={style.text}>Tracking number: <Text style={style.num}>IWS23143413455</Text></Text>
                        <Text style={style.text}>quantity: <Text style={style.num}>3</Text></Text>
                        <Text style={style.text}>Total amount: <Text style={style.num}>Rp50000</Text></Text>
                    </View>
                    <View style={style.deliver}>
                        <Text style={style.textDeliv}>Delivered</Text>
                    </View>
                </View>
                </ScrollView>
            </View>
        )
    }
}

const style = StyleSheet.create({
    parent: {
        flex: 1,
        marginHorizontal: "5%",
    },
    title: {
        fontSize: 30,
        marginTop: 20,
        marginBottom: 30,
    },
    card: {
        borderRadius: 10,
        elevation:2,
        padding: 20,
        marginBottom: 10,
        backgroundColor: "rgb(255,255,255)"
    },
    bodyCard: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        color: "rgb(164,164,164)",
    },
    textOrder: {
        fontWeight: 'bold',
    },
    date: {
        marginLeft: "50%"
    },
    num: {
        color: "rgb(0,0,0)"
    },
    deliver: {
        flexDirection: "row-reverse",
    },
    textDeliv: {
        color: "rgb(92,142,113)",
    }
})