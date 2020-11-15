import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Input, Item, Switch, DatePicker, Label, Button } from 'native-base'
import {connect} from 'react-redux'

import profile from '../redux/actions/profile'

class ProfileEdit extends Component {
    constructor(props) {
        super(props);
        this.setDate = this.setDate.bind(this);
      }
      
      state = { 
        chosenDate: new Date(),
        switch: true,
        switch2: false,
        switch3: false,
        name:'',
        birthday: '', 
    };

      setDate(newDate) {
        this.setState({ birthday: newDate });
      }

      componentDidMount(){
        this.props.getProfile(this.props.auth.token)
        const { data } = this.props.profile
        if (data.length > 0) {
            data.map(item => {
                return (
                this.setState({ name: item.name, birthday: item.birthday === null ? "Date of Birth": item.birthday })
                )})
            } else if(data.length === undefined){
                this.setState({name: '', birthday: 'Date of birth'})
            } else {
                console.log('get data failed')
            }
        }

    updateProfile = () => {
        const name = this.state.name
        const birthday = this.state.birthday
        const data = { name, birthday}
        this.props.editProfile(data, this.props.auth.token)
    }

    componentDidUpdate(){
        console.log(this.state.birthday)
        console.log(this.state.name)
    }

    render() {
        return (
            <View style={style.parent}>
                <Text style={style.title}>Settings</Text>
                <View style={style.disCard}>
                    <Text style={[style.subtitle, style.distance]}>Personal Information</Text>               
                    <View style={style.form}>
                        <Item floatingLabel style={style.input}>
                            <Label style={style.label}>Full Name</Label>
                            <Input value={this.state.name} onChangeText={name=>this.setState({name})} />
                        </Item>
                        <Item style={style.input}>
                            <Input disabled value={this.state.birthday === 'Date of Birth' ? 'Date of Birth' : this.state.birthday.toString().substr(4, 12)} />
                            <DatePicker 
                            defaultDate={new Date(2000, 2, 10)}
                            minimumDate={new Date(1910, 1, 1)}
                            maximumDate={new Date(2020, 12, 31)}
                            onDateChange={this.setDate}  
                            placeHolderText="Select date"
                            />
                        </Item>
                        <Button style={style.btn} block onPress={this.updateProfile}>
                            <Text style={style.textbtn}>Save</Text>
                        </Button>
                    </View>
                </View>
                <View style={style.disCard}>
                    <View style={style.password}>
                        <Text style={style.subtitle}>Password</Text>
                        <TouchableOpacity>
                            <Text>Change</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Item style={style.input}>
                            <Input disabled placeholder="* * * * * * * * * * * * * *"/>
                        </Item>
                    </View>
                </View>
                <View style={style.disCard}>
                    <Text style={[style.subtitle, style.distance]}>Notification</Text>
                    <View style={style.switch}>
                        <Text>Sales</Text>
                        <Switch value={this.state.switch} />
                    </View>
                    <View style={style.switch}>
                        <Text>New Arrivals</Text>
                        <Switch value={this.state.switch2}/>
                    </View>
                    <View style={style.switch}>
                        <Text>Delivery status change</Text>
                        <Switch value={this.state.switch3} />
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
  })
  
const mapDispatchToProps = {
    getProfile: profile.getProfile,
    editProfile: profile.editProfile
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);

const style = StyleSheet.create({
    parent: {
        flex: 1,
        marginHorizontal: "5%",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
        marginTop: 20,
    },
    subtitle: {
        fontWeight: "bold",
        fontSize: 15,
    },
    input: {
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: "white",
        elevation: 1,
        padding: 15,
        alignItems: "center"
    },
    distance: {
        marginBottom: 20
    },
    password: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    disCard: {
        marginBottom: 50,
    },
    switch: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },  
    label: {
        marginLeft: 15,
        marginTop: 5,
    },
    btn: {
        backgroundColor: "rgb(219,48,34)",
        height: 50,
        justifyContent: "center",
        width: "100%",
        borderRadius: 30,
        marginTop: 10
    },
    textbtn: {
        color: "white",
        fontSize: 20
    },
})