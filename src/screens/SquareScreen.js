import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';
import Separator from '../components/Separator';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red);

  const setColor = (color, increase = true) => {
    switch (color) {
      case 'red' && increase:
        setRed(red + COLOR_INCREMENT > 255 ? 255 : red + COLOR_INCREMENT);
        break;
      case 'red' && !increase:
        setRed(red - COLOR_INCREMENT < 0 ? 0 : red - COLOR_INCREMENT);
        break;
      case 'green' && increase:
        setGreen(green + COLOR_INCREMENT > 255 ? 255 : green + COLOR_INCREMENT);
        break;
      case 'green' && !increase:
        setGreen(green - COLOR_INCREMENT < 0 ? 0 : green - COLOR_INCREMENT);
        break;
      case 'blue' && increase:
        setBlue(blue + COLOR_INCREMENT > 255 ? 255 : blue + COLOR_INCREMENT);
        break;
      case 'blue' && !increase:
        setBlue(blue - COLOR_INCREMENT < 0 ? 0 : blue - COLOR_INCREMENT);
        break;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          setRed(red + COLOR_INCREMENT > 255 ? 255 : red + COLOR_INCREMENT)
        }
        onDecrease={() =>
          setRed(red - COLOR_INCREMENT < 0 ? 0 : red - COLOR_INCREMENT)
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
        color="Blue"
      />
      <Separator />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
