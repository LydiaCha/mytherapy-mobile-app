import React, { Component } from "react";
import { StyleSheet, Text, View} from 'react-native';

class Community extends Component {
    
   render() {
      return (
        <View style={styles.community}>
           <Text>Click me</Text>
          </View>   
      )
    }
  }
  
  const styles = StyleSheet.create({
    community: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })
  
  export default Community;
  