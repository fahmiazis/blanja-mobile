import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {ListItem, Left, Button, Header, Right, Body, Title} from 'native-base'


class Category extends Component {
    
    render() {
        return (
            <View style={style.parent}>
                <Header style={style.header}>
                    <Left></Left>
                    <Body><Title style={style.title}>Categories</Title></Body>
                    <Right />
                </Header>
                <View style={style.head}>
                    <Button style={style.btn} large block onPress={()=> this.props.navigation.navigate('Catalog')}>
                        <Text style={style.textbtn}>VIEW ALL ITEMS</Text>
                    </Button>
                    <Text style={style.textCat}>Choose category</Text>
                </View>
                <View>
                    <ListItem>
                        <Left>
                            <Text style={style.textList}>T-shirt</Text>
                        </Left>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text style={style.textList}>Jacket</Text>
                        </Left>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text style={style.textList}>Pants</Text>
                        </Left>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text style={style.textList}>Short</Text>
                        </Left>
                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text style={style.textList}>Shoes</Text>
                        </Left>
                    </ListItem>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: "rgb(249,249,249)",
    },
    btn: {
        marginTop: 10,
        marginBottom: 15,
        borderRadius: 30,
        backgroundColor: "rgb(219,48,34)",
    },
    textCat: {
        color: "rgb(164,164,164)",
        fontSize: 15,
    },
    textbtn: {
        color: "rgb(255,255,255)",
    },
    head: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
    textList: {
        fontSize: 15,
        marginLeft: 20, 
    },
    header: {
        backgroundColor: "rgb(249,249,249)"
    },
    title: {
        color: "rgb(0,0,0)"
    },
})


export default Category