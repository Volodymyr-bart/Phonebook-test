import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { AppBar, Box } from '@mui/material';

import { StyledToolbar } from './AppBar.styled';

export const AppBarResponsive = () => {
  const { isLoggedIn, isRefreshing } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Navigation />
          {isLoggedIn && !isRefreshing && <UserMenu />}
          {!isLoggedIn && !isRefreshing && <AuthNav />}
          {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

// return (
//   <header className={css.header}>
//     <Navigation />
//     {isLoggedIn ? <UserMenu /> : <AuthNav />}
//   </header>
// );
