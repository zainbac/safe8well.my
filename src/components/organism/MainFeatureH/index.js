import React, { Component } from 'react';
import MainFeature from '../../../../src/components/molecule/MainFeature';
import { View, Image, Text ,Alert} from 'react-native';
import firebase from './../../../container/pages/database';
import { withNavigation } from '@react-navigation/compat';
class MainfeatureH extends React.Component {

  constructor(props) {
    super(props);

    state = { scroll: true, error: true, showAlert: false };

    this.states = {
      scroll: true,
      data: [],
      showAlert: false,
      dataSources: [],
    };
  }
  handlevoucher = () => {
    var user = firebase.auth().currentUser;

    if (user) {
      this.props.navigation.navigate('Promotion');
    } else {
    Alert.alert("You need to sign in first")
    }
  };


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
          // onPress={() => this.props.navigation.navigate('Promotion')}
          onPress={this.handlevoucher}
          title='SPAREPART VOUCHER'
         
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
