import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { AppProvider } from 'shared/providers';
import { Box } from 'shared/ui-kit';

import { AuthScreen, HomeScreen } from '../../screens';

import DemoNative from './DemoNative';

const Stack = createStackNavigator();

const MyApp = () => {
  return (
    <AppProvider>
      <Box backgroundColor="fill.paper">
        <Box backgroundColor="fill.screen" alignItems="center" p="s">
          <DemoNative />
        </Box>
      </Box>
      <NavigationContainer linking={{ enabled: true }}>
        <Stack.Navigator
          initialRouteName="/auth"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="/auth"
            component={AuthScreen}
            headerShown={false}
          />
          <Stack.Screen name="/home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default MyApp;
