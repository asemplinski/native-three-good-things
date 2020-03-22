import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';

export default function App() {
  return (
    /*
    <View style={styles.container}>
      <Text>THIS IS A TEST!</Text>
    </View>*/
    <Home></Home>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
