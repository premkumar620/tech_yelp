import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyTicket = () => {
    return (
        <View style={styles.container}>
            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Search your issue here"
                    placeholderTextColor="#ccc"
                    style={styles.searchInput}
                />
            </View>

            {/* Issue Categories */}
            <ScrollView contentContainerStyle={styles.cardContainer}>
                <TouchableOpacity style={styles.card}>
                    <Icon name="desktop" size={20} color="#007BFF" />
                    <Text style={styles.cardTitle}>System Issue/request</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Icon name="cogs" size={20} color="#007BFF" />
                    <Text style={styles.cardTitle}>Hardware issue</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Icon name="envelope" size={20} color="#007BFF" />
                    <Text style={styles.cardTitle}>Mail Issue</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Icon name="wifi" size={20} color="#007BFF" />
                    <Text style={styles.cardTitle}>Internet issue</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Icon name="book" size={20} color="#007BFF" />
                    <Text style={styles.cardTitle}>Tally issue/request</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Icon name="question-circle" size={20} color="#007BFF" />
                    <Text style={styles.cardTitle}>Others</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    searchContainer: {
        marginBottom: 20,
    },
    searchInput: {
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#333',
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cardContainer: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#ffffff', // White card background
        borderRadius: 10,
        padding: 20,
        marginBottom: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 5, // Adds shadow for Android
        shadowColor: '#000', // Adds shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cardTitle: {
        color: '#555',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

export default MyTicket;