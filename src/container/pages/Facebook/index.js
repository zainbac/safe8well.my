import * as React from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView, StyleSheet, BackHandler, View } from 'react-native';
export default class Facebook extends React.Component {
  constructor() {
    super();
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
      <SafeAreaView style={styles.flexContainer}>
        <WebView
          source={{
            uri: 'https://www.facebook.com/ZBCMARKETING',
          }}
          style={{ marginTop: 20 }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
});
