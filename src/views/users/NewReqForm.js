import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import NewRequest from './NewRequest';

const NewReqForm = ({ route }) => {
    const { requestingFor } = route.params; // Get the pre-selected value
    const [formData, setFormData] = useState({
        requestingFor: requestingFor || '', // Initialize with the passed value
        anydeskID: '',
        engineer: '',
        subject: '',
        description: '',
    });

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };


      const handleImageUpload = async () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
        };

        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('Image selection canceled');
            } else if (response.errorMessage) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                const selectedImage = response.assets[0];
                setFormData({ ...formData, imageUri: selectedImage.uri });
                console.log('Selected Image: ', selectedImage.uri);
            }
        });
    };


    const handleSubmit = () => {
        console.log('Form Submitted:', formData);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Submit a Request</Text>

            {/* Requesting For */}
            <Text style={styles.label}>Requesting For</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={formData.requestingFor}
                    onValueChange={(value) => handleInputChange('requestingFor', value)}
                >
                    <Picker.Item label="Select" value="" />
                    <Picker.Item label="System Issue/Request" value="System Issue/Request" />
                    <Picker.Item label="Hardware Issue" value="Hardware Issue" />
                    <Picker.Item label="Internet Issue" value="Internet Issue" />
                    <Picker.Item label="Mail Issue" value="Mail Issue" />
                    <Picker.Item label="Tally Issue/Request" value="Tally Issue/Request" />
                    <Picker.Item label="Others" value="Others" />
                </Picker>
            </View>

            {/* Anydesk ID */}
            <Text style={styles.label}>Anydesk ID</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Anydesk ID"
                value={formData.anydeskID}
                onChangeText={(text) => handleInputChange('anydeskID', text)}
            />

            {/* Select Engineer */}
            <Text style={styles.label}>Select Engineer</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={formData.engineer}
                    onValueChange={(value) => handleInputChange('engineer', value)}
                >
                    <Picker.Item label="Select" value="" />
                    <Picker.Item label="Engineer 1" value="Engineer 1" />
                    <Picker.Item label="Engineer 2" value="Engineer 2" />
                </Picker>
            </View>

            {/* Subject */}
            <Text style={styles.label}>Subject</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Subject"
                value={formData.subject}
                onChangeText={(text) => handleInputChange('subject', text)}
            />

            {/* Description */}
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Enter Description"
                multiline
                numberOfLines={4}
                value={formData.description}
                onChangeText={(text) => handleInputChange('description', text)}
            />

            {/* Image Upload */}
            {/* <Text style={styles.label}>Upload Image</Text>
            <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
                <Text style={styles.uploadButtonText}>Choose Image</Text>
            </TouchableOpacity>
            {formData.imageUri && (
                <Image source={{ uri: formData.imageUri }} style={styles.imagePreview} />
            )} */}

            {/* Submit Button */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8B939A",
        padding: 20,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 15,
        fontSize: 14,
    },
    pickerContainer: {
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 15,
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    uploadButton: {
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    uploadButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 15,
        borderRadius: 5,
    },
});

export default NewReqForm;