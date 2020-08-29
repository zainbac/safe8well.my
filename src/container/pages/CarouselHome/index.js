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
      loading: true,
      dataSource: [],
    };
  }
  componentDidMount() {
    fetch('https://blooming-castle-82100.herokuapp.com/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson,
        });
        console.log(responseJson);
      })
      .catch((error) => console.log(error)); //to catch the errors if any
  }

  render() {
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
        <Carousel data={this.state.dataSource} />
      </View>
    );
  }
}

export default withNavigation(HomeCarousel);
