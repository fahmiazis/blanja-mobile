import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, 
    ScrollView, TouchableOpacity } from 'react-native'
import { Button, Footer } from 'native-base'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'

import block1 from '../assets/img/block1.png'

import {connect} from 'react-redux'
import cart from '../redux/actions/cart'
import checkout from '../redux/actions/checkout'

class Cart extends Component {
    constructor(props){
        super(props);
    }
    
    state = {
        count: 1,
    }

    componentDidMount(){
        this.props.getCart(this.props.auth.token)
        this.props.getCheckout(this.props.auth.token)
    }

    delete = async (id) => {
        await this.props.deleteCart(this.props.auth.token, id)
        this.props.getCart(this.props.auth.token)
        this.props.getCheckout(this.props.auth.token)
    }

    render() {
        const { data, isLoading, isError } = this.props.cart
        const { order, alertMsg } = this.props.checkout
        return (
            <View style={style.parent}>
                <ScrollView>
                <Text style={style.title}>My Bag</Text>
                {isLoading && isError ? (
                    <View style={[style.error, style.parent]}>
                        <Text style={style.textError}>You have no items</Text>
                    </View>
                ) : (data.map(item => {
                    return(
                    <View style={style.body}>
                            <View style={style.card}>
                                <Image style={style.img} source={{uri: `http://54.147.40.208:7070/${item.url}`}}/>
                                <View style={style.sideCard}>
                                    <View style={style.cardHead1}>
                                        <Text style={style.textName} name="name">{item.product}</Text>
                                        <TouchableOpacity  onPress={() => this.delete(item.id)}>
                                            <Icon2 style={style.iconCard} name="trash" size={17} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={style.cardHead}>
                                        <Text style={style.textColor} name="color">Color: <Text style={style.textChoose}>-</Text></Text>
                                        <Text style={style.textSize} name="color">Size: <Text style={style.textChoose}>-</Text></Text>
                                    </View>
                                    <View style={style.cardCount}>
                                        <View style={style.cardbtn}>
                                            <Button style={style.btnMin}><Icon style={style.iconMin} name="minus" size={30} /></Button>
                                            <Text style={style.count}>{item.quantity}</Text>
                                            <Button style={style.btnMin}><Icon style={style.iconMin} name="plus" size={30} /></Button>
                                        </View>
                                        <Text name="price" style={style.price}>Rp{item.total_price}</Text>
                                    </View>
                                </View>
                            </View>
                    </View>
                    )}))
                    }
                </ScrollView>
                <Footer style={style.footer}>
                    <View style={style.cardHead2}>
                        <Text style={style.textColor2}>Total amount:</Text>
                        <Text style={style.price2}>Rp{alertMsg === 'Data not found' ? 0 : order}</Text>
                    </View>
                    <Button block style={style.btnFooter} large onPress={() => this.props.navigation.navigate('Checkout')}>
                        <Text style={style.textFooter}>
                        CHECKOUT
                        </Text>
                    </Button>
            </Footer>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    cart: state.cart,
    checkout: state.checkout
  })
  
  const mapDispatchToProps = {
    getCart: cart.getCart,
    deleteCart: cart.deleteCart,
    getCheckout: checkout.getCheckout
  }

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

const style = StyleSheet.create({
    parent: {
        flex: 1,
    },
    textError: {
        fontSize: 30,
        textAlign: "center",
        marginTop: "40%"
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
        width: 290
    },
    img: {
        height: 120,
        width: 120,
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
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "baseline",
    },
    cardHead1: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between"
    },
    cardHead2: {
        flexDirection: "row",
        alignItems: "baseline",
        marginBottom: 20,
        marginTop: 10,
        justifyContent: "space-between"
    },
    iconCard: {
        color: "rgb(219,48,34)",
        alignSelf: "flex-end",
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
    cardCount: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        justifyContent: 'space-between'
    },
    count: {
      marginHorizontal: 10,
      fontSize: 17, 
    },
    price: {
        color: "rgb(219,48,34)",
    },
    price2: {
        color: "rgb(219,48,34)",
        marginRight: "5%"
    },
    footer: {
        backgroundColor: "rgb(255,255,255)",
        borderRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius:0,
        padding: "2%",
        height: 150,
        flexDirection: "column",
        color: "rgb(249,249,249)"
    },
    btnFooter: {
        borderRadius: 30,
        backgroundColor: "rgb(219,48,34)",
        marginHorizontal: "3%",
        marginBottom: 30,
    },
    textFooter: {
        color: "rgb(255,255,255)",
        fontSize: 20
    },
    textColor2: {
        color: "rgb(164,164,164)",
        marginLeft: "5%",
    },
    modal: {
        margin: 20,
        backgroundColor: "white",
        width: 120,
        borderRadius: 10,
        elevation: 1,
        flexDirection: "row",
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        position: "relative",
        shadowOffset: {
        width: 0,
        height: 2
        },
        alignSelf: "flex-end",
        marginRight: 30,
        marginTop: "40%"
    },
    close: {
        marginRight: 10
    },
})