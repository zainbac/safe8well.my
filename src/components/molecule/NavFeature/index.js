import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card, ListItem, Icon } from 'react-native-elements';
//secton atas

const NavFeature = (props) => {
  this.state = { showAlert: false };
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          style={{
            width: 35,
            height: 35,
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
          source={props.img}
        />
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 10,
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavFeature;
