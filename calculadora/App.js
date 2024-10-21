import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === 'C') {
      setDisplay('');
      setResult('');
    } else if (value === '=') {
      try {
        setResult(eval(display).toString());
      } catch (error) {
        setResult('Erro');
      }
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['C', '0', '=', '+'],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{display || '0'}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={styles.button}
                onPress={() => handlePress(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
  },
  display: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
    minHeight: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  displayText: {
    fontSize: 32,
    color: '#333',
  },
  resultText: {
    fontSize: 24,
    color: '#888',
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'column',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});
