import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Button } from 'native-base'

import Icon from 'react-native-vector-icons/SimpleLineIcons'

import block1 from '../assets/img/block1.png'

class Cart extends Component {
    render() {
        return (
            <View>
                <Text style={style.title}>My Bag</Text>
                <View style={style.body}>
                        <View style={style.card}>
                            <Image style={style.img} source={block1}/>
                            <View style={style.sideCard}>
                                <View style={style.cardHead}>
                                    <Text style={style.textName} name="name">Baju Kuning</Text>
                                    <Icon style={style.iconCard} name="options-vertical" size={20} />
                                </View>
                                <View style={style.cardHead}>
                                    <Text style={style.textColor} name="color">Color: <Text style={style.textChoose}>Black</Text></Text>
                                    <Text style={style.textSize} name="color">Size: <Text style={style.textChoose}>L</Text></Text>
                                </View>
                                <View style={style.cardbtn}>
                                    <View style={style.cardbtn}>
                                        <Button style={style.btnMin}><Icon style={style.iconMin} name="minus" size={30} /></Button>
                                        <Text style={style.count}>1</Text>
                                        <Button style={style.btnMin}><Icon style={style.iconMin} name="plus" size={30} /></Button>
                                    </View>
                                    <Text name="price" style={style.price}>Rp50.000</Text>
                                </View>
                            </View>
                        </View>
                </View>
                <View style={style.body}>
                        <View style={style.card}>
                            <Image style={style.img} source={block1}/>
                            <View style={style.sideCard}>
                                <View style={style.cardHead}>
                                    <Text style={style.textName} name="name">Baju Kuning</Text>
                                    <Icon style={style.iconCard} name="options-vertical" size={20} />
                                </View>
                                <View style={style.cardHead}>
                                    <Text style={style.textColor} name="color">Color: <Text style={style.textChoose}>Black</Text></Text>
                                    <Text style={style.textSize} name="size">Size: <Text style={style.textChoose}>L</Text></Text>
                                </View>
                                <View style={style.cardbtn}>
                                    <View style={style.cardbtn}>
                                        <Button style={style.btnMin}><Icon style={style.iconMin} name="minus" size={30} /></Button>
                                        <Text style={style.count}>1</Text>
                                        <Button style={style.btnMin}><Icon style={style.iconMin} name="plus" size={30} /></Button>
                                    </View>
                                    <Text name="price" style={style.price}>Rp50.000</Text>
                                </View>
                            </View>
                        </View>
                </View>
                <View style={style.footer}>
                    <View style={style.cardHead2}>
                        <Text style={style.textColor2}>Total amount:</Text>
                        <Text style={style.price2}>Rp50.000</Text>
                    </View>
                    <Button onPress={() => this.props.navigation.navigate('Checkout')} block style={style.btnFooter} large><Text style={style.textFooter}>CHECK OUT</Text></Button>
                </View>
            </View>
        )
    }
}

export default Cart

const style = StyleSheet.create({
    parent: {
        flex: 1,
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: "5%",
    },
    card: {
        flexDirection: "row",
    },
    textName: {
        // marginBottom: 5,
        fontSize: 20,
        fontWeight: "bold",
    },
    textColor: {
        color: "rgb(164,164,164)",
    },
    textColor2: {
        color: "rgb(164,164,164)",
        marginLeft: "5%",
    },
    textSize: {
        color: "rgb(164,164,164)",
        marginLeft: 10,
    },
    textChoose: {
        color: "rgb(0,0,0)",
    },
    sideCard: {
        marginLeft: 10,
    },
    img: {
        height: 100,
        resizeMode: "cover",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    body: {
        marginTop: 30,
        borderRadius: 10,
        marginHorizontal: "5%",
        backgroundColor: "rgb(255,255,255)",
        elevation: 3,
    },
    cardHead: {
        flexDirection: "row",
        alignItems: "baseline",
    },
    cardHead2: {
        flexDirection: "row",
        alignItems: "baseline",
        marginBottom: 20,
        marginTop: 10,
    },
    iconCard: {
        color: "rgb(164,164,164)",
        alignSelf: "flex-end",
        marginLeft: "43%",
    },
    btnMin: {
        height: 30,
        borderRadius: 30,
        backgroundColor: "rgb(255,255,255)",
    },
    iconMin: {
        color: "rgb(164,164,164)",
    },
    cardbtn: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    count: {
      marginHorizontal: 10,
      fontSize: 17, 
    },
    price: {
        color: "rgb(219,48,34)",
        marginLeft: "33%",
    },
    price2: {
        color: "rgb(219,48,34)",
        marginLeft: "55%",
    },
    footer: {
        width: "100%",
        marginTop: "132%",
        backgroundColor: "rgb(255,255,255)",
        borderRadius: 20,
        position: "absolute",
    },
    btnFooter: {
        borderRadius: 30,
        backgroundColor: "rgb(219,48,34)",
        marginHorizontal: "5%",
        marginBottom: 40,
    },
    textFooter: {
        color: "rgb(255,255,255)",
        fontSize: 20
    },
})