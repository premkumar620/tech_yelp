import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import Screens
import Login from './Login';
import Onboarding from './Onboarding';
import Dashboard from './users/Dashboard';
import MyTicket from './users/MyTicket';
import NewRequest from './users/NewRequest';
import NewReqForm from './users/NewReqForm';

// Create Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator for Main App
const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Dashboard"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Dashboard') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'MyTicket') {
          iconName = focused ? 'ticket' : 'ticket-outline';
        } else if (route.name === 'NewRequest') {
          iconName = focused ? 'add-circle' : 'add-circle-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        paddingBottom: 5,
        height: 60,
        paddingTop: 5,
        backgroundColor: '#f8f8f8',
      },
      tabBarLabelStyle: {
        fontSize: 12,
        marginBottom: 5,
      },
    })}
  >
    <Tab.Screen name="Dashboard" component={Dashboard} />
    <Tab.Screen name="MyTicket" component={MyTicket} />
    <Tab.Screen name="NewRequest" component={NewRequest} />
  </Tab.Navigator>
);

// Stack Navigator for Authentication and Main App
const MainStack = () => (
  <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="NewReqForm" component={NewReqForm} />
    <Stack.Screen name="Main" component={TabNavigator} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
);

export default App;
