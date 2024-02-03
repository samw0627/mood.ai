import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SwipeableTemporaryDrawer from './Sidebar';

export default function ButtonAppBar() {
    const [showsidebar, setShowSidebar] = React.useState(false);

    const handleShowSidebar = () => {
        setShowSidebar(!showsidebar);
    }
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <SwipeableTemporaryDrawer />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mood.ai
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}