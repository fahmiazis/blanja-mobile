import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Button, Left, List, ListItem, Right, Footer, Card } from 'native-base'
import DropDown from  'react-native-dropdown-picker'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Ionicons'

import det from '../assets/img/det.png'
import det2 from '../assets/img/det2.png'
import block1 from '../assets/img/block1.png'

import {connect} from 'react-redux'

import product from '../redux/actions/product'

class DetailProduct extends Component {
    state = {
        size: 'Size',
        color: 'Color',
    }

    componentDidMount() {
        const {id} = this.props.route.params
        this.props.detailItem(id)
        this.props.getItem()
    }
    componentDidUpdate(){
        const { detail } = this.props.product
        console.log(detail)
        console.log(detail.url)
        console.log(this.state.name)
        console.log(this.state.price)
    }
    gotoDetail = id => {
        this.props.navigation.navigate('Detail', {id})
    }
  render() {
    const {isLoading, data, isError, alertMsg, detail} = this.props.product
    return (
      <View style={style.container}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
              <ScrollView horizontal>
              <Image style={style.img} source={{uri: `http://54.147.40.208:7070/${detail.url}`}} />
              </ScrollView>
        <View style={style.parent}>
            <View style={style.button}>
                {/* <Button bordered style={style.btn}> */}
            <DropDown
                items={[
                    {label: 'Size', value: 'Size'},
                    {label: 'M', value: 'M'},
                    {label: 'L', value: 'L'},
                    {label: 'XL', value: 'XL'},
                ]}
                defaultValue={this.state.size}
                containerStyle={{height: 45, borderRadius:10}}
                style={style.dropdown}
                labelStyle={{fontSize: 20}}
                itemStyle={{
                    justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => this.setState({
                    size: item.value
                })}
            />
            <DropDown
                items={[
                    {label: 'Color', value: 'Color'},
                    {label: 'Black', value: 'Black'},
                    {label: 'White', value: 'White'},
                    {label: 'Blue', value: 'Blue'},
                ]}
                defaultValue={this.state.color}
                containerStyle={{height: 45, borderRadius:10}}
                style={[style.dropdown, style.marDrop]}
                labelStyle={{fontSize: 20}}
                itemStyle={{
                    justifyContent: 'flex-start',
                }}
                dropDownStyle={[{backgroundColor: '#fafafa', width: 160}, style.marDrop]}
                onChangeItem={item => this.setState({
                    color: item.value
                })}
            />
                <View style={style.btnHeart}>
                    <Icon2 style={style.icon} name="heart-outline" size={25} />
                </View>
            </View>
            <View>
                <View style={style.head}>
                    <Text style={style.name}>{detail.name}</Text>
                    <Text style={style.price}>Rp{detail.price},-</Text>
                </View>
                <Text style={style.store}>Blanja Cloth</Text>
                <View name="rating">
                <View style={style.card}> 
                    <Icon name="star-outline" size={20} style={style.rate} />
                    <Icon name="star-outline" size={20} style={style.rate} />
                    <Icon name="star-outline" size={20} style={style.rate} />
                    <Icon name="star-outline" size={20} style={style.rate} />
                    <Icon name="star-outline" size={20} style={style.rate} />
                    <Text style={style.rateNumber}>(10)</Text>
                </View>
                </View>
                <Text style={style.description}>{detail.description}</Text>
            </View>
        </View>
        <View style={style.parent}>
            <List>
                <ListItem>
                    <Left>
                        <Text>Shipping info</Text>
                    </Left>
                    <Right>
                        <Icon name="keyboard-arrow-right"  size={20} />
                    </Right>
                </ListItem>
                <ListItem>
                    <Left>
                        <Text>Support</Text>
                    </Left>
                    <Right>
                        <Icon name="keyboard-arrow-right" size={20} />
                    </Right>
                </ListItem>
            </List>
            <View>
                <Text style={style.foot}>You can also like this</Text>
            </View>
            <View>
            <ScrollView horizontal>
            {!isLoading && !isError && data.length!==0 && data.data.map(item => {
                return(
            <TouchableOpacity onPress={() => this.gotoDetail(item.id) }>
            <Card style={style.bodyCard}>
                <Image style={style.imgCard} source={{uri: `http://54.147.40.208:7070/${item.url}`}} />
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
                    <Text>{item.name}</Text>
                    <Text>Rp{item.price},-</Text>
                </View>
            </Card>
            </TouchableOpacity>
            )})}
            </ScrollView>
            </View>
        </View>
        </ScrollView>
        <Footer style={style.footer}>
                <Button block style={style.btnFooter} large onPress={()=> this.props.navigation.navigate('Cart')}>
                    <Text style={style.textFooter}>ADD TO CART</Text>
                </Button>
            </Footer>
      </View>
    )
  }
}

const style = StyleSheet.create({
    container: {
      flex: 1,
    },
    parent: {
       marginHorizontal: "5%", 
       elevation: 2,
       marginBottom: 5,
    },
    textbtn: {
        fontSize: 20,
    },
    btn: {
        borderColor: "rgb(249,249,249)",
        backgroundColor: "rgb(255,255,255)",
        width: "38%",
        paddingLeft: 10,
        borderRadius: 10,
        elevation: 3,
    },
    btnColor: {
        borderColor: "rgb(249,249,249)",
        backgroundColor: "rgb(255,255,255)",
        width: "38%",
        paddingLeft: 10,
        borderRadius: 10,
        elevation: 3,
        marginLeft: "5%",
    },
    button: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    }, 
    btnHeart: {
        borderColor: "rgb(249,249,249)",
        backgroundColor: "rgb(255,255,255)",
        borderRadius: 30,
        width: 40,
        height: 40,
        marginLeft: "5%",
        marginTop: 5,
        elevation: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        color: "rgb(164,164,164)",
        marginTop: 5,
    },
    head: {
        flexDirection: "row",
        marginTop: "5%",
        marginRight: 20
    },
    name: {
        fontSize: 25,
        fontWeight: "bold",
    },
    price: {
        alignItems: "flex-end",
        marginLeft: "38%",
        fontSize: 25,
        fontWeight: "bold",
    },
    store: {
        color: "rgb(164,164,164)",
        fontSize: 17,
    },
    description: {
        marginTop: 10,
        fontSize: 17,
    },
    btnCart: {
        borderRadius: 30,
        backgroundColor: "rgb(219,48,34)",
        marginHorizontal: "5%",
    },
    textcart: {
        color: "rgb(255,255,255)",
    },
    secCart: {
        backgroundColor: "rgb(255,255,255)",
        width: "100%",
        height: 150,
        justifyContent: "center",
        elevation: 3,
    },
    foot: {
        fontSize: 25,
        marginTop: 15,
        fontWeight: "bold",
        marginBottom: 10,
    },
    dropdown: {
        borderColor: "rgb(249,249,249)",
        backgroundColor: "rgb(255,255,255)",
        width: 160,
        borderRadius: 10,
        elevation: 3,
    },
    marDrop: {
        marginLeft: 15
    },
    footer: {
        // width: "100%",
        backgroundColor: "rgb(255,255,255)",
        borderRadius: 20,
        padding: "2%",
        height: 140,
        flexDirection: "column"
    },
    btnFooter: {
        borderRadius: 30,
        backgroundColor: "rgb(219,48,34)",
        marginHorizontal: "3%",
        marginBottom: 30,
    },
    textFooter: {
        color: "rgb(255,255,255)",
        fontSize: 20
    },
    card: {
        flexDirection: "row",
    },
    rateNumber: {
        color: "rgb(164,164,164)",
        marginLeft: 5,
    },
    img: {
        height: 480,
        width:480
    },
    imgCard: {
        borderRadius: 10,
        width: 148,
        height: 184
    },
    rate: {
        marginRight: 1,
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
        backgroundColor: "rgb(242,242,242)",
        marginRight: 30,
    },
    itemCard: {
        paddingHorizontal: "5%"
    },
    textStore: {
        color: "rgb(164,164,164)"
    },
  });

  const mapStateToProps = state => ({
    product: state.product,
    auth: state.auth
  })
  
  const mapDispatchToProps = {
    getItem: product.getItem,
    detailItem: product.detailItem
  }

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct)