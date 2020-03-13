import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardSet from './components/CardSet';
import cards from './data';
// import { Constants } from 'expo';

export default function App() {
  return (
    <View style={styles.container}>
      <CardSet items={cards}></CardSet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
    // marginTop: Constants.statusBarHeight
  },
});
