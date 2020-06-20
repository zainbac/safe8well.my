import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Navbarr from '../../../../src/components/organism/NavbarH';

const Order = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Button
          title='Go to Detail'
          onPress={() => props.navigation.navigate('OrderDetail')}
        />
      </View>
      <Navbarr />
    </View>
  );
};
export default Order;
