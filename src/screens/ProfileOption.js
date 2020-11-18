import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {connect} from 'react-redux'

import profile from '../redux/actions/profile'
import auth from '../redux/actions/auth'
import akun from '../assets/img/akun.png'

class ProfileOptions extends Component {
    
    componentDidMount(){
        this.props.getProfile(this.props.auth.token)
    }

    logout = () => {
        this.props.logout()
    }

    render() {
        const {isLoading, data, isError, alertMsg} = this.props.profile
        return (
        <View>
            <View style={style.parent}>
                <Text style={style.title}>My profile</Text>
                {!isLoading && !isError && data.length !== 0 && data.map(item => {
                return(
                <View style={style.profile}>
                    <Image style={style.img} source={item.picture === null ?  akun : {uri: `http://54.147.40.208:7070/${item.picture}`} } />
                    <View style={style.text}>
                        <Text style={style.textName}>{item.name}</Text>
                        <Text style={style.textMail}>{item.email}</Text>
                    </View>
                </View>
                )})}
            </View>
            <View style={style.body}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('ProfileOrder')}>
                <View style={style.card}> 
                    <View>
                        <Text style={style.subtitle}>My orders</Text>
                        <Text style={style.desc}>Already have 12 orders</Text>
                    </View>
                    <Icon style={style.icon} name="keyboard-arrow-right"  size={30} />
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileAddress')}>
                <View style={style.card}> 
                    <View>
                        <Text style={style.subtitle}>Shipping addresses</Text>
                        <Text style={style.desc}>3 addresses</Text>
                    </View>
                    <Icon style={style.icon} name="keyboard-arrow-right"  size={30} />
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('ProfileEdit')}>
                <View style={style.card}> 
                    <View>
                        <Text style={style.subtitle}>Settings</Text>
                        <Text style={style.desc}>Notifications, password</Text>
                    </View>
                    <Icon style={style.icon} name="keyboard-arrow-right"  size={30} />
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.logout}>
                <View style={style.card}> 
                    <View>
                        <Text style={style.subtitle}>Logout</Text>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}
const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
  })
  
const mapDispatchToProps = {
    getProfile: profile.getProfile,
    logout: auth.logout
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProfileOptions);

const style = StyleSheet.create({
    parent: {
        flex: 1,
        marginHorizontal: "5%"
    },
    body: {
        marginTop: "40%"
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold"
    },
    profile: {
        flexDirection: "row",
        marginTop: 30,
        marginBottom: 40,
    },
    img: {
        width: 64,
        height: 64,
        borderRadius: 50,
    },
    text: {
        marginLeft: 20
    },
    textName: {
        fontWeight: "bold",
        fontSize: 20
    },
    textMail: {
        color: "rgb(164,164,164)",
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        paddingVertical: 15,
        paddingHorizontal: "5%",
        width: "100%",
        elevation: 2,
        justifyContent: "space-between"
    },
    desc: {
        color: "rgb(164,164,164)"
    },
    icon: {
        color: "rgb(164,164,164)",
    },
})