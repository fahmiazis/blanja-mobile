import React, { Component } from 'react'
import { Text, View, StyleSheet, 
    ImageBackground, Dimensions, TouchableOpacity,
    Platform, 
} from 'react-native'
import { Container } from 'native-base'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel'

import head1 from '../assets/img/head1.png'

const { width: screenWidth } = Dimensions.get('window')

const ENTRIES1 = [
    {
        title: "Carousel1",
        illustration: '../assets/img/block1.png'
    },
    {
        title: "Carousel2",
        illustration: '../assets/img/block2.png'
    }
]

class Home extends Component {

    constructor(props){
        super(props)
        this.carouselRef = React.createRef(null);
    }

    state = {
        entries: [],
    }

    goForward = () => {
        this.carouselRef.current.snapToNext()
    }

    componentDidMount(){
        this.setState({entries: ENTRIES1})
    }

    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={style.item}>
                <ParallaxImage
                    source={{ uri: item.illustration }}
                    containerStyle={style.imageContainer}
                    style={style.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <Text style={style.title} numberOfLines={2}>
                    { item.title }
                </Text>
            </View>
        );
    }
    render() {
        return (
            <Container>
                <View style={style.parent}>
                    <View style={style.head}>
                        <ImageBackground style={style.img} source={head1} />
                        <View style={style.textHead}>
                            <Text style={style.textImg}>Fashion</Text>
                            <Text style={style.textImg}>Sale</Text>
                        </View>
                    </View>
                    <View style={style.body}>
                        <View><Text>Fashion</Text></View>
                        <Carousel
                            ref={this.carouselRef} 
                            sliderWidth={screenWidth}
                            sliderHeight={screenWidth}
                            itemWidth={screenWidth - 60}
                            data={this.state.entries}
                            renderItem={this._renderItem}
                            hasParallaxImages={true}
                        />
                    </View>
                </View>
            </Container>
        );
    }
}

const style = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: "rgb(249,249,249)",
    },
    head: {
        position: "relative",
        display: "flex",
    },
    img: {
        width: 480,
        height: 680,
    },
    textHead:{
        position: "absolute",
        marginTop: 500,
        marginLeft: 20,
    },
    textImg:{
        fontSize: 50,
        color: "white",
        fontWeight: "bold",
    },
    body: {
        marginLeft: 20,
    },
    item: {
        width: screenWidth - 60,
        height: screenWidth - 60,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
})

export default Home