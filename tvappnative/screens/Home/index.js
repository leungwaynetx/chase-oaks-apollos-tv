import React from 'react';
import { useNavigation } from 'shared/router';

import { Card, BodyText, Button, SystemText, Box, Layout } from 'shared/ui-kit';
import { useAuth, logout } from 'shared/providers/AuthProvider';

const HomeScreen = () => {
  const [{ authenticated }, dispatch] = useAuth();
  const navigation = useNavigation();

  const handleLogout = () => {
    dispatch(logout());
    navigation.push('/auth');
  };

  return (
    <Box backgroundColor="fill.paper">
      <Layout pt="200px">
        <Box alignItems="center">
          <BodyText>
            {authenticated &&
              'Success! You are Logged In. This is the future Home Screen'}
          </BodyText>
          <>
            {authenticated ? (
              <Card mt="l" textAlign="center">
                <SystemText color="base.success" mb="base">
                  {'✅  You are signed in'}
                </SystemText>
                <Button title="Sign out" onPress={handleLogout} />
              </Card>
            ) : (
              <Card mt="l" textAlign="center">
                <SystemText color="base.alert" mb="base">
                  {'😅 You are not signed in'}
                </SystemText>
                <Button
                  title="Sign In"
                  onPress={() => navigation.push('/auth')}
                />
              </Card>
            )}
            {/* <DemoTypography /> */}
          </>
        </Box>
      </Layout>
    </Box>
  );
};

export default HomeScreen;
