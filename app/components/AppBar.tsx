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

export default function AppBarWithDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (state: boolean) => () => setOpen(state);

  const menuItems = ['Home', 'About', 'Contact'];

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
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            sx: {
              width: 350, // 設定 Drawer 寬度
            },
          },
        }}
      >
        <List>
          {menuItems.map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* 避免 AppBar 遮住頁面 */}
      <div style={{ marginTop: 64 }} />
    </>
  );
}
