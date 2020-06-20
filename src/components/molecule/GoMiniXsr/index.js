import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { withNavigation } from '@react-navigation/compat';

const GoOxygen = (props) => {
  return (
    <View style={{ padding: 10, alignItems: 'center', paddingTop: 18 }}>
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 30,
            backgroundColor: '#fff',
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <Image
            source={require('../../../../assets/barango.png')}
            style={{
              height: 180,
              width: 190,
              alignContent: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />
          <View style={{ left: 0, bottom: 0, top: 10, alignItems: 'center' }}>
            <Text
              style={{
                color: '#1181c0',
                fontWeight: 'bold',
                fontSize: 22,
              }}
            >
              OXYGEN CONCENTRATOR{' '}
            </Text>

            <Text
              style={{
                fontWeight: 'bold',
                color: '#767676',
              }}
            >
              Rental Fee: RM:290/ Month
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#767676',
              }}
            >
              Refundable Deposit : RM500
            </Text>
            <Text
              style={{
                color: '#1181c0',
                fontWeight: 'bold',
              }}
            >
              (OPTIONAL ADD ON)
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#767676',
              }}
            >
              Humidifier Bottle :RM 25
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#767676',
              }}
            >
              Oxygen Tube(Twin Nasal) :RM 13.50
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#767676',
              }}
            >
              2 Way Delivery Charge: RM100
            </Text>
            <View style={{}}>
              <TouchableOpacity onPress={props.onPress}>
                <Image
                  source={require('../../../../assets/rentnow.png')}
                  style={{
                    marginTop: 10,
                    alignItems: 'center',
                    borderRadius: 6,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
};
export default GoOxygen;
