import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Alert, ScrollView,Image } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // For country picker
import { postData } from './ServerRequest'; // Ensure the import path is correct for your project


const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [country, setCountry] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [aadhaarNumber, setAadhaarNumber] = useState('');
    const [panNumber, setPanNumber] = useState('');
    const [drivingLicense, setDrivingLicense] = useState('');
    const [address, setAddress] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [buttonText, setButtonText] = useState('Send OTP');

    // Validation states
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isCompanyValid, setIsCompanyValid] = useState(true);
    const [isCountrySelected, setIsCountrySelected] = useState(false);
    const [isMobileValid, setIsMobileValid] = useState(true);
    const [isAadhaarValid, setIsAadhaarValid] = useState(true);
    const [isPanValid, setIsPanValid] = useState(true);
    const [isDrivingLicenseValid, setIsDrivingLicenseValid] = useState(true);
    const [isAddressValid, setIsAddressValid] = useState(true);
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

    const handleAadhaarChange = (text) => {
        setAadhaarNumber(text);
        setIsAadhaarValid(/^\d{12}$/.test(text)); // Aadhaar should be 12 digits
    };

    const handlePanChange = (text) => {
        setPanNumber(text);
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        setIsPanValid(panRegex.test(text)); // Validate PAN (Format: ABCDE1234F)
    };

    const handleDrivingLicenseChange = (text) => {
        setDrivingLicense(text);
        const dlRegex = /^[A-Z]{2}\d{13}$/; // Format: AA1234567890123 (Vary based on country/state)
        setIsDrivingLicenseValid(dlRegex.test(text));
    };

    const handleAddressChange = (text) => {
        setAddress(text);
        setIsAddressValid(text.trim().length > 0);
    };

    const handleOtpChange = (text) => {
        setOtp(text);
        setIsOtpValid(/^\d{6}$/.test(text)); // OTP should be 6 digits
    };

    // Function to handle OTP send
    const handleSendOtp = async () => {
        if (!isMobileValid || !isEmailValid || !isNameValid || !isCompanyValid || !isCountrySelected || !isAadhaarValid || !isPanValid || !isDrivingLicenseValid || !isAddressValid) {
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
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                {/* <Text style={styles.headertext}>Customer Registration</Text> */}

                <Image
                    source={require('../assets/topheader.png')}  // Use require for local images
                    style={styles.image}
                />
            </View>

            <View style={styles.inputArea}>
                <Text>Full Name</Text>
                <View style={styles.inputItem}>
                    <TextInput
                        style={styles.input}
                        value={fullName}
                        onChangeText={handleFullNameChange}
                        required
                    />
                    {!isNameValid && <Text style={styles.errorMessage}>Name is not valid.</Text>}
                </View>

                <View style={styles.inputItem}>
                    <Text>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={handleEmailChange}
                        required
                    />
                    {!isEmailValid && <Text style={styles.errorMessage}>Email is not valid.</Text>}
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
                    <Text>Mobile Number</Text>
                    <TextInput
                        style={styles.input}
                        value={mobileNumber}
                        onChangeText={handleMobileNumberChange}
                        keyboardType="numeric"
                        required
                    />
                    {!isMobileValid && <Text style={styles.errorMessage}>Mobile number must be 10 digits.</Text>}
                </View>

                <View style={styles.inputItem}>
                    <Text>Aadhaar Card</Text>
                    <TextInput
                        style={styles.input}
                        value={aadhaarNumber}
                        onChangeText={handleAadhaarChange}
                        keyboardType="numeric"
                        required
                    />
                    {!isAadhaarValid && <Text style={styles.errorMessage}>Aadhaar number must be 12 digits.</Text>}
                </View>

                <View style={styles.inputItem}>
                    <Text>PAN Card</Text>
                    <TextInput
                        style={styles.input}
                        value={panNumber}
                        onChangeText={handlePanChange}
                        required
                    />
                    {!isPanValid && <Text style={styles.errorMessage}>PAN number is invalid (e.g., ABCDE1234F).</Text>}
                </View>

                <View style={styles.inputItem}>
                    <Text>Driving License</Text>
                    <TextInput
                        style={styles.input}
                        value={drivingLicense}
                        onChangeText={handleDrivingLicenseChange}
                        required
                    />
                    {!isDrivingLicenseValid && <Text style={styles.errorMessage}>Driving License format is incorrect.</Text>}
                </View>

                <View style={styles.inputItem}>
                    <Text>Address</Text>
                    <TextInput
                        style={styles.input}
                        value={address}
                        onChangeText={handleAddressChange}
                        required
                    />
                    {!isAddressValid && <Text style={styles.errorMessage}>Address is required.</Text>}
                </View>

                {isOtpSent && (
                    <View style={styles.inputItem}>
                        <Text>Enter OTP</Text>
                        <TextInput
                            style={styles.input}
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


            <Pressable>
                <Text style={styles.login}> Have an account ? Log In</Text>
            </Pressable>
        </ScrollView>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    header: {
        alignItems: "center",
        marginBottom: 40,
        marginTop:80,
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
        marginBottom: 10,
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        width: '100%',
        fontSize: 16,
        color: '#6b7280',
        backgroundColor: 'transparent',
        borderBottomWidth: 2,
        borderBottomColor: '#D7D7D7',
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
        marginTop: 10,
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
    login:{
       marginTop:10,
      textAlign:"center",
      fontSize:17,
       marginBottom:60,
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});
