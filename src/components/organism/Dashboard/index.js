import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from './../../../container/pages/database';

const db = firebase.database();

let itemsRef = db.ref('/users');

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: '',
      url: '',
      users: [],
    };
  }
  state = {
    url: '',
    title: [],
    loading: false,
  };

  getData() {
    var x = firebase.auth().currentUser.displayName;

    var self = this;
    itemsRef
      .orderByChild('displayName')
      .equalTo(x)
      .limitToLast(1)
      .once('value', (snapshot) => {
        let data = snapshot.val();
        let Sheet1 = Object.values(data);
        console.log(data);
        let newState = [];

        //console.log(Sheet1);

        snapshot.forEach(function (childSnapshot) {
          var url = childSnapshot.val().uide;

          // alert(`This is Your Serial No :${child.val().uide}.  `);

          newState.push({
            uide: childSnapshot.val().uide,
          });
          // Linking.openURL('https://Safe8well.my/' + url);
        });

        let users = snapshot.val();
        this.setState({
          users: newState,
        });
      });
  }

  componentDidMount() {
    this.getData();
  }

  // signOut = () => {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       this.props.navigation.navigate('Home');
  //     })
  //     .catch((error) => this.setState({ errorMessage: error.message }));
  // };

  render() {
    const dataArray = Object.values(this.state.users);

    this.state = {
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
      email: firebase.auth().currentUser.email,
    };
  console.log( firebase.auth().currentUser.displayName)
    const { url } = this.state;
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          
        }}
      >
        <View style={{ paddingTop: 3 }}>
          <Text style={{ fontSize: 15, color: 'grey', textAlign: 'center' }}>
            Name
          </Text>
        </View>
        <View style={{ paddingBottom: 10 }}>
          <View>
            <Text style={styles.textStyle}> {this.state.displayName}</Text>
          </View>

          <View style={{ paddingTop: 3 }}>
            <Text style={{ fontSize: 15, color: 'grey', textAlign: 'center' }}>
              Member ID
            </Text>
          </View>

          <FlatList
            data={dataArray}
            renderItem={({ item }) => (
              <ListItem
                title={
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'black',
                    }}
                  >
                    {item.uide}
                  </Text>
                }
              />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',

    top: 40,
    
  },
  textStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});
