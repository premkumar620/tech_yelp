import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Example login logic
        if (email && password) {
            // Navigate to the Tab Navigator (Main dashboard)
            navigation.navigate('Main');
        } else {
            alert("Please enter your credentials");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainerr}>
                <Image
                    source={require('../../assets/whole.png')} // Path to your image
                    style={{ width: 150, height: 30, resizeMode: 'contain' }} // Adjust the size and scaling
                />
            </View>

            {/* Login Form */}
            <View style={styles.formContainer}>
                <Text style={styles.loginTitle}>Login</Text>

                {/* User ID */}
                <View style={styles.field}>
                    <Text style={styles.label}>USER ID</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#999"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>

                {/* Password */}
                <View style={styles.field}>
                    <Text style={styles.label}>PASSWORD</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#999"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                {/* Sign In Button */}
                <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
                    <Text style={styles.signInText}>SIGN IN</Text>
                </TouchableOpacity>

                {/* Footer Links */}
                <View style={styles.footerLinks}>
                    <TouchableOpacity>
                        <Text
                            style={styles.link}
                            onPress={() => navigation.navigate('Onboarding')}
                        >
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.link}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    formContainerr: {
        width: "100%",
        backgroundColor: "rgb(255, 183, 3)",
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
        padding: 20,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    formContainer: {
        width: "100%",
        backgroundColor: "#8B939A",
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 20,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    loginTitle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#fff",
    },
    field: {
        marginBottom: 15,
    },
    label: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: "#f9f9f9",
        fontSize: 16,
    },
    signInButton: {
        backgroundColor: "rgb(255, 183, 3)",
        borderRadius: 5,
        alignItems: "center",
        paddingVertical: 10,
        marginTop: 10,
    },
    signInText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    footerLinks: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
    },
    link: {
        color: "#fff",
        fontSize: 14,
        textDecorationLine: "underline",
    },
});

export default Login;