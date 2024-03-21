import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Input = ({ label, type, placeholder, security, onChangeText, onKeyPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={security}
        keyboardType={type === 'numeric' ? 'numeric' : 'default'}
        onChangeText={onChangeText}
        onKeyPress={onKeyPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingLeft: 10,
  },
});

export default Input;