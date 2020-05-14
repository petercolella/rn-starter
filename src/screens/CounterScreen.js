import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Separator from '../components/Separator';

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  const handleChange = increment => {
    setCount(count + increment);
  };

  return (
    <View>
      <Button title="Increase" onPress={() => handleChange(1)} />
      <Separator />
      <Button title="Decrease" onPress={() => handleChange(-1)} />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
