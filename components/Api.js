import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const Api = () => {
    const [data, setData] = useState(null); // State to store the API data
    const [error, setError] = useState(null); // State to store any errors
    const [loading, setLoading] = useState(true); // State to handle loading

    useEffect(() => {
        // Fetch data from the API
        fetch("https://d1fo4cyuvtwu1s.cloudfront.net/api/company/add-phone-number/", {
            method: "GET", // Use GET or POST based on the API requirements
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((result) => {
                setData(result); // Set the fetched data to the state
                setLoading(false); // Stop loading once data is fetched
            })
            .catch((error) => {
                setError(error.message); // Set error message to the state
                setLoading(false); // Stop loading on error
                console.error("Fetch error: ", error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>API Data:</Text>
            {loading ? (
                <Text>Loading...</Text>
            ) : error ? (
                <Text style={styles.error}>Error: {error}</Text>
            ) : data ? (
                <Text style={styles.item}>Response: {JSON.stringify(data)}</Text>
            ) : (
                <Text>No data available.</Text>
            )}
        </View>
    );
};

export default Api;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        fontSize: 18,
        marginVertical: 5,
    },
    error: {
        color: 'red',
        fontSize: 16,
    },
});
