import React, { Component } from "react";
import { StyleSheet, Text, View} from 'react-native';

class Therapist extends Component {
    
   render() {
      return (
        <View style={styles.therapist}>
           <Text>Click me</Text>
          </View>   
      )
    }
  }
  
  const styles = StyleSheet.create({
    therapist: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })
  
  export default Therapist;
  