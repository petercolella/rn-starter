import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import Separator from '../components/Separator';

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
      <Separator />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter"
      />
      <Separator />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Screen"
      />
      <Separator />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go to Square Screen"
      />
      <Separator />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go to Text Screen"
      />
      <Separator />
      <Button
        onPress={() => navigation.navigate('Box')}
        title="Go to Box Screen"
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
