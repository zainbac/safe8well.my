import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  BackHandler,
  Image,
  TouchableOpacity,
} from 'react-native';
import FetchingIndicator from 'react-native-fetching-indicator';
const Item = ({ item }) => {
  return (
    <View style={styles.listItem}>
      <Image
        source={{ uri: item.photo }}
        style={{ width: 60, height: 60, borderRadius: 30 }}
      />
      <View style={{ alignItems: 'center', flex: 1 }}>
        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
        <Text>{item.position}</Text>
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'green' }}>Call</Text>
      </TouchableOpacity>
    </View>
  );
};

export default class Technician extends React.Component {
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
  state = {
    data: [
      {
        name: 'Miyah Myles',
        email: 'miyah.myles@gmail.com',
        position: 'Data Entry Clerk',
        photo:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
      },
      {
        name: 'June Cha',
        email: 'june.cha@gmail.com',
        position: 'Sales Manager',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      {
        name: 'Iida Niskanen',
        email: 'iida.niskanen@gmail.com',
        position: 'Sales Manager',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
      },
      {
        name: 'Renee Sims',
        email: 'renee.sims@gmail.com',
        position: 'Medical Assistant',
        photo: 'https://randomuser.me/api/portraits/women/65.jpg',
      },
      {
        name: 'Jonathan Nu\u00f1ez',
        email: 'jonathan.nu\u00f1ez@gmail.com',
        position: 'Clerical',
        photo: 'https://randomuser.me/api/portraits/men/43.jpg',
      },
      {
        name: 'Sasha Ho',
        email: 'sasha.ho@gmail.com',
        position: 'Administrative Assistant',
        photo:
          'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
      },
      {
        name: 'Abdullah Hadley',
        email: 'abdullah.hadley@gmail.com',
        position: 'Marketing',
        photo:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f',
      },
      {
        name: 'Thomas Stock',
        email: 'thomas.stock@gmail.com',
        position: 'Product Designer',
        photo:
          'https://tinyfac.es/data/avatars/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg',
      },
      {
        name: 'Veeti Seppanen',
        email: 'veeti.seppanen@gmail.com',
        position: 'Product Designer',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
      },
      {
        name: 'Bonnie Riley',
        email: 'bonnie.riley@gmail.com',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/26.jpg',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.email}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 60,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
});
