import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  BackHandler,
  Dimensions,
  ImageBackground,
  Alert,
} from 'react-native';
import { CardPromoApi } from './../../../components/organism/CardPromoApi';
import FetchingIndicator from 'react-native-fetching-indicator';
 

export default class Promotion extends Component {
  constructor(props) {
    super(props);
    //Binding handleBackButtonClick function with this

    this.state = {
      scroll: true,

      dataSource: [],
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  disableScroll() {
    this.setState({ scroll: !this.state.scroll });
  }

  componentDidMount() {
    
    fetch('https://lit-sands-32641.herokuapp.com')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
          spinner: true,
        });
        console.log(responseJson);
      })
      .catch((error) => Alert.alert('SORRY :( . failed internet connectivty')); //to catch the errors if any

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
    return (
      <View style={styles.container}>
        {/* <CardPromoApi cards={this.state.dataSource} />
        <FetchingIndicator isFetching /> */}

        <ImageBackground
          source={require('./../../../../assets/login1.png')}
          style={{
            position: 'absolute',
            width: 20000,
            height: 1000,

            top: 0,

            left: 0,
          }}
        ></ImageBackground>

        {this.state.spinner ? (
          <CardPromoApi cards={this.state.dataSource} />
        ) : (
          <FetchingIndicator isFetching />
        )}
      </View>
    );
  }
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
