import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { CardPromoApi } from './../../../components/organism/CardPromoApi';

const cards = [
  {
    id: '0',
    title: 'Starry Night',
    picture: {
      uri:
        'https://www.absdigital.my/wp-content/uploads/2019/06/pemasaran-kedai-makan.jpg',
    },
    content: <Text>Starry Night</Text>,
  },
  {
    id: '1',
    title: 'Wheat Field',
    picture: require('./../../../../assets/walpaper.png'),
    content: <Text>Wheat Field with Cypresses</Text>,
  },
  {
    id: '2',
    title: 'Bedroom in Arles',
    picture: require('./../../../../assets/download.jpg'),
    content: <Text>Bedroom in Arles</Text>,
  },
];

export default class Promotion extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CardPromoApi cards={cards} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
