import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native'; // or use your navigation system

const serverUrl = 'https://d1fo4cyuvtwu1s.cloudfront.net'; // Your server URL

// Clear stored token
const clearToken = async () => {
    try {
        await AsyncStorage.removeItem('token');
    } catch (error) {
        console.error('Error clearing token:', error);
    }
};

// Get token from AsyncStorage
const getToken = async () => {
    try {
        return await AsyncStorage.getItem('token');
    } catch (error) {
        console.error('Error retrieving token:', error);
        return null;
    }
};

// Save token to AsyncStorage (if needed)
const setToken = async (token) => {
    try {
        await AsyncStorage.setItem('token', token);
    } catch (error) {
        console.error('Error saving token:', error);
    }
};

// GET request
export async function getData(url) {
    let requesturl = serverUrl + url;
    let response_data = {
        'code': 500,
        'message': "There is some issue in request",
        'data': ''
    };

    const token = await getToken();

    if (token) {
        await axios.get(requesturl, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            }
        })
            .then(res => {
                response_data['code'] = 200;
                response_data['data'] = res.data;
            })
            .catch(async function (error) {
                if (error.response && error.response.status === 403) {
                    await clearToken();
                    Alert.alert("Session expired", "You need to log in again.");
                    // Here you can redirect to login page using your navigation
                } else {
                    console.error('Error:', error.message);
                }
            });
    }
    return response_data;
}

// POST request
export async function postData(url, requested_data) {
    let requesturl = serverUrl + url;
    console.log(requesturl)
    let response_data = {
        'code': 500,
        'message': "There is some issue in request",
        'data': ''
    };

    const token = await getToken();
            console.log(requested_data)
            console.log(token)
    await axios.post(requesturl, requested_data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        }

    })
        .then(res => {
            response_data['code'] = 200;
            response_data['data'] = res.data;
        })
        .catch(error => {
            console.error('Error:', error);
        });

    return response_data;
}

// POST form data
export async function postFormData(url, requested_data) {
    let requesturl = serverUrl + url;
    let response_data = {
        'code': 500,
        'message': "There is some issue in request",
        'data': ''
    };

    const token = await getToken();

    await axios.post(requesturl, requested_data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': token,
        }
    })
        .then(res => {
            response_data['code'] = 200;
            response_data['data'] = res.data;
        })
        .catch(error => {
            console.error('Error:', error);
        });

    return response_data;
}

// GET Company List
export async function getCompanyList() {
    let requesturl = serverUrl + '/api/company';
    let response_data = {
        'code': 500,
        'message': "There is some issue in request",
        'data': ''
    };

    const token = await getToken();

    await axios.get(requesturl, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        }
    })
        .then(res => {
            let companyList = [];
            if (res.data) {
                res.data.entities.forEach(entity => {
                    companyList.push({
                        value: entity.id,
                        label: entity.name,
                    });
                });
            }
            response_data['code'] = 200;
            response_data['data'] = companyList;
        })
        .catch(async function (error) {
            if (error.response && error.response.status === 403) {
                await clearToken();
                Alert.alert("Session expired", "You need to log in again.");
                // Handle redirection to login
            } else {
                console.error('Error:', error.message);
            }
        });

    return response_data;
}
