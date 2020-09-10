import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from '@react-navigation/compat';
import { Card, ListItem, Icon } from 'react-native-elements';
const Gonews = (props) => {
  return (
    <View style={{}}>
      <View style={{ flexDirection: 'column' }}>
        <TouchableOpacity onPress={props.onPress}>
          <View
            elevation={2}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              marginTop: 10,
              paddingTop: 0,
              backgroundColor: '#ffff',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,

              marginHorizontal: 11,
              left: 0,
            }}
          >
            <Text
              style={{
                color: '#3d85f1',
                marginTop: 30,
                fontSize: 16,
                fontWeight: 'bold',
                alignItems: 'center',
                left: 30,
              }}
            >
              WELEPAIR FACEBOOK {'\n'} {'               '}
              JOIN US
            </Text>
            <Text
              style={{
                color: '#3d85f1',
                marginTop: 30,
                fontSize: 16,
                fontWeight: 'bold',
                alignItems: 'center',
                left: 30,

                fontWeight: 'bold',
              }}
            ></Text>
            <Image
              source={require('../../../../assets/facebooks.png')}
              style={{
                height: 100,
                marginTop: 10,
                marginBottom: 10,
                marginRight: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                justifyContent: 'flex-end',
                alignContent: 'flex-end',
                alignItems: 'flex-end',
                alignSelf: 'flex-end',
                width: 90,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View></View>
    </View>
  );
};
export default Gonews;
