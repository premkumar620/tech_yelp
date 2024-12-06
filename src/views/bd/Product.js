import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';

const Product = () => {
  // State to hold product data
  const [products, setProducts] = useState([]);

  // Fetch data (simulating API call)
  useEffect(() => {
    const fetchProducts = () => {
      setTimeout(() => {
        const mockData = [
          { id: '1', title: 'Laptop Model A', price: '$1,299.99', image: require('../../assets/Laptop.png') },
          { id: '2', title: 'Laptop Model B', price: '$1,499.99', image: require('../../assets/Laptop.png') },
          { id: '3', title: 'Laptop Model C', price: '$1,599.99', image: require('../../assets/Laptop.png') },
          { id: '4', title: 'Laptop Model D', price: '$1,699.99', image: require('../../assets/Laptop.png') },
          { id: '5', title: 'Laptop Model E', price: '$1,799.99', image: require('../../assets/Laptop.png') },
          { id: '6', title: 'Laptop Model F', price: '$1,899.99', image: require('../../assets/Laptop.png') },
          { id: '7', title: 'Laptop Model G', price: '$1,899.99', image: require('../../assets/Laptop.png') },
          { id: '8', title: 'Laptop Model H', price: '$1,899.99', image: require('../../assets/Laptop.png') },
          { id: '9', title: 'Laptop Model I', price: '$1,899.99', image: require('../../assets/Laptop.png') },
          { id: '10', title: 'Laptop Model J', price: '$1,899.99', image: require('../../assets/Laptop.png') }
        ];
        setProducts(mockData);
      }, 1000); // Simulate network delay
    };

    fetchProducts();
  }, []);

  // Render a product card
  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={products}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display 2 cards per row
        columnWrapperStyle={styles.row} // Spacing between columns
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    width: '48%', // Two cards per row (with some margin)
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});

export default Product;
