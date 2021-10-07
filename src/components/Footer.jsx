import React from 'react'
import { makeStyles } from '@material-ui/core';
import home from '../images/pics/home.png';
import reports from '../images/pics/reports.png';
import talk from '../images/pics/talk.png';
import ask from '../images/pics/ask.png';



function Footer() {
    let useStyles = makeStyles({
        flex: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            height: "2rem",
            position: "fixed",
            bottom: "0px",
            left: "0px",
            width:"100%"
        },
        height: {
            height: "inherit"
        }
    })
    let classes = useStyles();

    return (
        <div className={classes.flex}>
            <img className={classes.height} src={home} alt="Logo" />
            <img className={classes.height} src={talk} alt="Logo" />
            <img className={classes.height} src={ask} alt="Logo" />
            <img className={classes.height} src={reports} alt="Logo" />
        </div>
    )
}

export default Footer
