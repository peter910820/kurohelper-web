'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Link from 'next/link';

export default function AppBarWithDrawer() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const toggleDrawer = (state: boolean) => () => setDrawerOpen(state);

  const handleLogin = () => {
    setLoginDialogOpen(false);
    // TODO: 實現登入邏輯
  };

  return (
    <>
      {/* AppBar */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="menu"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            KuroHelper
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => setLoginDialogOpen(true)}>
            登入
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            sx: {
              width: 350,
            },
          },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/" onClick={toggleDrawer(false)}>
              <ListItemText primary="首頁" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Login Dialog */}
      <Dialog open={loginDialogOpen} onClose={() => setLoginDialogOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>登入</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="帳號"
            type="text"
            fullWidth
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mt: 2 }}
          />
          <TextField
            margin="dense"
            label="密碼"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLoginDialogOpen(false)}>取消</Button>
          <Button onClick={handleLogin} variant="contained">
            登入
          </Button>
        </DialogActions>
      </Dialog>

      {/* 避免 AppBar 遮住頁面 */}
      <Toolbar />
    </>
  );
}
