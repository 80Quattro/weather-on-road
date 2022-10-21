import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({parentCallback}) => {
    return ( 
        <Box sx={{ display: { sm: 'none' }, flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={parentCallback}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
     );
}
 
export default Header;