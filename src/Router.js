import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {MainPage} from '../src/pages';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main Page" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;