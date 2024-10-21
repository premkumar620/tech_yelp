
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // For country picker
import { postData } from './ServerRequest'; // Ensure the import path is correct for your project

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [country, setCountry] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [buttonText, setButtonText] = useState('Send OTP');

    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isCompanyValid, setIsCompanyValid] = useState(true);
    const [isCountrySelected, setIsCountrySelected] = useState(false);
    const [isMobileValid, setIsMobileValid] = useState(true);
    const [isOtpValid, setIsOtpValid] = useState(true);

    const CountryName = ['India']; // Sample data, you may want to fetch this

    const handleFullNameChange = (text) => {
        setFullName(text);
        setIsNameValid(text.trim().length > 0);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(text));
    };

    const handleCompanyNameChange = (text) => {
        setCompanyName(text);
        setIsCompanyValid(text.trim().length > 0);
    };

    const handleMobileNumberChange = (text) => {
        setMobileNumber(text);
        setIsMobileValid(/^\d{10}$/.test(text)); // Validate for 10 digits
    };

    const handleOtpChange = (text) => {
        setOtp(text);
        setIsOtpValid(/^\d{6}$/.test(text)); // OTP should be 6 digits
    };

    // Function to handle OTP send
    const handleSendOtp = async () => {
        if (!isMobileValid || !isEmailValid || !isNameValid || !isCompanyValid || !isCountrySelected) {
            Alert.alert('Error', 'Please fill all the fields correctly.');
            return;
        }

        const reqData = {
            phone_number: "+91" + mobileNumber,
            email_id: email,
            full_name: fullName,
            company_name: companyName,
            country_name: country,
        };

        // Call your API to send OTP
        const resData = await postData('/api/company/add-phone-number/', reqData);

        if (resData.code === 200) {
            Alert.alert('Success', 'OTP has been sent to your phone.');
            setIsOtpSent(true); // Indicate that OTP has been sent
            setButtonText('Verify OTP'); // Change button text to "Verify OTP"
        } else {
            Alert.alert('Error', resData.message || 'Failed to send OTP.');
        }
    };

    // Function to verify OTP
    const handleVerifyOtp = async () => {
        if (otp) {
            const reqData = {
                phone_number: "+91" + mobileNumber,
                email_id: email,
                full_name: fullName,
                company_name: companyName,
                country_name: country,
                verification_code: otp,
            };
            const resData = await postData('/api/company/verify-phone-number/', reqData);

            if (resData.code === 200) {
                Alert.alert('Success', 'You are successfully registered!');
                // Handle success logic, maybe store user info in local storage
            } else {
                Alert.alert('Error', resData.message || 'Verification failed');
            }
        } else {
            Alert.alert('Error', 'Please enter OTP.');
        }
    };

    const handleButtonPress = () => {
        if (isOtpSent) {
            handleVerifyOtp();
        } else {
            handleSendOtp();
        }
    };

    useEffect(() => {
        // Reset loading or perform other setup tasks
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertext}>Customer Registration</Text>
            </View>

            <View style={styles.inputArea}>
                <View style={styles.inputItem}>
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        value={fullName}
                        onChangeText={handleFullNameChange}
                        required
                    />
                    {!isNameValid && <Text style={styles.errorMessage}>Name is not valid.</Text>}
                </View>

                <View style={styles.inputItem}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={handleEmailChange}
                        required
                    />
                    {!isEmailValid && <Text style={styles.errorMessage}>Email is not valid.</Text>}
                </View>

                <View style={styles.inputItem}>
                    <TextInput
                        style={styles.input}
                        placeholder="Company Name"
                        value={companyName}
                        onChangeText={handleCompanyNameChange}
                        required
                    />
                    {!isCompanyValid && <Text style={styles.errorMessage}>Company name is not valid.</Text>}
                </View>

                <View style={styles.inputItem}>
                    <Text style={styles.label}>Select Country:</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={country}
                            style={styles.picker}
                            onValueChange={(itemValue) => {
                                setCountry(itemValue);
                                setIsCountrySelected(itemValue.length > 0);
                            }}>
                            <Picker.Item label="Select a country" value="" />
                            {CountryName.map((country, index) => (
                                <Picker.Item key={index} label={country} value={country} />
                            ))}
                        </Picker>
                    </View>
                    {!isCountrySelected && <Text style={styles.errorMessage}>Country must be selected.</Text>}
                </View>

                <View style={styles.inputItem}>
                    <TextInput
                        style={styles.input}
                        placeholder="Mobile Number"
                        value={mobileNumber}
                        onChangeText={handleMobileNumberChange}
                        keyboardType="numeric"
                        required
                    />
                    {!isMobileValid && <Text style={styles.errorMessage}>Mobile number must be 10 digits.</Text>}
                </View>

                {isOtpSent && (
                    <View style={styles.inputItem}>
                        <TextInput
                            style={styles.input}
                            placeholder="OTP"
                            value={otp}
                            onChangeText={handleOtpChange}
                            keyboardType="numeric"
                            required
                        />
                        {!isOtpValid && <Text style={styles.errorMessage}>OTP must be 6 digits.</Text>}
                    </View>
                )}
            </View>

            <Pressable style={styles.submitButton} onPress={handleButtonPress}>
                <Text style={styles.btnText}>{buttonText}</Text>
            </Pressable>
        </View>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    header: {
        alignItems: "center",
        marginBottom: 40,
    },
    headertext: {
        fontWeight: "bold",
        fontSize: 20,
    },
    inputArea: {
        marginBottom: 20,
    },
    inputItem: {
        width: '100%',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 5,
    },
    pickerContainer: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 5,
    },
    picker: {
        height: 50,
        width: '100%',
    },
    label: {
        marginBottom: 5,
        fontWeight: 'bold',
    },
    errorMessage: {
        color: 'red',
        fontSize: 14,
    },
    submitButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});
