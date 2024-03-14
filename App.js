import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BleManager from 'react-native-ble-manager';

const App = () => {
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');

  // Function to connect to Bluetooth device
  const connectToDevice = () => {
    BleManager.connect('04:CF:4B:BB:D8:10')
      .then(() => {
        console.log('Connected to device');
        setConnectionStatus('Connected');
      })
      .catch(error => {
        console.log('Connection error:', error);
        setConnectionStatus('Connection Error');
      });
  };

  // Function to send command over Bluetooth
  const sendCommand = command => {
    BleManager.write('1000', 'SERVICE_UUID', 'CHARACTERISTIC_UUID', [command])
      .then(() => console.log('Command sent:', command))
      .catch(error => console.log('Error sending command:', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.status}>Connection Status: {connectionStatus}</Text>
      <TouchableOpacity style={styles.button} onPress={connectToDevice}>
        <Text style={styles.buttonText}>Connect to Device</Text>
      </TouchableOpacity>
      <View style={styles.controls}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.arrowButton} onPress={() => sendCommand('UP')}>
            <Text style={styles.arrowButtonText}>↑</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.arrowButton} onPress={() => sendCommand('LEFT')}>
            <Text style={styles.arrowButtonText}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.arrowButton} onPress={() => sendCommand('DOWN')}>
            <Text style={styles.arrowButtonText}>↓</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.arrowButton} onPress={() => sendCommand('RIGHT')}>
            <Text style={styles.arrowButtonText}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  controls: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  arrowButton: {
    backgroundColor: 'gray',
    paddingVertical: 20,
    paddingHorizontal: 25,
    margin: 5,
    borderRadius: 5,
  },
  arrowButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
