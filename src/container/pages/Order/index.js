import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { Card, ListItem, Icon, Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import Navbarr from '../../../../src/components/organism/NavbarH';
import GoOxygen from '../../../../src/components/molecule/GoMiniXsr';
import GoCaj from '../../../../src/components/molecule/GoCaj';
import GoBed from '../../../../src/components/molecule/GoBed';

class Order extends Component {
  constructor(props) {
    super(props);
    //Binding handleBackButtonClick function with this
    this.state = {
      scroll: true,
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  state = {
    visibleModal: null,
  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
          I Need Assistant{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );

  _renderButtona = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttona}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>OK</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
        FOR AWHILE OUR SERVICES ARE COVERED WITHIN JOHOR BHARU AND KUALA LUMPUR
        & KLANG VALLEY AREA
      </Text>
      <Text style={{ fontWeight: 'bold' }}>HQ OFFICE: TEL: 0134472956</Text>
      {this._renderButtona('Close', () =>
        this.setState({ visibleModal: null })
      )}
    </View>
  );

  disableScroll() {
    this.setState({ scroll: !this.state.scroll });
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
    this.props.navigation.goBack(null);
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
  render() {
    const { navigate } = this.props.navigation;

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
        <View
          style={{
            flex: 1,
            paddingTop: 40,

            marginBottom: 50,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 17,
              color: 'white',
            }}
          >
            Hi , What do you like to rent ?{' '}
          </Text>

          <ScrollView horizontal={true} style={{ flex: 1, marginTop: 20 }}>
            <GoBed onPress={() => this.props.navigation.navigate('RentCaj')} />
            {/* <GoSsc /> */}
            <GoCaj
              onPress={() => this.props.navigation.navigate('Rentkatil')}
            />
            <GoOxygen
              onPress={() => this.props.navigation.navigate('RentM11')}
            />

            <View>
              <View
                style={{ justifyContent: 'flex-end', right: 320, bottom: 20 }}
              ></View>
            </View>
          </ScrollView>
          {this._renderButton('A slower modal', () =>
            this.setState({ visibleModal: 3 })
          )}

          <Modal
            isVisible={this.state.visibleModal === 3}
            animationInTiming={2000}
            animationOutTiming={2000}
            backdropTransitionInTiming={2000}
            backdropTransitionOutTiming={2000}
          >
            {this._renderModalContent()}
          </Modal>
        </View>
        <Button
          title='CLICK HERE TO KNOW OUR PROCESS
        '
          onPress={() => this.props.navigation.navigate('OrderDetail')}
        />
      </View>
    );
  }
}
export default Order;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3a5898',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  buttona: {
    backgroundColor: '#398bf1',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
