import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';
import Separator from '../components/Separator';

const COLOR_INCREMENT = 20;

const reducer = (state, action) => {
  const change = COLOR_INCREMENT * action.payload;
  switch (action.type) {
    case 'change_red':
      const newRed = state.red + change;
      const correctedRed = newRed > 255 ? 255 : newRed < 0 ? 0 : newRed;
      return { ...state, red: correctedRed };
    case 'change_green':
      const newGreen = state.green + change;
      const correctedGreen = newGreen > 255 ? 255 : newGreen < 0 ? 0 : newGreen;
      return { ...state, green: correctedGreen };
    case 'change_blue':
      const newBlue = state.blue + change;
      const correctedBlue = newBlue > 255 ? 255 : newBlue < 0 ? 0 : newBlue;
      return { ...state, blue: correctedBlue };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_red', payload: 1 })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_green', payload: 1 })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 })}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_blue', payload: 1 })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -1 })}
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
