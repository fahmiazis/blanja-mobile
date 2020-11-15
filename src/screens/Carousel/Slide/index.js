import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

import Icon from 'react-native-vector-icons/Ionicons'

export const Slide = (props: any) => {

  const { label, price, image, rating, store } = props;

  return (
    <View style={styles.stat}>
      <Image source={image} style={{...styles.imgNew}} />
      <View style={{...styles.parent}}>
        <View style={{...styles.rate}}>
          {rating}
          <Icon name="star-outline" size={15} style={{...styles.rating}} />
          <Icon name="star-outline" size={15} style={{...styles.rating}} />
          <Icon name="star-outline" size={15} style={{...styles.rating}} />
          <Icon name="star-outline" size={15} style={{...styles.rating}} />
          <Icon name="star-outline" size={15} style={{...styles.rating}} />
          <Text style={{...styles.textRate}}>(0)</Text>
        </View>
        <Text style={{...styles.store}}>
          {store}
        </Text>
          <Text style={{ ...styles.statText}}>
            {label}
          </Text>
        <Text style={{ ...styles.statPrice }}>
          {price}
        </Text>
        </View>
    </View>
  );
}

export default Slide;