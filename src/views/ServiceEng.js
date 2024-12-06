
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import Dashboard from './src/serviceengg/Dashboard';
import Account from './src/serviceengg/Account';
import CompleteRequest from './src/serviceengg/CompleteRequest';
import NewRequest from './src/serviceengg/NewRequest';
import ProgressRequest from './src/serviceengg/ProgressRequest';
import Login from './src/serviceengg/Login';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Drawer Navigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="CompleteRequest" component={CompleteRequest} />
      <Drawer.Screen name="NewRequest" component={NewRequest} />
      <Drawer.Screen name="ProgressRequest" component={ProgressRequest} />
    </Drawer.Navigator>
  );
}

// Main App
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        
        {/* Drawer Navigator after login */}
        <Stack.Screen
          name="Main"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
