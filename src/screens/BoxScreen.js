import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    // alignItems: 'center',
    // borderColor: 'black',
    // borderWidth: 3,
    flexDirection: 'row',
    height: 200,
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    // flex: 4,
    backgroundColor: 'lightsalmon',
    borderColor: 'salmon',
    borderWidth: 3,
    height: 100,
    width: '25%'
  },
  viewTwoStyle: {
    // alignSelf: 'stretch',
    // flex: 4,
    // fontSize: 18,
    // position: 'absolute',
    backgroundColor: 'lightgreen',
    borderColor: 'green',
    borderWidth: 3,
    height: 100,
    top: 100,
    width: '25%'
    // ...StyleSheet.absoluteFillObject
  },
  viewThreeStyle: {
    // flex: 2
    backgroundColor: 'plum',
    borderColor: 'purple',
    borderWidth: 3,
    height: 100,
    width: '25%'
  }
});

export default BoxScreen;
