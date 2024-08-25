import React from 'react';
// import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { ListItemText } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { navbarItems } from './const/navbarItems';
import { navbarStyles } from './styles';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <Drawer
            sx={navbarStyles.drawer}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List>
                {navbarItems.map((item, index) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton onClick={() => navigate(item.route)} >
                            <ListItemIcon sx={navbarStyles.icons}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText sx={navbarStyles.text} primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Drawer>
    );
};

export default Navbar;