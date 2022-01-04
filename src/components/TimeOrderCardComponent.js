import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TimeOrderCardComponent = props => {
  return (
    <View
      style={
        props.active
          ? [styles.container, styles.active]
          : [styles.container, styles.disable]
      }>
      <Text
        style={
          props.active
            ? [styles.text, {color: '#FFF'}]
            : [styles.text, {color: '#000'}]
        }>
        {props.time}
      </Text>
    </View>
  );
};

export default TimeOrderCardComponent;

const styles = StyleSheet.create({
  container: {
    width: 80,
    borderRadius: 10,
    paddingVertical: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  text: {
    fontSize: 12,
  },
  active: {
    backgroundColor: '#FF642B',
  },
  disable: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#000',
  },
});
