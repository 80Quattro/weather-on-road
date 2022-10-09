import React, { useEffect, useState } from 'react';

import LocationsForm from './LocationsForm';

import Drawer from '@mui/material/Drawer';

const NavigationDrawer = ({opened, handleSubmit}) => {

    const drawerWidth = 300;

    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        setMobileOpen(opened);
    }, [opened]);

    const handleDrawerClose = () => {
        setMobileOpen(false);
    };

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
                <LocationsForm parentCallback={handleSubmit}/>
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                <LocationsForm parentCallback={handleSubmit}/>
            </Drawer>
        </>
     );
}
 
export default NavigationDrawer;