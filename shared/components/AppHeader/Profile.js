import { logout, useAuth } from 'shared/providers/AuthProvider';
import { useNavigation } from 'shared/router';

import { Box, Button, SystemText } from 'shared/ui-kit';

function Profile(props = {}) {
  const [{ authenticated }, dispatch] = useAuth();
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.push('/auth');
  };

  const handleLogout = () => {
    dispatch(logout());
    navigation.push('/auth');
  };

  return (
    <Box
      flex={1}
      flexDirection="row"
      justifyContent="flex-end"
      alignItems="center"
      {...props}
    >
      {authenticated ? (
        <>
          <SystemText>You are signed in.</SystemText>
          <Box ml="s">
            <Button title="Sign out" onPress={handleLogout} />
          </Box>
        </>
      ) : (
        <Button title="Sign in" onPress={handleLogin} />
      )}
    </Box>
  );
}

export default Profile;
