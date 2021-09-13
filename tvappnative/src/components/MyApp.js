import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { AppProvider } from 'shared/providers';

import { AuthScreen, HomeScreen, ContentItemSingleScreen } from '../../screens';

const Stack = createStackNavigator();

const MyApp = () => {
  return (
    <AppProvider>
      <NavigationContainer linking={{ enabled: true }}>
        <Stack.Navigator
          initialRouteName="/home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="/home" component={HomeScreen} />
          <Stack.Screen
            name="/auth"
            component={AuthScreen}
            headerShown={false}
          />
          <Stack.Screen
            name="/content-item"
            component={ContentItemSingleScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default MyApp;
