import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ref={(ref) => (this.flatList = ref)}
          data={this.state.data}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item) => item.item}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
