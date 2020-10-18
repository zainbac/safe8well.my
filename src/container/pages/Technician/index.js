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
import ShowAlert from '../../../components/molecule/ShowAlert';

function Item({ item }) {
  const handlePress = () => {
    Linking.openURL('tel:' + item.nophone);
  };

   
  const handlePresss = () => {
    Linking.openURL(
      'whatsapp://send?text=hi ,I would like repair my hospital equipment &phone=06' +
        item.nophone
    );
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
        <View style={{}}>
          <View style={{ top: 22 }}>
            <AirbnbRating
              style={{ bottom: 40 }}
              count={item.rating}
              defaultRating={11}
              size={20}
            />
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}
            >
              Rating :
            </Text>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{}}>{item.position}</Text>

            <TouchableOpacity
              style={{
                height: 50,
                width: 200,
                marginTop: 10,
                marginBottom: 20,
                alignContent: 'center',
                alignSelf: 'center',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
              onPress={handlePress}
            >
              <View
                style={{
                  backgroundColor: 'green',
                  paddingVertical: 10,
                  paddingHorizontal: 0,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  width: 150,
                  alignItems: 'center',

                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignContent: 'center',
                    alignSelf: 'center',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                  }}
                >
                  Call
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 150,
                fontWeight: 'bold',
                alignSelf: 'center',
                bottom: 20,
              }}
              onPress={handlePresss}
            >
              <View>
                <View
                  style={{
                    backgroundColor: '#4e70f6',
                    paddingVertical: 14,
                    fontWeight: 'bold',
                    paddingHorizontal: 0,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={styles.buttonText}>Send him text message</Text>
                </View>
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
            message=' Sorry :( We are unable to process your request'
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
                flexWrap: 'wrap',
                marginTop: 40,
                color: 'white',
                fontSize: 20,
                flex: 1,
                alignContent: 'flex-end',
                alignItems: 'flex-end',
                alignSelf: 'flex-end',
                justifyContent: 'flex-end',
                textAlign: 'right',
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
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 11,
  },
  listItem: {
    margin: 20,
    padding: 20,
    backgroundColor: '#FFF',
    width: '90%',
    flex: 1,

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
