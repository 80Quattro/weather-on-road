import React, { useEffect, useState } from 'react';

import LocationsForm from './LocationsForm';
import Logo from './Logo';

import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

const NavigationDrawer = ({drawerWidth, opened, handleSubmit}) => {

    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        setMobileOpen(opened);
    }, [opened]);

    const handleDrawerClose = () => {
        setMobileOpen(false);
    };

    const drawerBody = (<>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Logo />
                    </Toolbar>
                </AppBar>
                <LocationsForm parentCallback={handleSubmit}/> 
            </Box>
        </>
    );

    return ( 
        <>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }} 
            >

                {drawerBody}

            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >

                {drawerBody}

            </Drawer>
        </>
     );
}
 
export default NavigationDrawer;