import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Card,
  CardContent,
  Typography,
  Fade,
  Box
} from '@mui/material';

// Material Icons
import MoreVert from '@mui/icons-material/MoreVert';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Notifications from '@mui/icons-material/Notifications';

// Handlers
const useMenuHandlers = () => {
  const [basicAnchorEl, setBasicAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [notifAnchorEl, setNotifAnchorEl] = useState(null);

  // Basic Menu Handlers
  const handleBasicClick = (event) => setBasicAnchorEl(event.currentTarget);
  const handleBasicClose = () => setBasicAnchorEl(null);

  // Profile Menu Handlers
  const handleProfileClick = (event) => setProfileAnchorEl(event.currentTarget);
  const handleProfileClose = () => setProfileAnchorEl(null);

  // Notification Popover Handlers
  const handleNotifClick = (event) => setNotifAnchorEl(event.currentTarget);
  const handleNotifClose = () => setNotifAnchorEl(null);

  return {
    basicAnchorEl,
    profileAnchorEl,
    notifAnchorEl,
    handleBasicClick,
    handleBasicClose,
    handleProfileClick,
    handleProfileClose,
    handleNotifClick,
    handleNotifClose
  };
};

const BasicMenu = ({ anchorEl, onClose, onClick }) => (
  <>
    <Button 
      aria-controls="basic-menu" 
      aria-haspopup="true" 
      onClick={handleBasicClick}
      startIcon={<MoreVert />}
    >
      Open Basic Menu
    </Button>
    <Menu
      id="basic-menu"
      anchorEl={basicAnchorEl}
      open={Boolean(basicAnchorEl)}
      onClose={handleBasicClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={handleBasicClose}>
        <ListItemIcon>
          <AccountCircle fontSize="small" />
        </ListItemIcon>
        <ListItemText>Profile</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleBasicClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        <ListItemText>Settings</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleBasicClose}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        <ListItemText>Logout</ListItemText>
      </MenuItem>
    </Menu>
  </div>
);

const ProfileMenu = () => (
  <div>
    <IconButton
      aria-label="account of current user"
      aria-controls="profile-menu"
      aria-haspopup="true"
      onClick={handleProfileClick}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
    <Menu
      id="profile-menu"
      anchorEl={profileAnchorEl}
      keepMounted
      open={Boolean(profileAnchorEl)}
      onClose={handleProfileClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={handleProfileClose}>
        <ListItemIcon>
          <AccountCircle fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem onClick={handleProfileClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleProfileClose}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  </div>
);

const NotificationPopover = () => (
  <div>
    <IconButton 
      aria-describedby="notif-popover" 
      onClick={handleNotifClick}
      color="inherit"
    >
      <Notifications />
    </IconButton>
    <Popover
      id="notif-popover"
      open={Boolean(notifAnchorEl)}
      anchorEl={notifAnchorEl}
      onClose={handleNotifClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Card sx={{ width: 300 }}>
        <CardContent>
          <div className="flex justify-between items-center mb-2">
            <Typography variant="h6" component="div">
              Notifications
            </Typography>
            <Typography variant="caption" color="text.secondary">
              3 new
            </Typography>
          </div>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <Notifications color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="New message" 
                secondary="You have 5 unread messages" 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Notifications color="secondary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Update available" 
                secondary="New version is available" 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Notifications color="success" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Order complete" 
                secondary="Your order has been shipped" 
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Popover>
  </div>
);
