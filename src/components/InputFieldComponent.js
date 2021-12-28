import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const InputFieldComponent = props => {
  const [value, setValue] = useState();
  useEffect(() => {
    props.onChangeText(value);
  }, []);
  return (
    <TextInput
      style={styles.container}
      placeholder={props.placeholder}
      onChangeText={setValue}
      value={value}
    />
  );
};

export default InputFieldComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    borderRadius: 100,
    paddingLeft: 25,
    marginVertical: 10,
  },
});
