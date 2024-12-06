import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Dashboard = () => {
    // States for card counts
    const [openTicketCount, setOpenTicketCount] = useState(0);
    const [closedTicketCount, setClosedTicketCount] = useState(0);
    const [totalTicketCount, setTotalTicketCount] = useState(0);

    // Animation logic
    useEffect(() => {
        // Helper function to animate a number
        const animateNumber = (target, setCount) => {
            let current = 1;
            const interval = setInterval(() => {
                setCount(current);
                if (current >= target) {
                    clearInterval(interval);
                } else {
                    current++;
                }
            }, 50); // Adjust speed of increment
        };

        // Start animation for each card
        animateNumber(35, setOpenTicketCount);
        animateNumber(26, setClosedTicketCount);
        animateNumber(61, setTotalTicketCount);
    }, []);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.logo}>Bizallen LLP</Text>
                <TouchableOpacity style={styles.newRequestButton}>
                    <Text style={styles.newRequestText}>NEW REQUEST</Text>
                </TouchableOpacity>
            </View>

            {/* Dashboard Cards */}
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>OPEN TICKET</Text>
                    <Text style={styles.cardCount}>{openTicketCount}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>CLOSED TICKET</Text>
                    <Text style={styles.cardCount}>{closedTicketCount}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>TOTAL TICKET</Text>
                    <Text style={styles.cardCount}>{totalTicketCount}</Text>
                </View>
            </View>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        height: 60,
        backgroundColor: "rgb(255, 183, 3)", // Blue color for header
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    logo: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    newRequestButton: {
        backgroundColor: '#17A2B8',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    newRequestText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    cardContainer: {
        flex: 1,
        backgroundColor: "#8B939A", // Dashboard background blue
        padding: 20,
        justifyContent: 'space-around',
    },
    card: {
        backgroundColor: '#ffffff', // White card background
        borderRadius: 8,
        padding: 20,
        marginBottom: 15,
        alignItems: 'center',
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
        marginBottom: 10,
    },
    cardCount: {
        color: '#333',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Dashboard;