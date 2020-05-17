import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';
import Separator from '../components/Separator';

const COLOR_INCREMENT = 20;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, plusOrMinus) => {
    const change = COLOR_INCREMENT * plusOrMinus;
    switch (color) {
      case 'red':
        const newRed = red + change;
        const correctedRed = newRed > 255 ? 255 : newRed < 0 ? 0 : newRed;
        setRed(correctedRed);
        break;
      case 'green':
        const newGreen = green + change;
        const correctedGreen =
          newGreen > 255 ? 255 : newGreen < 0 ? 0 : newGreen;
        setGreen(correctedGreen);
        break;
      case 'blue':
        const newBlue = blue + change;
        const correctedBlue = newBlue > 255 ? 255 : newBlue < 0 ? 0 : newBlue;
        setBlue(correctedBlue);
        break;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor('red', 1)}
        onDecrease={() => setColor('red', -1)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor('green', 1)}
        onDecrease={() => setColor('green', -1)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor('blue', 1)}
        onDecrease={() => setColor('blue', -1)}
        color="Blue"
      />
      <Separator />
      <View
        style={styles.squareStyle}
        style={{
          ...styles.squareStyle,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      >
        <Text style={styles.textStyle}>Red: {red}</Text>
        <Text style={styles.textStyle}>Green: {green}</Text>
        <Text style={styles.textStyle}>Blue: {blue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  squareStyle: {
    height: 150,
    width: 150,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textStyle: {
    textAlign: 'center',
    color: 'white'
  }
});

export default SquareScreen;
