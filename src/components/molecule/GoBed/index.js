import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from '@react-navigation/compat';

const GoBed = (props) => {
  return (
    <View style={{ padding: 10, alignItems: 'center', paddingTop: 18 }}>
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 54,
            backgroundColor: '#fff',
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <Image
            source={require('../../../../assets/varango.png')}
            style={{
              height: 170,
              width: 200,
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
              COMPACT ALUMINIUM WHEELCHAIR{' '}
            </Text>

            <Text
              style={{
                fontWeight: 'bold',
                color: '#767676',
                fontSize: 15,
              }}
            >
              Rental Fee: RM:90/ Month
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#767676',
              }}
            >
              Refundable Deposit : RM300
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
              2 Way Delivery Charge: RM100
            </Text>

            <View style={{ marginTop: 20 }}>
              <TouchableOpacity onPress={props.onPress}>
                <Image
                  source={require('../../../../assets/rentnow.png')}
                  style={{
                    marginTop: 20,

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
export default GoBed;
