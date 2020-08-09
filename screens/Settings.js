import React, { Component } from "react";
import { StyleSheet, Text, View} from 'react-native';

class Settings extends Component {
    
   render() {
      return (
        <View style={styles.settings}>
           <Text>Click me</Text>
          </View>   
      )
    }
  }
  
  const styles = StyleSheet.create({
    settings: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })
  
  export default Settings;
  