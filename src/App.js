import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigator'; // Importe o seu MenuNavigator aqui

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
