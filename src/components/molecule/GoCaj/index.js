import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from '@react-navigation/compat';

const GoCaj = (props) => {
  return (
    <View style={{ padding: 10, alignItems: 'center', paddingTop: 18 }}>
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 15,
            backgroundColor: '#fff',
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <Image
            source={require('../../../../assets/barango2.png')}
            style={{
              height: 190,
              width: 400,
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
              MANUAL SINGLE CRANK CARE BED{' '}
            </Text>

            <Text
              style={{
                fontWeight: 'bold',
                color: '#767676',
              }}
            >
              Rental Fee: RM:200/ Month
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
              (OPTIONAL ADD ON )
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#767676',
              }}
            >
              Foldable Waterproof PU Mattress : RM 298
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#767676',
              }}
            >
              Antidecibutus Alternating Ripple Mattress:RM499
            </Text>

            <Text
              style={{
                fontWeight: 'bold',
                color: '#767676',
              }}
            >
              Antidecibutus Alternating Ripple Mattress Bubble:210
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
export default GoCaj;
