import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Separator from './Separator';

const ColorCounter = ({ color, onIncrease, onDecrease, test }) => {
  return (
    <View>
      <Separator />
      <Text>{color}</Text>
      <Button onPress={onIncrease} title={`Increase ${color}`} />
      <Separator />
      <Button onPress={onDecrease} title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
