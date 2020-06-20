import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import GoNews from './../../components/organism/../molecule/GoNews';
import GoNews2 from './../../components/molecule/GoNews2';
import { Card, ListItem, Icon } from 'react-native-elements';
const ScrollableItemsss = (props) => {
  return (
    <View style={{}}>
      <Gonews onPress={() => this.props.navigation.navigate('Youtube')} />
      <Gonews2 onPress={() => this.props.navigation.navigate('Youtube')} />
    </View>
  );
};

export default ScrollableItemsss;
