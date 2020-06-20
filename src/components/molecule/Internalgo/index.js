import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const Internalgo = ({ onPress }) => {
  return (
    <View style={{}}>
      <View style={{}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#61A756',
            paddingHorizontal: 12,
            paddingVertical: 11,

            borderRadius: 4,
          }}
          onPress={onPress}
        >
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
              flexWrap: 'wrap',
            }}
          >
            <Image
              source={require('../../../../assets/facebook.png')}
              style={{
                width: 40,
                height: 40,
                alignItems: 'flex-end',
                alignContent: 'flex-end',
                justifyContent: 'flex-end',
                marginHorizontal: 16,
                borderRadius: 6,
              }}
            />
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
              }}
            >
              READ
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Internalgo;
