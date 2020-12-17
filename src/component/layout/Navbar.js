import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link, NavLink, Route } from "react-router-dom";
import Volleyball from '../pages/VolleyBall';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

export default function MenuListComposition() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={classes.root}>
            
                            <NavLink className="nav-link" exact to="/" >HomePage </NavLink>
                    
                       
                            <NavLink className="nav-link" exact to="/aboutus">AboutUs </NavLink>
                
                            <NavLink className="nav-link" exact to="/contactus" >ContactUs </NavLink>
                    

            <div>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    Sports
        </Button>

       

                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={handleClose} >
                                            <NavLink className="nav-link" exact to="/sports/VolleyBall">VolleyBall </NavLink>
                                            {/* <NavLink className="nav-link" exact to="/sports/VolleyBall/Registration">VolleyBall </NavLink> */}

                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                        <NavLink className="nav-link" exact to="/sports/Badmintion">Badmintion </NavLink>
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>Cricket</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>


                
            </div>
        </div>
    );
}


// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//                 <div className="conatiner">
//                     <a className="navbar-brand" href="/" style={{ textAlign: 'center' }}><h2>Champla Thanda Sports Fest</h2></a>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>

//                     <div className="collapse navbar-collapse" >
//                         <ul className="navbar-nav mr-auto">
//                             {/* <li className="nav-item ">
//                             <NavLink className="nav-Link" exact to="/" style={{color:'white'}}>HomePage </NavLink>
//                         </li> */}
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" exact to="/">HomePage </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" exact to="/aboutus">AboutUs </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" exact to="/contactus" >ContactUs </NavLink>
//                             </li>

//                         </ul>

//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// };

// export default Navbar;