import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from '@react-navigation/compat';
import { Card, ListItem, Icon } from 'react-native-elements';
const Gonewss = (props) => {
  return (
    <View
      style={{
        padding: 15,
        alignItems: 'center',
        paddingTop: 0,
      }}
    >
      <View
        style={{ position: 'relative', alignItems: 'center', marginBottom: 20 }}
      >
        <View
          style={{
            alignSelf: 'flex-start',
            right: 0,
            bottom: 0,
            left: 0,
            bottom: 0,
            marginBottom: 100,
          }}
        >
          <TouchableOpacity
            onPress={props.onPress}
            style={{ position: 'relative' }}
          >
            <Card>
              <Image
                source={require('../../../../assets/webe2.png')}
                style={{
                  height: 80,
                  width: 80,
                  alignContent: 'center',
                  borderRadius: 6,

                  flex: 1,
                  marginBottom: 10,
                  marginTop: 30,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  bottom: 15,
                  fontSize: 12,
                  fontWeight: 'bold',
                }}
              >
                TRACK NEAREST STORE{' '}
              </Text>
            </Card>
            <View
              style={{
                bottom: 0,
                left: 0,
                width: '100%',
                paddingHorizontal: 0,
                justifyContent: 'space-between',
                paddingBottom: 0,
              }}
            >
              <View style={{ left: 0, bottom: 30 }}>
                <Text
                  style={{
                    color: 'white',
                    bottom: 15,
                    fontSize: 10,
                    fontWeight: 'bold',
                  }}
                >
                  TRACK NEAREST STORE{' '}
                </Text>
                <Text
                  style={{
                    color: 'white',

                    fontSize: 9,
                    fontWeight: 'bold',
                  }}
                >
                  {' '}
                  Track nearby store
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
    </View>
  );
};
export default Gonewss;
