import { logout, useAuth } from 'shared/providers/AuthProvider';
import { useNavigation } from 'shared/router';

import { Avatar, Box, Button } from 'shared/ui-kit';

function Profile(props = {}) {
  const [{ authenticated }, dispatch] = useAuth();
  const router = useNavigation();

  const handleLogin = () => {
    router.push('/auth');
  };

  const handleLogout = () => {
    // eslint-disable-next-line no-alert
    const logoutConfirmed = window.confirm('Do you want to sign out?');

    if (logoutConfirmed) {
      dispatch(logout());
      router.push('/auth');
    }
  };

  return (
    <Box {...props}>
      {authenticated ? (
        <Avatar width="54px" onPress={handleLogout} />
      ) : (
        <Button title="Sign in" size="micro" onPress={handleLogin} />
      )}
    </Box>
  );
}

export default Profile;
