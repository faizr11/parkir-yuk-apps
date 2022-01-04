import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CircleImageComponent = props => {
  return (
    <View>
      <Image width={10} height={10} source={props.uri} />
      <Text>{props.label}</Text>
    </View>
  );
};

export default CircleImageComponent;

const styles = StyleSheet.create({});
