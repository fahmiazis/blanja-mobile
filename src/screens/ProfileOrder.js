import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import {connect} from 'react-redux'
import profile from '../redux/actions/profile'

class ProfileOrder extends Component {

    componentDidMount(){
        this.props.getHistory(this.props.auth.token)
    }

    componentDidUpdate(){
        const { history, alertMsg } = this.props.profile
        console.log(history)
        console.log(alertMsg)
    }

    render() {
        const { history, alertMsg } = this.props.profile
        return (
            <View style={style.parent}>
                <ScrollView>
                <Text style={style.title}>My Orders</Text>
                {alertMsg === 'get history failed' ? (
                    <View>
                        <Text>You heve no order history</Text>
                    </View>
                ) : (
                    history.map(item => {
                        return(
                        <TouchableOpacity key={item.id}>
                        <View style={style.card}>
                        <View style={style.bodyCard}>
                            <Text style={style.textOrder}>Order No {item.order_no}</Text>
                            <Text style={[style.text]}>{item.created_at.toString().slice(0, 10)}</Text>
                        </View>
                        <View style={style.track}>
                            <Text style={style.text}>Tracking number: <Text style={style.num}>{item.no_tracking}</Text></Text>
                            <Text style={style.text}>quantity: <Text style={style.num}>{item.amount}</Text></Text>
                            <Text style={style.text}>Total amount: <Text style={style.num}>Rp{item.summary + item.delivery}</Text></Text>
                        </View>
                        <View style={style.deliver}>
                            <Text style={style.textDeliv}>Delivered</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                        )
                    })
                )}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
  })
  
  const mapDispatchToProps = {
    getHistory: profile.getHistory,
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProfileOrder)

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
        marginBottom: 5
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
        color: "green",
    },
    track: {
        marginTop: 10,
    }
})