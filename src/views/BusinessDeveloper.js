import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';



import Dashboard from './businessdeveloper/Dashboard';
import NewClient from './businessdeveloper/NewClient';
import Clients from './businessdeveloper/Clients';
import Product from './businessdeveloper/Product';
import Login from './Login';
// import Dashboard from './src/bd/Dashboard'; 
// import Clients from './src/bd/Clients';
// import Product from './src/bd/Product';
// import NewClient from './src/bd/NewClient';
// import Login from './src/Login'; 



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Drawer Navigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="NewClient" component={NewClient} />
      <Drawer.Screen name="Clients" component={Clients} />
      <Drawer.Screen name="Product" component={Product} />
    </Drawer.Navigator>
  );
}

// Main App
const BusinessDeveloper = () => {
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

export default BusinessDeveloper;


