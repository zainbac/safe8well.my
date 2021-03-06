import React, { Component, useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import {
  Dimensions,
  Text,
  ImageBackground,
  View,
  StyleSheet,
  Button,
  Image,
  FlatList,
  BackHandler,
} from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import * as Linking from 'expo-linking';

import { Alert } from 'react-native-elements';
import AwesomeAlert from 'react-native-awesome-alerts';

import firebase from './../../../container/pages/database';
const db = firebase.database();

let itemsRef = db.ref('/1xxXA9Kf9vWZxeBajpcebJLfbeyi-EJy_69DSJadPzSw/Sheet1');

export default class ScanQRCode extends Component {
  constructor(props) {
    super(props);
    this.states = {
      showAlert: false,
    };
    //Binding handleBackButtonClick function with this
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  componentDidMount() {
    // This is the first method in the activity lifecycle
    // Addding Event Listener for the BackPress
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick
    );
  }
  componentWillUnmount() {
    // This is the Last method in the activity lifecycle
    // Removing Event Listener for the BackPress
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick
    );
  }
  handleBackButtonClick() {
    // Registered function to handle the Back Press
    // We are generating an alert to show the back button pressed
    this.props.navigation.navigate('Home');
    return true;

    // Return true to enable back button over ride.
    return true;

    // We can move to any screen. If we want
    this.props.navigation.goBack(null);
    // Returning true means we have handled the backpress
    // Returning false means we haven't handled the backpress
    return true;
  }
  static navigationOptions = {
    //Setting the header of the screen
    title: 'Second Page',
  };
  state = {
    hasCameraPermission: null,
    barcodeType: '',
    barcodeData: '',
    scroll: true,
    showAlert: false,
    name: '',
    Sheet1: null,
    title: [],
    loading: false,
  };

  //ALERT

  showAlert = () => {
    this.setState({
      showAlert: true,
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };

  fuckAlert = () => {
    this.setState({
      showAlert: false,
    });
    this.props.navigation.navigate('Homes');
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick
    );
  }

  handleBarCodeScanned = ({ type, data, hantu }) => {
    if (
      data.includes('*') ||
      data.length > 13 ||
      data === '' ||
      data.indexOf(' ') >= 0
    ) {
      this.setState({
        error: true,
        showAlert: true,
      });
    } else {
      this.setState({
        barcodeType: type,
        barcodeData: data,
        hantu: [],
      });

      var x = data;

      itemsRef
        .orderByChild('SERIAL NO')
        .equalTo(x)
        .limitToLast(1)
        .once('value', function (snapshot) {
          let data = snapshot.val();
          let Sheet1 = Object.values(data);

          var title = [];
          //console.log(Sheet1);

          snapshot.forEach(function (child) {
            console.log(title);
            var url = child.val().STATUS;
            alert(`This is Your Serial No :${child.val().STATUS}.  `);

            Linking.openURL(
              'https://wa.me/60134472956?text=I%20interested%20to%20buy%20your%20rental%20equipment%20with%20serialo%20No%20code%20 : %20' +
                url
            );
          });
        });
    }
    /alert(`Bar code with type ${type} and data ${data} has been scanned!`);/;
  };

  //   componentDidMount() {
  //     console.log(itemsRef);
  //     itemsRef.on('value', (snapshot) => {
  //       let data = snapshot.val();
  //       console.log(data);
  //       //  let Sheet1 = Object.values(data);
  //       //  this.setState({ Sheet1 });
  //     });
  //   }

  render() {
    {
      const { showAlert } = this.state;
      if (this.state.error)
        return (
          <View style={{ justifyContent: 'center', backgroundColor: '#fff' }}>
            <ImageBackground
              source={require('./../../../../assets/login1.png')}
              style={{
                position: 'absolute',
                flex: 1,
                width: 420,
                bottom: 0,
                top: 20,
                height: 900,
                left: 0,
              }}
            ></ImageBackground>
            <AwesomeAlert
              style={{
                justifyContent: 'center',
                backgroundColor: 'transparent',
              }}
              show={showAlert}
              showProgress={false}
              title='Error'
              message=' Sorry :( We are unable to process your request because the rental equipment is not valid to buy yet'
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              showCancelButton={true}
              showConfirmButton={true}
              cancelText='No, cancel'
              confirmText='Logout'
              confirmButtonColor='#DD6B55'
              onCancelPressed={() => {
                this.fuckAlert();
              }}
              onConfirmPressed={() => {
                this.hideAlert();
                BackHandler.exitApp();
              }}
            />
          </View>
        );
    }
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('./../../../../assets/login1.png')}
          style={{
            position: 'absolute',
            flex: 1,
            width: 420,
            bottom: 0,
            top: 20,
            height: 720,
            left: 0,
          }}
        ></ImageBackground>
        <View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 16,
              marginTop: 0,
              justifyContent: 'space-between',
              positon: 'absolute',
              top: 0,
              left: 0,
            }}
          >
            {/* <ReactCamera /> */}

            <View
              style={{
                alignItems: 'center',
                marginTop: 50,
                width: 660,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 4,
                height: 660,
                alignContent: 'flex-start',
                right: 140,
                justifyContent: 'center',
              }}
            >
              <BarCodeScanner
                onBarCodeScanned={this.handleBarCodeScanned}
                style={[StyleSheet.absoluteFill]}
              />

              <View />
              <View>
                <Text style={styles.description}>
                  SCAN RENTAL BARCODE HERE{' '}
                </Text>
              </View>
              <Image
                style={styles.qr}
                source={require('./../../../../assets/CAMERA.png')}
              />
            </View>
          </View>
        </View>

        {/* alert firebase buttton*/}
      </View>
    );
  }
}

const opacity = 'rgba(0, 0, 0, .6)';

const { width } = Dimensions.get('window');
const qrSize = width * 0.7;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 6,
  },
  qr: {
    marginTop: '10%',
    marginBottom: '20%',
    width: qrSize,
    height: qrSize,
  },
  description: {
    fontSize: 16,

    marginTop: '10%',
    textAlign: 'center',
    width: '70%',
    color: 'white',

    justifyContent: 'flex-end',
  },

  cancel: {
    fontSize: width * 0.05,
    textAlign: 'center',
    width: '70%',
    color: 'white',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
