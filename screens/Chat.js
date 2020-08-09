import React, { Component } from "react";
import { StyleSheet, Text, View} from 'react-native';

class Chat extends Component {
    
   render() {
      return (
        <View style={styles.chat}>
           <Text>Chat page</Text>
          </View>   
      )
    }
  }
  
  const styles = StyleSheet.create({
    chat: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })
  
  export default Chat;
  