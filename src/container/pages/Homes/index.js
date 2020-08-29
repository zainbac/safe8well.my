import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Alert,
  Button,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
// import MainSearch from '../../../../src/components/molecule/SearchFeature';
import Gonews from '../../../../src/components/molecule/GoNews';
// import Internalgo from '../../../../src/components/molecule/Internalgo';
// import SliderEntry from '../../../../src/components/molecule/ScrollableItem';
// import Carousel from '../../../../src/components/organism/Scrollable';
// import Navbarr from '../../../../src/components/organism/NavbarH';
import MainFeatureH from '../../../../src/components/organism/MainFeatureH';
import HomeNaveFeature from '../../../../src/components/organism/HomeNaveFeature';
import HomeCarousel from '../../pages/CarouselHome';
// import Gonews2 from '../../../../src/components/molecule/GoNews2';
// import { withNavigation } from '@react-navigation/compat';
// import ScrollableItemsss from './../../../components/GoNewsBapak';
// import Dashboard from './../../../components/organism/Dashboard';
// import StickyParallaxHeader from 'react-native-sticky-parallax-header';

class Homes extends Component {
  constructor(props) {
    super(props);
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
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1, paddingTop: 0 }}>
        <ParallaxScrollView
          backgroundColor='transparent'
          contentBackgroundColor='transparent'
          parallaxHeaderHeight={270}
          headerHeight={50}
          isHeaderFixed={false}
          parallaxHeight={300}
          renderForeground={() => (
            <View style={{ flex: 1, paddingTop: 0 }}>
              <Image
                style={{
                  flex: 1,
                  paddingTop: 20,
                  justifyContent: 'center',
                  position: 'relative',
                }}
                source={require('./../../../../assets/walpaper.png')}
              />

              <View style={{ marginTop: 0, bottom: 0, alignItems: 'center' }}>
                <Image
                  style={{
                    bottom: 20,
                    width: 390,
                    height: 100,

                    marginHorizontal: 12,
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
                <View
                  style={{
                    bottom: 190,
                  }}
                ></View>
                <View
                  style={{
                    backgroundColor: ' brown',
                    width: 370,
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
                  <HomeNaveFeature style={{ top: 10 }} />
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
            <View style={{ bottom: 30 }}>
              <View style={{ marginHorizontal: 17, paddingTop: 20 }}>
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
              {/* INTETNALGO */}
              <View style={{ paddingTop: 0 }}></View>
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
export default Homes;
