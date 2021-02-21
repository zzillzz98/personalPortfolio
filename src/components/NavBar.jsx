import React, { useState, useEffect } from 'react'

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


//other imports
import Logo from './../assets/Zille logo.png'
import history from './../history'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        maxWidth: "200px",
    },
    toolbar: {
        backgroundColor: "#D3E3FC"
    },
    socials: {
        flex: 1,
    },
    button: {
        textTransform: 'none',
        color: "#00887A",
        fontSize: '20px',
        "&:hover" : {
            color: "#FFCCBC",
        }
    }
}));



const NavBar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [state, setState] = useState({
        mobileView: false
    })
    const { mobileView } = state;

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProjects = () => {
        handleClose();
        history.push('/Projects');
    }

    const handleTimeline = () => {
        handleClose();
        history.push('/Timeline');
    }

    const handleSocials = () => {
        handleClose();
        history.push('/Socials');
    }

    const handleContact = () => {
        handleClose();
        history.push('/Contact');
    }


    const DesktopView = () => {
        return (
            <Toolbar className={classes.toolbar}>
                <div className={classes.socials}>
                    <Button>
                        <img src={Logo} className={classes.logo} onClick={() => history.push('/')} />
                    </Button>
                    <Button className={classes.button} onClick={() => history.push('/Timeline')}>
                        Timeline
                    </Button>

                    <Button className={classes.button} onClick={() => history.push('/Projects')}>
                        Projects
                    </Button>

                    <Button className={classes.button} onClick={() => history.push('/Socials')}>
                        Socials
                    </Button>
                </div>
                <Button className={classes.button} onClick={() => history.push('/Contact')}>
                    Contact
                </Button>
            </Toolbar>
        )
    }

    const MobileView = () => {
        return (
            <Toolbar className={classes.toolbar}>
                <div className={classes.socials}>
                    <Button>
                        <img src={Logo} className={classes.logo} onClick={() => history.push('/')} />
                    </Button>
                </div>
                <div>
                    <Button className={classes.button}>
                        <MenuIcon
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                        />
                    </Button>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleTimeline} className={classes.button}>Timeline</MenuItem>
                        <MenuItem onClick={handleProjects} className={classes.button}>Projects</MenuItem>
                        <MenuItem onClick={handleSocials} className={classes.button}>Socials</MenuItem>
                        <MenuItem onClick={handleContact} className={classes.button}>Contact</MenuItem>

                    </Menu>
                </div>
            </Toolbar>
        )
    }




    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness());
    }, []);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                {mobileView ? MobileView() : DesktopView()}
            </AppBar>
        </div>
    )
}

export default NavBar;