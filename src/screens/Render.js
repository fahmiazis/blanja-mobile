import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { Card } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Render({product}) {
   const navigation = useNavigation()
    return (
        <TouchableOpacity style={style.parent} key={product.id} onPress={() => navigation.navigate('Detail', {id: product.id})}>
        <Card style={style.bodyCard}>
            <Image style={style.imgCard} source={{uri: `http://54.147.40.208:7070/${product.url}`}} />
            <View style={style.itemCard}>
            <View style={style.card}> 
                <Icon name="star-outline" size={15} style={style.rate} />
                <Icon name="star-outline" size={15} style={style.rate} />
                <Icon name="star-outline" size={15} style={style.rate} />
                <Icon name="star-outline" size={15} style={style.rate} />
                <Icon name="star-outline" size={15} style={style.rate} />
                <Text style={style.rateNumber}>(10)</Text>
            </View>
                <Text style={style.textStore}>Blanja cloth</Text>
                <Text>{product.name}</Text>
                <Text>Rp{product.price}, -</Text>
            </View>
        </Card>
    </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: "rgb(249,249,249)",
        maxHeight: "100%",
    },
    scrollView: {
        backgroundColor: "rgb(255,255,255)",
    },
    head: {
        position: "relative",
        display: "flex",
    },
    img: {
        width: "100%",
        height: 580,
    },
    textHead:{
        position: "absolute",
        marginTop: "90%",
        marginLeft: 20,
    },
    textImg:{
        fontSize: 50,
        color: "white",
        fontWeight: "bold",
    },
    body: {
        flex: 1,
        marginLeft: 20,
    },
    textNew: {
        marginTop: 50,
        fontSize: 30,
        fontWeight: "bold", 
    },
    textSub: {
        fontSize: 15,
        marginBottom: 20,
        color: "rgb(164,164,164)",
    },
    card: {
        flexDirection: "row",
    },
    rateNumber: {
        color: "rgb(164,164,164)",
        marginLeft: 5,
    },
    imgCard: {
        borderRadius: 10,
        width: 148,
        height: 184
    },
    rate: {
        marginLeft: 2,
        color: "rgb(164,164,164)"
    },
    bodyCard: {
        width: 148,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        elevation: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        backgroundColor: "rgb(249,249,249)",
        marginRight: 30,
    },
    itemCard: {
        paddingHorizontal: "5%"
    },
    textStore: {
        color: "rgb(164,164,164)"
    },  
})