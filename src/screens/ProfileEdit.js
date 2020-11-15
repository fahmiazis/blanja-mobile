import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Platform } from 'react-native'
import { Input, Item, Switch, DatePicker, Label, Button } from 'native-base'
import {connect} from 'react-redux'
import ImagePicker from 'react-native-image-picker'

import profile from '../redux/actions/profile'
import akun from '../assets/img/akun.png'

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
        picture: null,
        photo: akun
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
                this.setState({ 
                    name: item.name, 
                    birthday: item.birthday === null ? "Date of Birth": item.birthday,
                    picture: item.picture
                })
                )})
            } else if(data === undefined){
                this.setState({name: '', birthday: 'Date of birth'})
            } else {
                console.log('get data failed')
            }
        }

    updateProfile = async () => {
        const name = this.state.name
        const birthday = this.state.birthday
        const data = { name, birthday}
        await this.props.editProfile(data, this.props.auth.token)
        this.props.getProfile(this.props.auth.token)
    }

    handleChoosePhoto = async () => {
        const options = {
          noData: true,
        }
        await ImagePicker.launchImageLibrary(options, response => {
          if (response.uri) {
            this.setState({ picture: response })
          }
        })
        // const data = new FormData()
        // const { picture } = this.state
        // data.append('picture', {
        //     name: picture.fileName,
        //     type: picture.type,
        //     uri: Platform.OS === 'android' ? picture.uri : picture.uri.replace('file://', '')
        // })

        // const result = this.props.uploadImage(data, this.props.auth.token)
        // if (result) {
        //     this.props.getProfile(this.props.auth.token)
        // }
      }
    
    FormData = (picture, body) => {
        const data = new FormData()

        data.append('picture', {
            name: picture.fileName,
            type: picture.type,
            uri: Platform.OS === 'android' ? picture.uri : picture.uri.replace('file://', '')
        })

        // Object.keys(body).forEach(key => {
        //     data.append(key, body[key])
        // })
        
        return data
    }

    uploadPhoto = async () => {
        const result = await this.props.uploadImage(this.FormData(this.state.picture), this.props.auth.token)
        if (result) {
            this.props.getProfile(this.props.auth.token)
        }
    }

    componentDidUpdate(){
        console.log(this.state.birthday)
        console.log(this.state.name)
        console.log(this.state.picture)
    }

    render() {
        const {picture, birthday} = this.state
        return (
            <ScrollView>
            <View style={style.parent}>
                <Text style={style.title}>Settings</Text>
                <View style={style.disCard}>
                    <Text style={[style.subtitle, style.distance]}>Personal Information</Text>             
                    <View style={style.form}>
                        <TouchableOpacity onPress={this.handleChoosePhoto}>
                            <Image style={style.img} source={picture === null ?  akun : {uri: `http://54.147.40.208:7070/${picture}`|| `${picture.uri}`} }/>
                        </TouchableOpacity>
                        <Button style={style.btnimg} onPress={this.uploadPhoto}><Text style={style.textBtnImg}>Save</Text></Button>
                        <Item floatingLabel style={style.input}>
                            <Label style={style.label}>Full Name</Label>
                            <Input value={this.state.name} onChangeText={name=>this.setState({name})} />
                        </Item>
                        <Item style={style.input}>
                            <Input disabled value={this.state.birthday === 'Date of Birth' ? 'Date of Birth' : this.state.birthday.toString().slice(0, 10)} />
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
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
  })
  
const mapDispatchToProps = {
    getProfile: profile.getProfile,
    editProfile: profile.editProfile,
    uploadImage: profile.uploadImage
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
    img: {
        alignSelf: "center",
        width: 72,
        height: 72,
        borderRadius: 50,
    },
    btnimg: {
        alignSelf: "center",
        backgroundColor: "rgb(249,249,249)",
        justifyContent: "center",
        width: 80,
        height: 30,
        borderRadius: 20,
        borderColor: "rgb(108,108,108)",
        borderWidth: 0.5,
        marginVertical: 10
    },
    textBtnImg: {
        color: "rgb(219,48,34)"
    }
})