import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

const pages = [
    { name: 'Home', link: '/' },
    { name: 'Artikel', link: '/articles' },
    { name: 'Destination', link: '/destinations' },
    { name: 'About Us', link: '/about-us' }
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const logo = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/Tak_berjudul63-hd__2_-removebg-preview.png?alt=media&token=eca5f180-7753-4567-94a5-6ed13f674861";

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar elevation={0} position="fixed" sx={{ bgcolor: "#F8FFF8", px: { md: 13 } }}>
            <Container maxWidth="xl" sx={{ px: { md: 0 } }}>
                <Toolbar disableGutters>
                    {/* logo md*/}
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Box
                        component="img"
                        src={logo}
                        alt="GreenWay"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            height: 40, // Adjust as needed
                            mr: 1,
                        }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            // letterSpacing: '.3rem',
                            color: '#006E6F',
                            textDecoration: 'none',
                        }}
                    >
                        GreenWay
                    </Typography>
                    {/* pages */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem key={index} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" sx={{ color: '#006E6F' }}>{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* logo xs*/}
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#006E6F',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    {/* pages */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#006E6F', display: 'block' }}
                                component={Link}
                                to={page.link}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    {/* login */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> */}
                            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                            <Box>
                                <Button sx={{ bgcolor: "#006E6F" }} variant="contained">Login</Button>
                            </Box>
                            {/* </IconButton> */}
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
