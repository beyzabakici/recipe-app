import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {MainPage, DetailPage} from '../src/pages';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Main Page" component={MainPage} />
        <Stack.Screen mode="modal" name="Detail Page" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
