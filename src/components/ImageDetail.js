import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imgScore, imgSrc, title }) => {
  return (
    <View>
      <Image source={imgSrc} />
      <Text>{title}</Text>
      <Text>Image Score - {imgScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
