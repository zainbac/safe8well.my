import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { Card, ListItem, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { db } from './../database2';
import ItemComponent from './../../pages/Order';

let itemsRef = db.ref('/1xxXA9Kf9vWZxeBajpcebJLfbeyi-EJy_69DSJadPzSw/Sheet1');

export default class ScanQRCode extends React.Component {
  state = {
    hasCameraPermission: null,
    barcodeType: '',
    barcodeData: '',
    name: '',
    itemss: [],
    loading: false,
  };

  //ALERT

  _;

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({
      barcodeType: type,
      barcodeData: data,
    });
    var x = data;
    itemsRef
      .orderByChild('SERIAL NO')
      .equalTo(x)
      .limitToLast(1)
      .once('value')
      .then('value', (snapshot) => {
        let data = snapshot.val();
        let items = Object.values(data);
        this.setState({ items });
      });
    /*alert(`Bar code with type ${type} and data ${data} has been scanned!`);*/
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  getRef = () => {
    return itemsRef;
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
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* 
                <View style={styles.itemsList}>
                    {this.props.ID.map((item, index) => {
                        return (
                            <View key={index}>
                                <Text style={styles.itemtext}>{item.name}</Text>
                            </View>
                        );
                    })}
                </View> */}

        <View
          style={{ flex: 1, backgroundColor: 'transparent', marginBottom: 0 }}
        >
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 16,
              marginTop: 30,
              justifyContent: 'space-between',
              positon: 'absolute',
              top: 0,
              left: 0,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 80,
              }}
            ></View>
            {/* <ReactCamera /> */}

            <View
              style={{
                alignItems: 'center',
                marginTop: 5,
                width: 1200,
                height: 400,
                right: 480,
                flexDirection: 'column',
                justifyContent: 'flex-start',

                alignItems: 'center',
              }}
            >
              <BarCodeScanner
                onBarCodeScanned={this.handleBarCodeScanned}
                style={[StyleSheet.absoluteFill, styles.container]}
              />
              <View style={styles.container}>
                {this.state.items.length > 0 ? (
                  <ItemComponent items={this.state.items} />
                ) : (
                  <Text>No items</Text>
                )}
              </View>
              <View>
                <Text style={styles.description}>SCAN BARCODE STICKER </Text>

                <Image
                  style={styles.qr}
                  source={require('./../../../../assets/tm1.png')}
                />
                <Text
                  onPress={() => this.props.navigation.pop()}
                  style={styles.cancel}
                >
                  Cancel
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* alert firebase buttton*/}

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#ebebeb',
            bottom: 10,
          }}
        ></View>

        <View
          style={{
            height: 280,
            backgroundColor: 'transparent',
            paddingHorizontal: 0,
            marginBottom: 0,
            marginTop: 420,
            marginBottom: 10,
          }}
        >
          <Card style={{ marginBottom: 200 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: 'black',
                  fontWeight: 'bold',
                  marginLeft: 28,
                }}
              >
                {' '}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#b0187c',
                  fontWeight: 'bold',
                  right: 20,
                }}
              >
                {' '}
                YOUR SERIAL RENTAL EQUIPMENT IS{' '}
              </Text>
              <View style={styles.container}>
                <Text> {this.state.barcodeData}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                top: 90,
                alignItems: 'center',
              }}
            >
              <Text
                style={{ fontSize: 25, color: '#b0187c', fontWeight: 'bold' }}
              >
                {' '}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  color: '#b0187c',
                  fontWeight: 'bold',
                  bottom: 30,
                  right: 20,
                }}
              >
                {' '}
                THIS MONTH PAYMENT STATUS{' '}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginTop: 14,
                width: '100%',
                justifyContent: 'space-between',
                paddingLeft: 10,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  width: 160,
                  justifyContent: 'space-between',
                }}
              ></View>

              {/* belah kiri tekt inser sini */}
              <Text
                style={{
                  fontSize: 18,
                  textAlign: 'center',
                  color: '#ff2b3a',
                  fontWeight: 'bold',
                  bottom: 220,
                  right: 80,
                }}
              >
                {' '}
                {this.state.barcodeData}
              </Text>
            </View>
          </Card>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: '#ff2b3a',
            marginBottom: 0,
            top: 0,
          }}
        />
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
    marginTop: '20%',
    marginBottom: '20%',
    width: qrSize,
    height: qrSize,
  },
  description: {
    fontSize: 15,
    marginTop: '10%',
    textAlign: 'center',
    width: '70%',
    color: 'white',
    justifyContent: 'flex-end',
    top: 230,
    left: 50,
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
