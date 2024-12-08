// import React, { useState } from "react";
// import {
//     View,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     StyleSheet,
//     Image,
// } from "react-native";

// const Onboarding = () => {
//     const [fullName, setFullName] = useState("");
//     const [email, setEmail] = useState("");
//     const [mobileNumber, setMobileNumber] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");

//     return (
//         <View style={styles.container}>
//             <View style={styles.formContainerr}>
//                 <Image
//                     source={require('../assets/whole.png')} // Path to your image
//                     style={styles.logo } // Adjust the size and scaling
//                 />
//             </View>

//             {/* Login Form */}
//             <View style={styles.formContainer}>
//                 <Text style={styles.loginTitle}>Onboarding</Text>

//                 {/* Full Name */}
//                 <View style={styles.field}>
//                     <Text style={styles.label}>FULL NAME</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Full Name"
//                         placeholderTextColor="#999"
//                         value={fullName}
//                         onChangeText={setFullName}
//                     />
//                 </View>

//                 {/* Email */}
//                 <View style={styles.field}>
//                     <Text style={styles.label}>EMAIL</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Email"
//                         placeholderTextColor="#999"
//                         value={email}
//                         onChangeText={setEmail}
//                         keyboardType="email-address"
//                     />
//                 </View>

//                 {/* Mobile Number */}
//                 <View style={styles.field}>
//                     <Text style={styles.label}>MOBILE NUMBER</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Mobile Number"
//                         placeholderTextColor="#999"
//                         value={mobileNumber}
//                         onChangeText={setMobileNumber}
//                         keyboardType="phone-pad"
//                     />
//                 </View>

//                 {/* Password */}
//                 <View style={styles.field}>
//                     <Text style={styles.label}>PASSWORD</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Password"
//                         placeholderTextColor="#999"
//                         value={password}
//                         onChangeText={setPassword}
//                         secureTextEntry
//                     />
//                 </View>

//                 {/* Confirm Password */}
//                 <View style={styles.field}>
//                     <Text style={styles.label}>CONFIRM PASSWORD</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Confirm Password"
//                         placeholderTextColor="#999"
//                         value={confirmPassword}
//                         onChangeText={setConfirmPassword}
//                         secureTextEntry
//                     />
//                 </View>

//                 {/* Sign In Button */}
//                 <TouchableOpacity style={styles.signInButton}>
//                     <Text style={styles.signInText}>SIGN IN</Text>
//                 </TouchableOpacity>

//                 {/* Footer Links */}
               
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         padding: 20,
//     },
//     formContainerr: {
//         width: "100%",
//         backgroundColor: "rgb(255, 183, 3)",
//         borderTopEndRadius: 10,
//         borderTopLeftRadius: 10,
//         padding: 20,
//         elevation: 5,
//         shadowColor: "#000",
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 5,
//         flexDirection: "row", // Align items horizontally
//         alignItems: "center", // Center items vertically
//         justifyContent: "flex-start", // Align content to the left
//     },
//     logo: {
//         width: 150,
//         height: 30,
//         resizeMode: "contain",
//     },

//     formContainer: {
//         width: "100%",
//         backgroundColor: "#8B939A",
//         borderBottomEndRadius: 10,
//         borderBottomLeftRadius: 10,
//         padding: 20,
//         elevation: 5,
//         shadowColor: "#000",
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 5,
//     },
//     loginTitle: {
//         fontSize: 24,
//         fontWeight: "bold",
//         textAlign: "center",
//         marginBottom: 20,
//         color: "#fff",
//     },
//     field: {
//         marginBottom: 15,
//     },
//     label: {
//         fontSize: 12,
//         fontWeight: "bold",
//         color: "#fff",
//         marginBottom: 5,
//     },
//     input: {
//         height: 40,
//         borderWidth: 1,
//         borderColor: "#ddd",
//         borderRadius: 5,
//         paddingLeft: 10,
//         backgroundColor: "#f9f9f9",
//         fontSize: 16,
//     },
//     signInButton: {
//         backgroundColor: "rgb(255, 183, 3)",
//         borderRadius: 5,
//         alignItems: "center",
//         paddingVertical: 10,
//         marginTop: 10,
//     },
//     signInText: {
//         color: "#fff",
//         fontSize: 16,
//         fontWeight: "bold",
//     },
 
// });

// export default Onboarding;


import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

const Onboarding = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.formContainerr}>
        <Image source={require('../../assets/whole.png')} style={styles.logo} />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>Onboarding</Text>

        <View style={styles.field}>
          <Text style={styles.label}>FULL NAME</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#999"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>EMAIL</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>MOBILE NUMBER</Text>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="#999"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
        </View>

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

        <View style={styles.field}>
          <Text style={styles.label}>CONFIRM PASSWORD</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#999"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Same as the styles provided earlier


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
        flexDirection: "row", // Align items horizontally
        alignItems: "center", // Center items vertically
        justifyContent: "flex-start", // Align content to the left
    },
    logo: {
        width: 150,
        height: 30,
        resizeMode: "contain",
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
 
});

export default Onboarding;
