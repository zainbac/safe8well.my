import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const MainFeature = (props) => {
  return (
    <View style={{ width: '20%', alignItems: 'center' }}>
      <View
        style={{
          width: 58,
          height: 58,

          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={props.onPress}>
          <Image style={{ width: 60, height: 60 }} source={props.img} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 11,
          fontWeight: 'bold',
          marginTop: 6,
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};
export default MainFeature;
