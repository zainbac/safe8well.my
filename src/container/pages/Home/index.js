import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  BackHandler,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import Gonews from '../../../../src/components/molecule/GoNews';

import MainFeatureH from '../../../../src/components/organism/MainFeatureH';
import HomeNaveFeature from '../../../../src/components/organism/HomeNaveFeature';
import firebase from './../../../container/pages/database';
import HomeCarousel from '../../pages/CarouselHome';
import Gonews2 from '../../../../src/components/molecule/GoNews2';
import { withNavigation } from '@react-navigation/compat';
import ScrollableItemsss from './../../../components/GoNewsBapak';
import Dashboard from './../../../components/organism/Dashboard';
class Home extends Component {
  constructor() {
    super();
    //Binding handleBackButtonClick function with this
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.handleSignUppp = this.handleSignUppp.bind(this);

    this.state = {
      loaded: false,
    };
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
    Alert.alert(
      ' Exit From App ',
      ' Do you want to exit From App ?',
      [
        { text: 'Yes', onPress: () => BackHandler.exitApp() },
        { text: 'No', onPress: () => console.log('NO Pressed') },
      ],
      { cancelable: false }
    );

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
  handleSignUppp = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        console.log('User Logged Out!');
        Alert.alert('User Logged Out!. Pless sign out Again');
        return true;
      })

      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 2,
          marginBottom: 0,
        }}
      >
        <ParallaxScrollView
          backgroundColor='transparent'
          contentBackgroundColor='transparent'
          parallaxHeaderHeight={260}
          renderForeground={() => (
            <View style={{ flex: 1, paddingTop: 20 }}>
              <Image
                style={{
                  flex: 1,
                  paddingTop: 20,
                  position: 'relative',
                }}
                source={require('./../../../../assets/walpaper.png')}
              />
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    'Logout Session',
                    'Would you like  to Logout your session  ?',
                    [
                      { text: 'Yes', onPress: this.handleSignUppp },
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed!'),
                      },
                    ],
                    { cancelable: false }
                  )
                }
                style={{ position: 'absolute' }}
              >
                <Image
                  style={{
                    width: 50,
                    marginTop: 30,
                    marginHorizontal: 17,
                    height: 50,
                  }}
                  source={require('./../../../../assets/exit.png')}
                />
              </TouchableOpacity>
              <View
                style={{
                  marginTop: -27,
                  bottom: 0,
                  marginTop: 0,
                  bottom: 0,
                  alignItems: 'center',
                }}
              >
                <Image
                  style={{
                    bottom: 20,
                    width: 390,
                    height: 100,

                    marginHorizontal: 13,
                    justifyContent: 'center',
                    marginTop: 0,
                    justifyContent: 'center',
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 12,
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 12,
                  }}
                  source={require('./../../../../assets/walpaper.png')}
                />

                {/* <View
                  style={{
                    bottom: 190,

                    alignSelf: 'flex-start',
                  }}
                >
                  <Dashboard />
                </View> */}

                <View
                  style={{
                    backgroundColor: ' brown',
                    width: 390,
                    height: 60,

                    marginTop: 0,
                    justifyContent: 'center',
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    position: 'absolute',
                    marginBottom: 10,
                  }}
                >
                  <HomeNaveFeature style={{ position: 'relative', top: 10 }} />
                </View>
              </View>
            </View>
          )}
        >
          <View
            style={{
              flex: 1,
              paddingTop: 0,
              paddingBottom: 0,
              marginHorizontal: 0,
            }}
          >
            <View style={{ bottom: 0 }}>
              <View style={{ marginHorizontal: 17 }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,

                    color: '#434449',
                  }}
                >
                  SAFE & WELL.MY
                </Text>
              </View>
              <MainFeatureH />

              <View
                style={{
                  marginHorizontal: 17,
                  fontWeight: 'bold',
                  fontSize: 14,
                  top: 20,
                }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    marginTop: 5,
                    color: '#434449',
                    color: '#434449',
                  }}
                >
                  SAFE & WELL PROMOTION
                </Text>
              </View>

              <View style={{ paddingTop: 20 }}></View>
            </View>
            <HomeCarousel
              style={{
                position: 'relative',
              }}
            />
            <Gonews
              onPress={() => this.props.navigation.navigate('Facebook')}
            ></Gonews>
          </View>
        </ParallaxScrollView>

        {/* <View style={{ alignItems: 'flex-end', right: 320 }}>
          <Navbarr />
        </View> */}
      </View>
    );
  }
}
export default Home;
