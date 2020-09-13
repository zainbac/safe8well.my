import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  BackHandler,
  Alert,
} from 'react-native';
import { CardPromoApi } from './../../../components/organism/CardPromoApi';
import FetchingIndicator from 'react-native-fetching-indicator';
// const cards = [
//   {
//     id: '0',
//     title: 'ZBC PHARMACY',
//     barcode: '12345',
//     picture: {
//       uri: 'https://i.ibb.co/Stpswg9/COUPON0.png',
//     },

//     content: ' HANDBRAKE SPAREPART PRICE : RM24',
//   },
//   {
//     id: '1',
//     title: 'ZBC PHARMACY',
//     barcode: '12315',
//     picture: { uri: 'https://i.ibb.co/TBN0BSC/COUPON1.png' },
//     content: 'WHEELCHAIR TYRE 22,24 INCH : RM99',
//   },
//   {
//     id: '2',
//     barcode: '123152',
//     title: 'ZBC PHARMACY',
//     picture: {
//       uri: 'https://i.ibb.co/hy549WW/COUPON2.png',
//     },
//     content: 'CASTOR WHEELCHAIR 8IN NARROW : RM33',
//   },

//   {
//     id: '3',
//     barcode: '123152',
//     title: 'ZBC PHARMACY ',
//     picture: { uri: 'https://i.ibb.co/QrXSrbd/COUPON3.png' },
//     content: 'MAG WHEEL & FF TYRE 16IN : RM130',
//   },

//   {
//     id: '4',
//     barcode: '123152',
//     title: 'ZBC PHARMACY ',
//     picture: { uri: 'https://i.ibb.co/LvF4BJf/COUPON4.png' },
//     content: 'PART-ARMREST PAD 10IN RUBBER : RM31',
//   },

//   {
//     id: '5',
//     barcode: '123152',
//     title: 'ZBC PHARMACY ',
//     picture: { uri: 'https://i.ibb.co/dGm7Mvq/COUPON5.png' },
//     content: 'PART-6/8IN RUBBER TIP (2PCS) : RM8.60',
//   },

//   {
//     id: '6',
//     barcode: '123152',
//     title: 'ZBC PHARMACY ',
//     picture: { uri: 'https://i.ibb.co/C91Q8hb/COUPON6.png' },
//     content: 'FOOTPLATE PLASTIC FOR WHEELCHAIR (1PAIR) : RM66',
//   },
// ];

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
    <FetchingIndicator isFetching={this.state.isFetching} />;
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
        <FetchingIndicator isFetching />
        {this.state.spinner ? (
          <CardPromoApi cards={this.state.dataSource} />
        ) : (
          <View></View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
