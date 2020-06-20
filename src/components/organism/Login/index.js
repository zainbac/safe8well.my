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
  ImageBackground,
} from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from './../../../container/pages/database';

export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null, isFocused: false };
  handleSignUpppd = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        console.log('User Logged Out!');

        return true;
      })

      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
    this.props.navigation.navigate('Homes');
  };

  onResetPasswordPress = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then(
        () => {
          Alert.alert('Password reset email has been sent.');
        },
        (error) => {
          Alert.alert('Please input your email at the text input');
        }
      );
  };

  handleLogin = () => {
    if (this.state.email === '' && this.state.password === '') {
      // Alert.alert('Enter details to signin!');
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log(res);
          console.log('User logged-in successfully!');
          this.setState({
            isLoading: false,
            email: '',
            password: '',
          });
          this.props.navigation.navigate('Home');
        })
        .catch((error) => this.setState({ errorMessage: error.message }));
    }
  };
  render() {
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
              placeholder={'Email'}
              placeholderTextColor={'grey'}
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            ></TextInput>
            <TextInput
              secureTextEntry
              style={styles.inputpass}
              placeholder={'Password'}
              placeholderTextColor={'grey'}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            ></TextInput>
            <Text
              onPress={() => this.props.navigation.navigate('ForgotPassword')}
              style={{
                color: '#4e70f6',
                alignContent: 'flex-end',
                alignItems: 'flex-end',
                alignSelf: 'flex-start',
                marginHorizontal: 20,
                fontSize: 12,
                fontWeight: 'bold',
              }}
            >
              Forgot Password ?
            </Text>

            <View style={styles.buttonarea}>
              {/* <Button
                onPress={this.handleLogin}
                style={styles.signinbutton}
                title='LOGIN'
                color='#37b05c'
              /> */}
              <Button
                ViewComponent={LinearGradient} // Don't forget this!
                onPress={this.handleLogin}
                style={styles.signinbutton}
                title='Sign in'
                linearGradientProps={{
                  colors: ['#003dbc', '#003dbc'],
                  start: { x: 0, y: 0.5 },
                  end: { x: 1, y: 0.5 },
                }}
              />

              <View style={{ marginTop: 10 }}>
                <Button
                  ViewComponent={LinearGradient} // Don't forget this!
                  onPress={() => this.props.navigation.navigate('Signup')}
                  style={styles.signinbutton}
                  title='Register'
                  color='blue'
                  linearGradientProps={{
                    colors: ['#4e70f6', '#4e70f6'],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                  }}
                />
              </View>
              <View style={{ marginTop: 10 }}></View>
              <View style={{ marginTop: 10 }}>
                <TouchableOpacity
                  onPress={this.handleSignUpppd}
                  color='#39ff14'
                >
                  <Text
                    style={{
                      color: '#4e70f6',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}
                  >
                    Continue as Guest ?
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
    // fontWeight: '500',
    marginTop: 10,
    opacity: 0.5,
  },
  inputemail: {
    textAlign: 'center',
    width: 300,
    height: 45,
    borderRadius: 15,
    fontSize: 16,
    justifyContent: 'center',
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
    width: '70%',
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

    textAlign: 'center',
    color: 'white',

    borderBottomWidth: 1,
  },
});
