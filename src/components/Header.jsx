import React from 'react'
import { makeStyles } from '@material-ui/core';
import leftLogo from '../images/pics/hamburger.png';
import middleLogo from '../images/pics/logo.png';
import rightLogo from '../images/pics/profile.png';


function Header() {
    let useStyles = makeStyles({
        flex: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            height:"2rem",
            position: "fixed",
            top: "0px",
            left: "0px",
            width:"100%"
        },
        height:{
            height:"inherit"
        }
    })
    let classes = useStyles();

    return (
        <div className={classes.flex}>
            <img className={classes.height} src={leftLogo} alt="Logo" />
            <img className={classes.height} src={middleLogo} alt="Logo" />
            <img className={classes.height} src={rightLogo} alt="Logo" />
        </div>
    )
}

export default Header
