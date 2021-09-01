import { logout, useAuth } from 'shared/providers/AuthProvider';
import { useNavigation } from 'shared/router';

import { Box, Button, SmallSystemText } from 'shared/ui-kit';

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
          <SmallSystemText>You are signed in.</SmallSystemText>
          <Box ml="s">
            <Button title="Sign out" size="micro" onPress={handleLogout} />
          </Box>
        </>
      ) : (
        <Button title="Sign in" size="micro" onPress={handleLogin} />
      )}
    </Box>
  );
}

export default Profile;
