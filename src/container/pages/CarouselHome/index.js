import React from 'react';

import Carousel from '../../../components/molecule/Carousel';
import { withNavigation } from '@react-navigation/compat';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';

class HomeCarousel extends React.Component {
  state = { animating: true };

  closeActivityIndicator = () =>
    setTimeout(
      () =>
        this.setState({
          animating: false,
        }),
      2000
    );

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Source Listing',
      headerStyle: { backgroundColor: '#fff' },
      headerTitleStyle: { textAlign: 'center', flex: 1 },
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      dataSource: [],
    };
  }
  componentDidMount() {
    this.closeActivityIndicator();
    fetch('https://blooming-castle-82100.herokuapp.com/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
          spinner: true,
        });
        console.log(responseJson);
      })
      .catch((error) => console.log(error)); //to catch the errors if any
  }

  render() {
    const animating = this.state.animating;
    // const HomeCarousel = () => {

    //   useEffect(() => {
    //     fetch('http://192.168.0.169:3400/api/courses')
    //       .then((response) => response.json())

    //       .catch((error) => console.error(error))
    //       .finally(() => setLoading(false));
    //   }, []);
    //   console.log(data);
    //   // console.log(dummyData);

    return (
      <View>
        {this.state.spinner ? (
          <ActivityIndicator size='small' animating={animating} />
        ) : (
          <View>
            <ActivityIndicator size='large' animating={animating} />
          </View>
        )}

        <Carousel data={this.state.dataSource} />
      </View>
    );
  }
}

export default withNavigation(HomeCarousel);
