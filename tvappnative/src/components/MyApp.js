import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { AppProvider } from 'shared/providers';

import { AuthScreen, HomeScreen, ContentItemSingleScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const MyApp = () => {
  return (
    <AppProvider>
      <NavigationContainer linking={{ enabled: true }}>
        <Stack.Navigator
          initialRouteName="/home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="/home" component={HomeScreen} />
          <Stack.Screen name="/auth" component={AuthScreen} />

          <Stack.Screen name="/watch" component={ContentItemSingleScreen} />

          <Stack.Screen name="/channel" component={ContentItemSingleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default MyApp;
