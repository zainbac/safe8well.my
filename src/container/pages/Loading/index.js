import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  ImageBackground,
} from 'react-native';
import { Card, ListItem, Icon, Button } from 'react-native-elements';
import Dashboard from './../../../components/organism/Dashboard';

class Loading extends Component {
  constructor(props) {
    super(props);
    //Binding handleBackButtonClick function with this
    this.state = {
      scroll: true,
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

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
    const { animationState } = this.state;
    return (
      <View style={{ flex: 1}}>
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
            paddingTop:10,
            marginHorizontal:1,
            
          }}
        >
          <View style={{ paddingTop:20,marginHorizontal:0,alignSelf:'center',alignItems:'center',alignContent:'center' }}>
            <Text
              maxLength={10}
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: 'white',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                textAlign: 'center',

                flexWrap: 'wrap',
              }}
            >
              Pless appear your ID member card at our Counter to enjoy Discount
              Member Price
            </Text>
            <View style={{   alignContent:'center',alignSelf:'center' }}>
              <Image
                source={require('../../../../assets/cardX.png')}
                style={{
                  height: 400,
                  width: 360,
                  alignItems: 'center',
                  marginHorizontal: 0,
                
                }}
              />

              <View
                style={{
                  paddingTop: 16,
                  paddingBottom: 20,
                  

                  alignItems: 'flex-start',
                  alignContent:'flex-start',
                  alignSelf:'center',
                  right:0,
                  
                  bottom: 290,
                
                }}
              >
                <Dashboard />
              </View>
            </View>

            <View>
              <View
               
              ></View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default Loading;
