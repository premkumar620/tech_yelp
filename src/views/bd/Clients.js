import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Clients = () => {
  // Mock client data
  const [clients, setClients] = useState([]);

  // Simulate fetching client data
  useEffect(() => {
    // Replace this with a real API call to fetch data
    const fetchClients = () => {
      const mockData = [
        { id: '1', name: 'Client A', hasServiceEngineer: true },
        { id: '2', name: 'Client B', hasServiceEngineer: false },
        { id: '3', name: 'Client C', hasServiceEngineer: true },
        { id: '4', name: 'Client D', hasServiceEngineer: false },
        { id: '5', name: 'Client E', hasServiceEngineer: true },
      ];
      setClients(mockData);
    };

    fetchClients();
  }, []);

  // Render a table row
  const renderRow = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>
        {item.hasServiceEngineer ? 'Yes' : 'No'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Clients</Text>
      
      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={[styles.cell, styles.headerCell]}>ID</Text>
        <Text style={[styles.cell, styles.headerCell]}>Name</Text>
        <Text style={[styles.cell, styles.headerCell]}>Service Engineer</Text>
      </View>
      
      {/* Table Rows */}
      <FlatList
        data={clients}
        renderItem={renderRow}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
  },
  headerCell: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Clients;
