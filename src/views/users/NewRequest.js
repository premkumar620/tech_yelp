// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

// const NewRequest = ({ navigation }) => {
//     const handleNavigate = (requestingFor) => {
//         navigation.navigate('RequestForm', { requestingFor });
//     };

//     return (
//         <View style={styles.container}>
//             {/* Search Bar */}
//             <View style={styles.searchContainer}>
//                 <TextInput
//                     placeholder="Search your issue here"
//                     placeholderTextColor="#ccc"
//                     style={styles.searchInput}
//                 />
//             </View>

//             {/* Dashboard Cards */}
//             <View style={styles.cardContainer}>
//                 <TouchableOpacity
//                     style={styles.card}
//                     onPress={() => handleNavigate('System Issue/Request')}
//                 >
//                     <Text style={styles.cardTitle}>System Issue/Request</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={styles.card}
//                     onPress={() => handleNavigate('Hardware Issue')}
//                 >
//                     <Text style={styles.cardTitle}>Hardware Issue</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={styles.card}
//                     onPress={() => handleNavigate('Mail Issue')}
//                 >
//                     <Text style={styles.cardTitle}>Mail Issue</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={styles.card}
//                     onPress={() => handleNavigate('Internet Issue')}
//                 >
//                     <Text style={styles.cardTitle}>Internet Issue</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={styles.card}
//                     onPress={() => handleNavigate('Tally Issue/Request')}
//                 >
//                     <Text style={styles.cardTitle}>Tally Issue/Request</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={styles.card}
//                     onPress={() => handleNavigate('Others')}
//                 >
//                     <Text style={styles.cardTitle}>Others</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "rgb(255, 183, 3)",
//         padding: 10,
//     },
//     searchContainer: {
//         marginBottom: 20,
//     },
//     searchInput: {
//         backgroundColor: '#fff',
//         height: 40,
//         borderRadius: 8,
//         paddingHorizontal: 15,
//         fontSize: 14,
//         color: '#333',
//         elevation: 3, // Shadow for Android
//         shadowColor: '#000', // Shadow for iOS
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//     },
//     cardContainer: {
//         flex: 1,
//         backgroundColor: "#8B939A", // Dashboard background
//         padding: 20,
//         justifyContent: 'space-around',
//     },
//     card: {
//         backgroundColor: '#ffffff', // White card background
//         borderRadius: 8,
//         padding: 20,
//         marginBottom: 15,
//         alignItems: 'center',
//         elevation: 5, // Adds shadow for Android
//         shadowColor: '#000', // Adds shadow for iOS
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//     },
//     cardTitle: {
//         color: '#555',
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
// });

// export default NewRequest;


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const NewRequest = ({ navigation }) => {
    const handleNavigate = (requestingFor) => {
        navigation.navigate('NewReqForm', { requestingFor }); // Navigate to NewReqForm with parameter
    };

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

            {/* Dashboard Cards */}
            <View style={styles.cardContainer}>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => handleNavigate('System Issue/Request')}
                >
                    <Text style={styles.cardTitle}>System Issue/Request</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => handleNavigate('Hardware Issue')}
                >
                    <Text style={styles.cardTitle}>Hardware Issue</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => handleNavigate('Mail Issue')}
                >
                    <Text style={styles.cardTitle}>Mail Issue</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => handleNavigate('Internet Issue')}
                >
                    <Text style={styles.cardTitle}>Internet Issue</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => handleNavigate('Tally Issue/Request')}
                >
                    <Text style={styles.cardTitle}>Tally Issue/Request</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => handleNavigate('Others')}
                >
                    <Text style={styles.cardTitle}>Others</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 183, 3)",
        padding: 10,
    },
    searchContainer: {
        marginBottom: 20,
    },
    searchInput: {
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 14,
        color: '#333',
        elevation: 3, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cardContainer: {
        flex: 1,
        backgroundColor: "#8B939A", // Dashboard background
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
});

export default NewRequest;
