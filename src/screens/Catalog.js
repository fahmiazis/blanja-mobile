import React, { Component } from 'react'
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Body, Card, CardItem, Header, Left, Right, Title } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'

import {connect} from 'react-redux'

import product from '../redux/actions/product'

class Catalog extends Component {

    componentDidMount(){
        this.props.getItem()
    } 
    
    gotoDetail = id => {
        this.props.navigation.navigate('Detail', {id})
    }
    
    render() {
        const {isLoading, data, isError, alertMsg} = this.props.product
        return (
            <>
            <View style={style.parent}>
                    <View>
                        <Header span style={style.head}>
                        <View>
                            <Left>
                                <Title style={style.textHead}>All item's</Title>
                            </Left>
                            <View style={style.icon}>
                                <Icon name="apps-sharp" size={30} />
                                <View style={style.subIcon}>
                                    <Text>Price lowest to high</Text>
                                    <Icon name="swap-vertical" size={30} />
                                </View> 
                                <View style={style.iconFilter}>
                                        <Text>filters</Text>
                                        <Icon name="filter" size={30} />
                                </View>
                            </View>
                        </View>
                        <Body>
                        </Body>
                        </Header>
                    </View>
                    <View>
                    <ScrollView>
                    {!isLoading && !isError && data.length!==0 && data.map(item => {
                    return(
                    <TouchableOpacity onPress={() => this.gotoDetail(item.id) }>
                    <Card style={style.bodyCard}>
                        <CardItem>
                            <View style={style.card}>
                                <View style={style.sideCard}>
                                    <Text style={style.textName} name="name">{item.name}</Text>
                                    <Text style={style.textStore} name="store">Blanja cloth</Text>
                                    <Text style={style.textStore} name="rating"></Text>
                                    <Text name="price">Rp{item.price},-</Text>
                                </View>
                                <Image style={style.img} source={{uri: `http://54.147.40.208:7070/${item.url}`}}/>
                            </View>
                        </CardItem>
                    </Card>
                    </TouchableOpacity>
                    )})}
                    </ScrollView>
                </View>
            </View>
            </>
        )
    }
}

const style = StyleSheet.create({
    parent: {
        marginTop: 10,
        flex: 1,
        backgroundColor:  "rgb(249,249,249)",
    },
    card: {
        flexDirection: "row-reverse",
    },
    textName: {
        // marginBottom: 5,
        fontSize: 20,
        fontWeight: "bold",
    },
    textStore: {
        color: "rgb(164,164,164)",
        // marginBottom: 5,
    },
    sideCard: {
        marginLeft: 20,
    },
    bodyCard: {
        marginLeft: 20,
        marginRight: 20,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        marginBottom: 15,
    },
    img: {
        height: 100,
        width: 100,
    },
    icon: {
        flexDirection: "row-reverse",
        backgroundColor: "rgb(249,249,249)",
        marginTop: 50,
        borderRadius: 5,
    },
    head:{
        backgroundColor: "rgb(255,255,255)",
    },
    title: {
        width: "100%",
    },
    subIcon: {
        flexDirection: "row-reverse",
        alignItems: "center",
        marginLeft: "20%",
    },
    iconFilter: {
        flexDirection: "row-reverse",
        alignItems: "center",
        marginLeft: "25%",
    },
    textHead: {
        color: "rgb(0,0,0)",
        marginBottom: "15%",
        fontSize: 30,
    },
})

const mapStateToProps = state => ({
    product: state.product
  })
  
  const mapDispatchToProps = {
    getItem: product.getItem
  }

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);