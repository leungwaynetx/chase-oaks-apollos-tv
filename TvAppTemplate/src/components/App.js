import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Demo from './Demo';

const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    height,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <View style={styles.center}>
      <Text>Hello React Native Web!!!</Text>
      <Demo />
    </View>
  </View>
);

export default App;
