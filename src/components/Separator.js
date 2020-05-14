import React from 'react';
import { StyleSheet, View } from 'react-native';

const Separator = () => {
  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 5
  }
});

export default Separator;
