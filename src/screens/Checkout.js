import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import { Button, CheckBox, Footer } from 'native-base'

import master from '../assets/img/master.png'
import gopay from '../assets/img/gopay.png'
import pos from '../assets/img/pos.png'

import {connect} from 'react-redux'
import checkout from '../redux/actions/checkout'

class Checkout extends Component {
    state = {
        checked: false,
        color: "rgb(164,164,164)",
        checked2: false,
        color2: "rgb(164,164,164)",
        checked3: false,
        color3: "rgb(164,164,164)",
        order: 0,
        delivery: 0,
        summary: 0,
        address: null
    }

    componentDidMount(){
        this.props.getCheckout(this.props.auth.token)
        const {address, delivery, order, summary} = this.props.checkout
        this.setState({order: order, delivery: delivery, summary: summary, address: address})
    }

    buy = async () => {
        await this.props.buy(this.props.auth.token)
        this.props.navigation.navigate('Success')
    }

    render() {
        const {address, delivery, order, summary} = this.state
        const {alertMsg} = this.props.checkout
        return (
            <View style={style.parent1}>
                <ScrollView>
            <View style={style.parent}>
                <Text style={style.textAddress}>Shipping Address</Text>
                {address !== null && address.map(item => {
                    return (
                <View style={style.bodyAddress}>
                    <View style={style.nameAddress}>
                        <Text style={style.name}>{item.recipient}</Text>
                        <Text style={style.change}>Change</Text>
                    </View>
                    <Text style={style.street} name="street">{item.address}</Text>
                    <Text style={style.districk} name="districk">{item.city},{item.postal_code}</Text>
                </View>
                )})}
                <View>
                    <Text style={style.textAddress}>Payment</Text>
                    <View style={style.bodypayment}>
                        <View style={style.payment}>
                            <View style={style.subPayment}>
                            <View style={style.cardPayment}><Image source={master}/></View>
                                <Text>Mastercard</Text>
                            </View>
                            <CheckBox
                            color={this.state.color} 
                            checked={this.state.checked} 
                            onLongPress={() => this.setState({checked: false, color: "rgb(164,164,164)"})} 
                            onPressIn={() => this.setState({checked: true, color: "rgb(218,48,18)"})} 
                             />
                        </View>
                        <View style={style.payment}>
                            <View style={style.subPayment}>
                                <View style={style.cardPayment}><Image source={pos}/></View>
                                <Text>Pos Indonesia</Text>
                            </View>
                            <CheckBox
                            color={this.state.color2} 
                            checked={this.state.checked2} 
                            onLongPress={() => this.setState({checked2: false, color2: "rgb(164,164,164)"})} 
                            onPressIn={() => this.setState({checked2: true, color2: "rgb(218,48,18)"})} 
                             />
                        </View>
                        <View style={style.payment}>
                            <View style={style.subPayment}>
                            <View style={style.cardPayment}><Image source={gopay}/></View>
                                <Text>Gopay</Text>
                            </View>
                            <CheckBox
                            color={this.state.color3} 
                            checked={this.state.checked3} 
                            onLongPress={() => this.setState({checked3: false, color3: "rgb(164,164,164)"})} 
                            onPressIn={() => this.setState({checked3: true, color3: "rgb(218,48,18)"})} 
                             />
                        </View>
                    </View>
                </View>
            </View>
            </ScrollView>
            <Footer style={style.footer}>
                    <View style={style.cardHead2}>
                        <Text style={style.textColor2}>Order:</Text>
                        <Text style={style.price1}>Rp{alertMsg === 'Data not found' ? 0 : order}</Text>
                    </View>
                    <View style={style.cardHead2}>
                        <Text style={style.textColor2}>Delivery:</Text>
                        <Text style={style.price1}>Rp{alertMsg === 'Data not found' ? 0 : delivery}</Text>
                    </View>
                    <View style={style.cardHead2}>
                        <Text style={style.textColor2}>Summary:</Text>
                        <Text style={style.price1}>Rp{alertMsg === 'Data not found' ? 0 : summary}</Text>
                    </View>
                    <Button block style={style.btnFooter} large onPress={() => this.buy()}>
                        <Text style={style.textFooter}>
                        SUBMIT ORDER
                        </Text>
                    </Button>
            </Footer>
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
    buy: checkout.buy
  }

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)


const style = StyleSheet.create({
    parent: {
        flex: 1,
        marginHorizontal: "5%",
    },
    parent1: {
        flex: 1,
    },
    payment: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    bodypayment: {
        paddingRight: "5%"
    },
    subPayment: {
        flexDirection: "row",
        alignItems: "center",
    },
    cardPayment: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: 70,
        height: 40,
        padding: 10,
        backgroundColor: "rgb(255,255,255)",
        marginRight: 20,
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
    cardHead2: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
        marginTop: 10,
    },
    price1: {
        color: "rgb(219,48,34)",
        marginRight: "5%"
    },
    footer: {
        backgroundColor: "rgb(255,255,255)",
        borderRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius:0,
        padding: "2%",
        height: 230,
        flexDirection: "column"
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
})