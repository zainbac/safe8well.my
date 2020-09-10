import React, { Component } from 'react';
import MainFeature from '../../../../src/components/molecule/MainFeature';
import { View, Image, Text } from 'react-native';
import { withNavigation } from '@react-navigation/compat';
class MainfeatureH extends React.Component {
  render(props) {
    return (
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
          flexWrap: 'wrap',
          marginTop: 18,
          marginBottom: 0,
          marginHorizontal: 0,
        }}
      >
        <MainFeature
          onPress={() => this.props.navigation.navigate('Promotion')}
          title='REPAIR VOUCHER'
          img={require('../../../../assets/marketing.png')}
        />
        <MainFeature
          onPress={() => this.props.navigation.navigate('Youtube')}
          title='YOUTUBE CHANNEL'
          img={require('../../../../assets/marketing2.png')}
        />
        <MainFeature
          onPress={() => this.props.navigation.navigate('GoogleMaps')}
          title='OUR STORE'
          img={require('../../../../assets/marketing4.png')}
        />
        <MainFeature
          onPress={() => this.props.navigation.navigate('Safe8well')}
          title='ONLINE SHOPPING'
          img={require('../../../../assets/marketing3.png')}
        />
        <MainFeature
          onPress={() => this.props.navigation.navigate('ScanQRCode')}
          title='RENT TO OWN PROGRAM'
          img={require('../../../../assets/marketing5.png')}
        />
      </View>
    );
  }
}
export default withNavigation(MainfeatureH);
