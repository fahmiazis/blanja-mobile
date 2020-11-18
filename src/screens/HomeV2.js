import React, {Component} from 'react'
import { Text, View, StyleSheet, 
    TouchableOpacity, ScrollView, SafeAreaView, 
    ImageBackground, Image, FlatList
} from 'react-native'
import { default as axios} from 'axios'
import { Card } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'
import Render from './Render'
import product from '../redux/actions/product'

import head1 from '../assets/img/head1.png'

class Home extends Component {
    state = {
        dataFlat: {},
        dataPopular: {}
    }

    async componentDidMount() {
        await this.props.getItem()
        await this.props.getItemPopular()
        const { data, dataPopular } = this.props.product
        this.setState({dataFlat: data, dataPopular: dataPopular})
    }
    gotoDetail = id => {
        console.log(id)
        this.props.navigation.navigate('Detail', {id})
    }

    componentDidUpdate(){
        console.log(this.state.dataFlat)
        console.log(this.state.dataFlat.data)
    }

    // RenderItem = ({product}) => {
    //     <TouchableOpacity key={product.id} onPress={() => this.gotoDetail(product.id) }>
    //     <Card style={style.bodyCard}>
    //             <Image style={style.imgCard} source={{uri: `http://54.147.40.208:7070/${product.url}`}} />
    //             <View style={style.itemCard}>
    //             <View style={style.card}> 
    //                 <Icon name="star-outline" size={15} style={style.rate} />
    //                 <Icon name="star-outline" size={15} style={style.rate} />
    //                 <Icon name="star-outline" size={15} style={style.rate} />
    //                 <Icon name="star-outline" size={15} style={style.rate} />
    //                 <Icon name="star-outline" size={15} style={style.rate} />
    //                 <Text style={style.rateNumber}>(10)</Text>
    //             </View>
    //                 <Text style={style.textStore}>Blanja cloth</Text>
    //                 <Text>{product.name}</Text>
    //                 <Text>Rp{product.price}, -</Text>
    //             </View>
    //         </Card>
    //     </TouchableOpacity>
    // }

    nextPage = async () => {
        const {dataFlat} = this.state
        const { nextLink } = dataFlat.pageInfo
        if (nextLink) {
            const res = await axios.get(nextLink)
            const {data} = res.data
            const newData = {
                ...dataFlat,
                data: [...dataFlat.data, ...data],
                pageInfo: res.data.pageInfo,
            }
            this.setState({dataFlat: newData})
        }
    }

    nextPagePop = async () => {
        const {dataPopular} = this.state
        const { nextLink } = dataPopular.pageInfo
        if (nextLink) {
            const res = await axios.get(nextLink)
            const {data} = res.data
            const newData = {
                ...dataPopular,
                data: [...dataPopular.data, ...data],
                pageInfo: res.data.pageInfo,
            }
            this.setState({dataPopular: newData})
        }
    }

  render() {
    const {isLoading, data, isError, alertMsg} = this.props.product
    const {dataFlat, dataPopular} = this.state
    return (
        <>
        <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic"
          style={style.scrollView}>
            <View style={style.parent}>
                <View style={style.head}>
                    <ImageBackground style={style.img} source={head1} />
                    <View style={style.textHead}>
                        <Text style={style.textImg}>Fashion</Text>
                        <Text style={style.textImg}>Sale</Text>
                    </View>
                </View>
                <View style={style.body}>
                <View>
                    <Text style={style.textNew}>New</Text>
                    <Text style={style.textSub} secondary>You've never seen it before</Text>
                </View>
                <FlatList
                horizontal={true}
                data = {Object.keys(dataFlat).length > 0 && dataFlat.data}
                onEndReached={this.nextPage}
                onEndReachedThreshold={0.5}
                renderItem = {({item}) => <Render product={item} /> }
                />
            <View>
                <Text style={style.textNew}>Popular</Text>
                <Text style={style.textSub} secondary>You've never seen it before</Text>  
            </View>
            <FlatList
                horizontal={true}
                data = {Object.keys(dataPopular).length > 0 && dataPopular.data}
                onEndReached={this.nextPagePop}
                onEndReachedThreshold={0.5}
                renderItem = {({item}) => <Render product={item} /> }
                />
                </View>
            </View>
        </ScrollView>
        </SafeAreaView>
        </>
    );
  }
    
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

const mapStateToProps = state => ({
    product: state.product
  })
  
  const mapDispatchToProps = {
    getItem: product.getItem,
    getItemPopular: product.getItemPopular,
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home)