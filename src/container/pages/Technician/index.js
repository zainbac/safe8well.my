import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  BackHandler,
  Alert,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import * as Linking from 'expo-linking';
import FetchingIndicator from 'react-native-fetching-indicator';
import AwesomeAlert from 'react-native-awesome-alerts';

function Item({ item }) {
  const handlePress = () => {
    Linking.openURL('tel:' + item.nophone);
  };

  return (
    <View>
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

      <ScrollView style={styles.listItem}>
        <Image
          source={{ uri: item.photo }}
          style={{
            width: 90,
            height: 90,
            borderRadius: 40,
            alignItems: 'center',
            alignSelf: 'center',
            alignContent: 'center',
          }}
        />
        <AirbnbRating count={item.id} defaultRating={11} size={20} />

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ textAlign: 'center' }}>{item.position}</Text>
          </View>

          <View>
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                alignContent: 'center',
                flexDirection: 'column',
                alignSelf: 'flex-end',
              }}
              onPress={handlePress}
            >
              <View>
                <Text
                  style={{
                    color: 'green',
                  }}
                >
                  Call
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default class Technician extends Component {
  state = {
    data: [],
    scroll: true,
  };

  constructor(props) {
    super(props);
    //Binding handleBackButtonClick function with this
    this.states = {
      scroll: true,
      data: [],
      dataSources: [],
      showAlert: false,
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  disableScroll() {
    this.setState({ scroll: !this.state.scroll });
  }
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
    this.props.navigation.navigate('Login');
  };

  componentDidMount() {
    fetch('https://mighty-beach-35301.herokuapp.com/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSources: responseJson,
          spinner: true,
        });
        console.log(this.state.dataSources);
      })
      .catch(
        (error) =>
          this.setState({
            error,
            showAlert: true,
          })
        // Example.alert('you have low bandwith')
      ); //to catch the errors if any

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
    showAlert: true, this.props.navigation.goBack(null);
    return true;

    // Return true to enable back button over ride.
    return true;

    // We can move to any screen. If we want
    this.props.navigation.goBack(null);
    // Returning true means we have handled the backpress
    // Returning false means we haven't handled the backpress
    return true;
  }

  render() {
    const { showAlert } = this.state;

    if (this.state.error) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title='Internet Error'
            message='We are unable to process your request'
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
    } else
      return (
        <View style={styles.container}>
          <View style={{ marginTop: 20 }}>
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

            <Text
              style={{
                textAlign: 'center',

                marginTop: 40,
                color: 'white',
                fontSize: 20,

                fontWeight: '100',
              }}
            >
              Authoristed Welepair Technician
            </Text>
          </View>

          {/* <CardPromoApi cards={this.state.dataSource} />
        <FetchingIndicator isFetching /> */}

          {this.state.spinner ? (
            <FlatList
              style={{ flex: 1, position: 'relative', marginTop: 10 }}
              data={this.state.dataSources}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={(item) => item.nophone}
            />
          ) : (
            <View>
              <FetchingIndicator
                isFetching
                style={{
                  flex: 1,
                  position: 'relative',
                  marginTop: 10,
                  position: 'relative',
                }}
              />
            </View>
          )}
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 0,
  },
  listItem: {
    margin: 5,
    padding: 40,
    backgroundColor: '#FFF',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    marginTop: 120,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#4EB151',
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginBottom: 15,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
