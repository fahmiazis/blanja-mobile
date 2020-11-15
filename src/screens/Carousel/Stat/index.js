import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

export const Stat = (props: any) => {

  const { label, value, image } = props;

  return (
    <View style={styles.stat}>
      {/* <Text style={{ ...styles.statText }}>
        {value}
      </Text>
      <View style={styles.statHold}>
        <Text style={{ ...styles.statLabel }}>
          {label}
        </Text>
      </View> */}
      <Image source={image} style={{...styles.img}} />
    </View>
  );
}

export default Stat;