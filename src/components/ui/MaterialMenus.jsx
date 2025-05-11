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
  Fade
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function MaterialMenus() {
  // Basic Menu State
  const [basicAnchorEl, setBasicAnchorEl] = useState(null);
  
  // Profile Menu State
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  
  // Notification Popover State
  const [notifAnchorEl, setNotifAnchorEl] = useState(null);

  // Handlers for Basic Menu
  const handleBasicClick = (event) => {
    setBasicAnchorEl(event.currentTarget);
  };

  const handleBasicClose = () => {
    setBasicAnchorEl(null);
  };

  // Handlers for Profile Menu
  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  // Handlers for Notification Popover
  const handleNotifClick = (event) => {
    setNotifAnchorEl(event.currentTarget);
  };

  const handleNotifClose = () => {
    setNotifAnchorEl(null);
  };

  return (
    <div className="space-y-8">
      {/* Basic Menu */}
      <div>
        <h4 className="text-lg font-medium mb-4">Basic Menu</h4>
        <IconButton onClick={handleBasicClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={basicAnchorEl}
          open={Boolean(basicAnchorEl)}
          onClose={handleBasicClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleBasicClose}>Profile</MenuItem>
          <MenuItem onClick={handleBasicClose}>My account</MenuItem>
          <MenuItem onClick={handleBasicClose}>Logout</MenuItem>
        </Menu>
      </div>

      {/* Profile Menu with Icons */}
      <div>
        <h4 className="text-lg font-medium mb-4">Profile Menu with Icons</h4>
        <Button
          variant="outlined"
          startIcon={<AccountCircleIcon />}
          onClick={handleProfileClick}
        >
          Profile
        </Button>
        <Menu
          anchorEl={profileAnchorEl}
          open={Boolean(profileAnchorEl)}
          onClose={handleProfileClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleProfileClose}>
            <ListItemIcon>
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleProfileClose}>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleProfileClose}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </Menu>
      </div>

      {/* Notification Popover */}
      <div>
        <h4 className="text-lg font-medium mb-4">Notification Popover</h4>
        <IconButton onClick={handleNotifClick} color="primary">
          <NotificationsIcon />
        </IconButton>
        <Popover
          open={Boolean(notifAnchorEl)}
          anchorEl={notifAnchorEl}
          onClose={handleNotifClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Card sx={{ minWidth: 300, maxWidth: 400 }}>
            <CardContent>
              <Typography variant="h6" component="h3" gutterBottom>
                Notifications
              </Typography>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="New Message"
                    secondary="John Doe sent you a message"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="System Update"
                    secondary="Your system is up to date"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="New Feature"
                    secondary="Check out our latest features"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Popover>
      </div>
    </div>
  );
}
