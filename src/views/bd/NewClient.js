import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

const NewClient = () => {
  // State variables to hold the form data
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  // Handle form submission
  const handleSubmit = () => {
    if (!clientName || !clientEmail || !clientPhone) {
      Alert.alert('All fields are required!');
    } else {
      // You can process the form data here, for example:
      // Send the data to an API, store it locally, etc.
      Alert.alert('New Client Added', `Name: ${clientName}\nEmail: ${clientEmail}\nPhone: ${clientPhone}`);
      
      // Reset the form after submission
      setClientName('');
      setClientEmail('');
      setClientPhone('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Client</Text>
      
      {/* Client Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Client Name"
        value={clientName}
        onChangeText={setClientName}
      />

      {/* Client Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Client Email"
        value={clientEmail}
        onChangeText={setClientEmail}
        keyboardType="email-address"
      />

      {/* Client Phone Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Client Phone"
        value={clientPhone}
        onChangeText={setClientPhone}
        keyboardType="phone-pad"
      />

      {/* Submit Button */}
      <Button title="Add Client" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
});

export default NewClient;
