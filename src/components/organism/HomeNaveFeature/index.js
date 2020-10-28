import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  BackHandler,
  Alert,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import NavFeature from '../../../../src/components/molecule/NavFeature';
import { withNavigation } from '@react-navigation/compat';
import firebase from './../../../container/pages/database';
import { Card, ListItem, Icon } from 'react-native-elements';
import AwesomeAlert from 'react-native-awesome-alerts';
import ShowAlert from '../../../../src/components/molecule/ShowAlert';
//icon biru atas

class HomeNaveFeature extends Component {
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
  handleSignUpp = () => {
    var user = firebase.auth().currentUser;

    if (user) {
      Alert.alert('You have already Sign in');
    } else {
      this.props.navigation.navigate('Login');
    }
  };

  handletech = () => {
    var user = firebase.auth().currentUser;

    if (user) {
      this.props.navigation.navigate('Technician');
    } else {
      Alert.alert('You need to Sign in');
    }
  };

  handletech2 = () => {
    var user = firebase.auth().currentUser;

    if (user) {
      this.props.navigation.navigate('Order');
    } else {
      Alert.alert('You need to Sign in');
    }
  };



  disableScroll() {
    this.setState({ scroll: !this.state.scroll });
  }

  handleSignUppp = () => {
    var user = firebase.auth().currentUser;

    if (user) {
      Alert.alert('You have already Sign in');
    } else {
      this.props.navigation.navigate('Login');
    }
  };

  handleCard = () => {
    var user = firebase.auth().currentUser;

    if (user) {
      this.props.navigation.navigate('Loading');
    } else {
      Alert.alert('User need to Login First');

      <ShowAlert />;

      // Example.alert('you have low bandwith')
      //to catch the errors if any
    }
  };

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1,

          height: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 15,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 15,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 10,
          marginHorizontal: 5,
          paddingBottom: 0,
          padding: 10,
        }}
      >
        <NavFeature
          onPress={this.handleCard}
          title='I-CARD'
          img={require('../../../../assets/tm5.png')}
        />

        <NavFeature
          onPress={() => this.props.navigation.navigate('Order')}
          title='RENT'
          img={require('../../../../assets/tm66.png')}
        />

        <NavFeature
          onPress={this.handletech}
          title='TECHNICIAN'
          img={require('../../../../assets/tm4.png')}
        />

        <NavFeature
          onPress={this.handleSignUpp}
          title='LOGIN'
          img={require('../../../../assets/tm3.png')}
        />
      </View>
    );
  }
}
//export default HomeNaveFeature;

export default withNavigation(HomeNaveFeature);
