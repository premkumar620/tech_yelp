import React from 'react';
import { View, Text, StyleSheet, Card } from 'react-native';

// Dummy Data
const data = [
  { id: '1', title: 'Total Sales', value: '$12,000', backgroundColor: '#4CAF50' },
  { id: '2', title: 'Total Products', value: '150', backgroundColor: '#2196F3' },
  { id: '3', title: 'Total Customers', value: '250', backgroundColor: '#FF9800' },
  { id: '4', title: 'Total Orders', value: '120', backgroundColor: '#FF5722' },
];

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Business Development Dashboard</Text>

      <View style={styles.cardsContainer}>
        {data.map((item) => (
          <View key={item.id} style={[styles.card, { backgroundColor: item.backgroundColor }]}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardValue}>{item.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.recentActivity}>
        <Text style={styles.recentTitle}>Recent Activity</Text>
        <View style={styles.activityItem}>
          <Text style={styles.activityText}>Order #1234: Laptop Model A</Text>
          <Text style={styles.activityText}>Status: Delivered</Text>
        </View>
        <View style={styles.activityItem}>
          <Text style={styles.activityText}>Order #1235: Smartphone Model X</Text>
          <Text style={styles.activityText}>Status: Processing</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  cardValue: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  recentActivity: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  recentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  activityItem: {
    marginBottom: 12,
  },
  activityText: {
    fontSize: 14,
  },
});

export default Dashboard;
