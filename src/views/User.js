
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from './src/bd/Dashboard'; // Ensure the path and export are correct
import Client from './src/bd/NewClient';   
import Product from './src/bd/Product';   // Ensure the path and export are correct
import NewClient from './src/bd/NewClient';

const Drawer = createDrawerNavigator();

const User = () => {
  return (
    <NavigationContainer>
      {/* Set an initial route */}
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="NewClient" component={NewClient} />
        <Drawer.Screen name="Client" component={Client} />
        <Drawer.Screen name="Product" component={Product} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default User;


