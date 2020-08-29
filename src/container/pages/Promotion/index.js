import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, BackHandler } from 'react-native';
import { CardPromoApi } from './../../../components/organism/CardPromoApi';

const cards = [
  {
    id: '0',
    title: '',
    barcode: '12345',
    picture: {
      uri:
        'https://www.absdigital.my/wp-content/uploads/2019/06/pemasaran-kedai-makan.jpg',
    },
    content: (
      <Text style={{ textAlign: 'center' }}>
        Please appear barcode below at cashier counter
      </Text>
    ),
  },
  {
    id: '1',
    title: 'Wheat Field',
    barcode: '12315',
    picture: require('./../../../../assets/walpaper.png'),
    content: <Text>Wheat Field with Cypresses</Text>,
  },
  {
    id: '2',
    barcode: '123152',
    title: 'Bedroom in Arles',
    picture: require('./../../../../assets/download.jpg'),
    content: <Text>Bedroom in Arles</Text>,
  },
];

export default class Promotion extends Component {
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
    return (
      <View style={styles.container}>
        <CardPromoApi cards={cards} />
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
