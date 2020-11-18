import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Button } from 'native-base'

import {connect} from 'react-redux'

import address from '../redux/actions/address'

class ProfileAddress extends Component {

    componentDidMount(){
        this.props.getAddress(this.props.auth.token)
    }

    render() {
        const {address, alertMsg} = this.props.address
        return (
            <View style={style.parent1}>
            <View style={style.parent}>
                <Text style={style.textAddress}>Shipping Address</Text>
                {alertMsg === 'Address not found' ? (
                    <View style={style.error}>
                        <Text style={style.textError}>You have no address</Text>
                    </View>
                ) : (
                    address.map(item => {
                        return (
                    <View style={style.bodyAddress}>
                        <View style={style.nameAddress}>
                            <Text style={style.name}>{item.addr_name}</Text>
                            <TouchableOpacity key={item.id}>
                                <Text style={style.change}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={style.street} name="street">{item.address}</Text>
                        <Text style={style.districk} name="districk">{item.postal_code}, {item.city}</Text>
                    </View>
                        )
                    })
                )}
                <Button block bordered style={style.btn} onPress={() => this.props.navigation.navigate('Address')}><Text style={style.textbtn}>ADD NEW ADDRESS</Text></Button>
            </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    address: state.address
})

const mapDispatchToProps = {
    getAddress: address.getAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAddress);

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
        marginBottom: 20,
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
        marginTop: 20,
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
    },
    error: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30
    },
    textError: {
        fontSize: 25
    }
})
