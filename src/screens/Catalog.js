import React, { Component } from 'react'
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Body, Card, CardItem, Header, Left, Right, Title } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'

import {connect} from 'react-redux'
import { default as axios} from 'axios'
import product from '../redux/actions/product'
import RenderCatalog from './RenderCatalog'

class Catalog extends Component {

    state = {
        dataFlat: {},
        searchData: '',
        sortData: ''
    }

    async componentDidMount() {
        await this.props.getItem()
        const { data } = this.props.product
        this.setState({dataFlat: data})
    }

    gotoDetail = id => {
        console.log(id)
        this.props.navigation.navigate('Detail', {id})
    }

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

    search = () => {
        const { searchData } = this.state
        this.props.searchProduct(searchData)
        const { search } = this.props.product
        this.setState({dataFlat: search})
    }

    sort = () => {
        const { sortData } = this.state
        this.props.sortProduct(sortData)
        const { sort } = this.props.product
        this.setState({dataFlat: sort})
    }

    componentDidUpdate(){
        const {dataFlat} = this.state
        console.log(dataFlat)
    }
    
    render() {
        const {dataFlat} = this.state
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
                                <TouchableOpacity style={style.subIcon} onPress={() => {return (this.setState({sortData: 'asc'}), this.sort())}}>
                                    <Text>Price lowest to high</Text>
                                    <Icon name="swap-vertical" size={30} />
                                </TouchableOpacity>
                                <TouchableOpacity style={style.iconFilter}>
                                    <Text>filters</Text>
                                    <Icon name="filter" size={30} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Body>
                        </Body>
                        </Header>
                    </View>
                    <View>
                    <FlatList
                        data = {Object.keys(dataFlat).length > 0 && dataFlat.data}
                        onEndReached={this.nextPage}
                        onEndReachedThreshold={0.5}
                        renderItem = {({item}) => <RenderCatalog product={item} /> }
                        />
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
    getItem: product.getItem,
    searchProduct: product.searchProduct,
    sortProduct: product.sortProduct
  }

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);