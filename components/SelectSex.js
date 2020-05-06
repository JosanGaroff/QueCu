import React, { memo } from 'react';
import { View, StyleSheet, Text, Picker } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../core/theme';

const SelectSex = ({ errorText, ...props }) => (
  <View style={styles.container}>
    <Picker
        style={styles.picker}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      >
        <Picker.Item label="Elija su sexo" value="choose" />
        <Picker.Item label="Hombre" value="HOMBRE" />
        <Picker.Item label="Mujer" value="MUJER" />
      </Picker>
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: 'flex-end',
    width: '100%',
    height: '11%',
    overflow: 'hidden'
  },
  picker: {
    backgroundColor: theme.colors.surface,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default memo(SelectSex);
