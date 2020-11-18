import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { Card, CardItem } from 'native-base'

export default function RenderCatalog({product}) {
   const navigation = useNavigation()
    return (
    <TouchableOpacity key={product.id} onPress={() => navigation.navigate('Detail', {id: product.id})}>
    <Card style={style.bodyCard}>
        <CardItem>
            <View style={style.card}>
                <View style={style.sideCard}>
                    <Text style={style.textName} name="name">{product.name}</Text>
                    <Text style={style.textStore} name="store">Blanja cloth</Text>
                    <Text style={style.textStore} name="rating"></Text>
                    <Text name="price">Rp{product.price},-</Text>
                </View>
                <Image style={style.img} source={{uri: `http://54.147.40.208:7070/${product.url}`}}/>
            </View>
        </CardItem>
    </Card>
    </TouchableOpacity>
    )
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