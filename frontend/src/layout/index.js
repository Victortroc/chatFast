import React, { useState, useContext, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Drawer, AppBar, Toolbar, List, Typography, IconButton, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../context/Auth/AuthContext';
import { socketConnection } from '../services/socket';

const drawerWidth = 240;

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100vh',
}));

const AppBarStyled = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerStyled = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    }),
  },
}));

const SimplifiedLayout = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const socket = socketConnection({ username: user.username });

    socket.on(`user-${user.id}-auth`, (data) => {
      if (data.user.id === user.id) {
        alert('Sua conta foi acessada em outro computador.');
        localStorage.clear();
        window.location.reload();
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [user]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Root>
      <AppBarStyled position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 5, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Simplified Layout
          </Typography>
        </Toolbar>
      </AppBarStyled>
      <DrawerStyled variant="permanent" open={open}>
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {/* Add your list items here */}
        </List>
      </DrawerStyled>
      <main>
        <div />
        <Outlet />
      </main>
    </Root>
  );
};

export default SimplifiedLayout;
