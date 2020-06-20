import React from 'react';
import { View, Text } from 'react-native';
import Carousel from '../../../components/molecule/Carousel';
import { dummyData } from './../../../Data';
import { withNavigation } from '@react-navigation/compat';

const HomeCarousel = () => {
  return (
    <View>
      <Carousel data={dummyData} />
    </View>
  );
};

export default withNavigation(HomeCarousel);
