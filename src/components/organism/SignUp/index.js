// Login.js
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Image,
  TouchableOpacity,
  BackHandler,
  ImageBackground,
} from 'react-native';
import { Button } from 'react-native-elements';
import firebase from './../../../container/pages/database';
import { SocialIcon } from 'react-native-elements';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    //Binding handleBackButtonClick function with this
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      Name: '',
      Email: '',
      displayName: '',
      uide: '',
      loading: false,
      isLoading: true,
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
  handleBackButtonClick(user) {
    // Registered function to handle the Back Press
    // To popup the default screen while going back you can use goBack
    this.props.navigation.navigate('Login');
    // To exit from your App you can use BackHandler.exitApp();.
    // Just comment the above line and uncomment the below to use it
    //BackHandler.exitApp();
    // Returning true means we have handled the backpress
    // Returning false means we haven't handled the backpress
    // Try to make it false also
    return true;
  }

  state = {
    isValid: null,
    email: '',
    uide: '',
    password: '',
    errorMessage: null,
    displayName: '',
    isFocused: false,
    isLoading: false,
    errorr: '',
  };
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  CheckTextInput = () => {
    //Handler for the Submit onPress
    if (
      this.state.uide.length < 6 ||
      this.state.displayName == '' ||
      (this.state.email === '' && this.state.password === '')
    ) {
      Alert.alert('Please fill the form  with correct format');
      this.setState({
        isLoading: false,
        errorr:
          'Name and Membership invalid. Please call  03-5885 3936 for registration',
      });
    } else {
      this.setState({
        isLoading: false,
        errorr: 'Name and Membership empty',
      });
      var user = {
        displayName: this.state.displayName,

        uide: this.state.uide,
      };
      firebase
        .database()
        .ref('users/' + user.displayName)
        .set(user)
        .catch((error) => {
          Alert.alert('Please fill the form  with correct format');
        });

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.displayName,
          });

          console.log('User registered successfully!');
          this.setState({
            isLoading: true,
            displayName: '',
            email: '',
            uide: '',
            password: '',
          });

          Alert.alert('Well Done. You are already Register');

          this.props.navigation.navigate('Login');
        })
        .catch((error) => this.setState({ errorMessage: error.message }));
    }

    //   handleSignUp = () => {
    //     if (
    //      this.state.email === '' &&
    //       this.state.password === '' &&
    //      this.state.displayName === ''
    //    ) {
    //      this.setState({
    //        isLoading: false,
    // //     });

    //     Alert.alert('Pless enter your display name');
    //   } else {
    //     this.setState({
    //       isLoading: true,
    //     });
    //     firebase
    //       .auth()
    //       .createUserWithEmailAndPassword(this.state.email, this.state.password)
    //       .then((res) => {
    //         res.user.updateProfile({
    //           displayName: this.state.displayName,
    //         });

    //         console.log('User registered successfully!');
    //         this.setState({
    //           isLoading: true,
    //           displayName: '',
    //           email: '',
    //           password: '',
    //         });

    //         Alert.alert('Well Done. You are already Register');
    //         this.props.navigation.navigate('Login');
    //       })
    //       .catch((error) => this.setState({ errorMessage: error.message }));
    //   }
    // };
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
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

        <View style={styles.loginbox}>
          <View style={styles.logincontainer}>
            <Image
              source={require('./../../../../assets/logo1.png')}
              style={styles.logo}
            ></Image>
            {this.state.errorMessage && (
              <Text
                style={{ color: 'pink', fontWeight: 'bold', paddingTop: 10 }}
              >
                {this.state.errorMessage}
              </Text>
            )}
            <Text style={styles.logintext}></Text>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
              style={styles.inputemail}
              placeholder={'Name'}
              maxLength={14}
              placeholderTextColor={'grey'}
              underlineColorAndroid='transparent'
              onChangeText={(val) => this.updateInputVal(val, 'displayName')}
              onChangeText={(displayName) => this.setState({ displayName })}
              value={this.state.displayName}
            ></TextInput>
            <View style={{ marginTop: 20 }}>
              <TextInput
                style={styles.inputemail}
                placeholder={'Membership No'}
                maxLength={6}
                numeric
                value
                keyboardType={'numeric'}
                placeholderTextColor={'grey'}
                underlineColorAndroid='transparent'
                onChangeText={(uide) => this.setState({ uide })}
                value={this.state.uide}
              ></TextInput>
            </View>
            <View style={{ alignSelf: 'flex-start', marginHorizontal: 19 }}>
              {/* <TouchableOpacity onPress={this.CheckTextInput}>
                <Text style={{ color: 'green', fontSize: 9 }}>
                  Check your avalability name
                </Text>
              </TouchableOpacity> */}
            </View>
            <View style={{ marginTop: 20 }}>
              <TextInput
                style={styles.inputemail}
                placeholder={'Email'}
                autoCapitalize='none'
                placeholderTextColor={'grey'}
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
              ></TextInput>
            </View>
            <TextInput
              secureTextEntry
              style={styles.inputpass}
              placeholder={'Password'}
              placeholderTextColor={'grey'}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            ></TextInput>

            {this.state.errorr && (
              <Text style={{ color: 'red', fontSize: 9, paddingTop: 10 }}>
                {this.state.errorr}
              </Text>
            )}
            <View style={styles.buttonarea}>
              <View style={{ marginTop: 10 }}>
                <Button
                  onPress={this.CheckTextInput}
                  style={styles.signinbutton}
                  title='Register'
                  color='#3a87f1'
                />
              </View>

              <View style={{ marginTop: 10 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Login')}
                  color='#3a87f1'
                >
                  <Text
                    style={{
                      color: '#4e70f6',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: 12,
                    }}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginbox: {
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  logincontainer: {
    alignItems: 'center',
  },
  logo: {
    height: 130,
    width: 130,
  },
  logintext: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5,
  },
  inputemail: {
    textAlign: 'center',
    width: 300,
    height: 45,
    borderRadius: 15,
    fontSize: 16,
    paddingLeft: 15,
    backgroundColor: '#c5c9cc79',
    color: 'black',
  },
  inputpass: {
    textAlign: 'center',
    width: 300,
    height: 45,
    borderRadius: 15,
    fontSize: 16,
    paddingLeft: 15,
    backgroundColor: '#c5c9cc79',
    color: 'black',

    marginTop: 20,
  },
  forgotpass: {
    marginTop: 20,
    marginLeft: 120,
    borderBottomWidth: 1,
  },
  buttonarea: {
    marginTop: 30,
    marginHorizontal: 40,
  },
  startBtn: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    width: '50%',
    alignItems: 'center',
    marginTop: 50,
  },
  startText: {
    color: 'transparent',
  },
  textInput: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',

    borderBottomWidth: 1,
  },
});
