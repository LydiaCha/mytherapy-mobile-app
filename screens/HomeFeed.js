import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {AppleCard, AppOfTheDayCard} from 'react-native-apple-card-views';

export default class HomeFeed extends Component {
constructor() {
  super()
  this.state = {
    dataSource: []
  }
}

// https://github.com/WrathChaos/react-native-apple-card-views
renderItem = ({ item }) => {
  return (
    <View>
    <View style={styles.card}>
    <AppleCard
    largeTitle={item.title}
    footnoteText="subtitle placeholder"
    source={item.image}
    >
    </AppleCard>
      </View>
    </View>
  )
}

componentDidMount() {
  const url = 'http://localhost:4000/articles'
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
this.setState({
  dataSource: responseJson.data
})
  })
}

  render() {
return(
    <View style={styles.homeFeed}>
      <FlatList
        data={this.state.dataSource}
        renderItem={this.renderItem}
      />
      
    </View>
);
  }

}
const styles = StyleSheet.create({
  homeFeed: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    padding: 15
  }
  
});

