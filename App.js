import Home from './src/pages/Home';
import HomeScreen from './src/pages/HomeScreen'
import Login from './src/pages/Login'

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthProvider from './src/contexts/auth';




const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Tab.Navigator>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
          <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
