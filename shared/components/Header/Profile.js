import { logout, useAuth } from 'shared/providers/AuthProvider';
import { useNavigation } from 'shared/router';
import { useCurrentUser } from 'shared/hooks';

import {
  Avatar,
  Box,
  Button,
  BodyText,
  PressableBox,
  Menu,
} from 'shared/ui-kit';

function Profile(props = {}) {
  const [{ authenticated }, dispatch] = useAuth();
  const router = useNavigation();
  const { currentUser } = useCurrentUser();
  const loggedInQuery = authenticated
    ? `?rckipid=${currentUser?.rock?.authToken}`
    : '';

  const handleUpdateProfile = () => {
    router.push(`https://rock.chaseoaks.org/MyAccount${loggedInQuery}`);
  };

  const handleLogin = () => {
    router.push('/auth');
  };
  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
  };

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <Box {...props}>
      {authenticated ? (
        <Menu
          renderTrigger={({ toggle }) => (
            <PressableBox onPress={toggle}>
              <Avatar
                name={currentUser?.profile?.firstName}
                src={currentUser?.profile?.photo?.uri}
                width="54px"
                height="54px"
              />
            </PressableBox>
          )}
        >
          <BodyText px="base" py="xs" fontWeight="700" selectable={false}>
            Hello, {currentUser?.profile?.firstName}!
          </BodyText>
          <Menu.Link
            href="#0"
            onClick={handleUpdateProfile}
            px="base"
            py="xs"
            borderTop="1px solid"
            borderColor="fill.system"
            target="_blank"
            rel="noopener"
          >
            Update Profile
          </Menu.Link>
          <Menu.Link
            href="#0"
            onClick={handleLogout}
            px="base"
            py="xs"
            borderTop="1px solid"
            borderColor="fill.system"
          >
            Sign out
          </Menu.Link>
        </Menu>
      ) : (
        <Box>
          <Button title="Sign in" size="micro" onPress={handleLogin} />
        </Box>
      )}
    </Box>
  );
}

export default Profile;
