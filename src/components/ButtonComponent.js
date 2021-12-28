import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const ButtonComponent = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    backgroundColor: '#F2F2F2',
    paddingVertical: 15,
    paddingHorizontal: '15%',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  label: {
    color: '#455A64',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
