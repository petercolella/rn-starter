import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const Separator = () => {
  return <View style={styles.separator}></View>;
};

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello World!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Separator />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
      />
      <Separator />
      <Button
        onPress={() => navigation.navigate('Images')}
        title="Go to Images Demo"
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 5
  },
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
