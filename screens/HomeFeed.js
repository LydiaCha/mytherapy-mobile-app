import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class HomeFeed extends Component {
constructor() {
  super()
  this.state = {
    dataSource: []
  }
}

renderItem = ({ item }) => {
  return (
    <View>
    <View>
      <Text>
        {item.title}
      </Text>
    </View>
    <View>
      <Text>
        {item.content}
      </Text>
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
  }
  
});

