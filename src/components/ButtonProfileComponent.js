import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ButtonProfileComponent = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonProfileComponent;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF642B',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 16,
  },
  label: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
