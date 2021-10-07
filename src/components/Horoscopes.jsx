import { Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import horoscopeFunc from '../files/horoscope';

function Horoscopes() {
    const [horoscopres, setHoroscopes] = useState(horoscopeFunc);
    let useStyles = makeStyles({
        signs: {
            width: "25rem",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "lightblue",
            padding: "20px 34px",
            margin: "-8px 50px"
        }
    })
    let classes = useStyles();
    return (
        <div style={{ paddingTop: "2rem" }}>

            <div style={{ fontWeight: "bold" }}>
                Daily Horoscopes
            </div>
            <Typography variant="subtitle1" gutterBottom component="div">
                Read your daily horoscope based on your sunshine, select your zordiac sign and give the right start to your day
            </Typography>
            <div style={{ display: "flex", minWidth:"25rem",overflow:"auto"}}>
                {horoscopres.map(function (horoscope) {
                    return (
                        <Paper className={classes.signs}>
                            <img alt="Avatar" style={{ borderRadius: "15rem" ,width:"10rem"}} src={horoscope.images.small.imageUrl} alt="" />
                            <div style={{ fontWeight: "bold" }}>
                                {horoscope.name}
                            </div>
                            <Typography variant="body2" gutterBottom component="div">
                                {horoscope.date}
                            </Typography>
                        </Paper>
                    )
                })}
            </div>
        </div>
    )
}

export default Horoscopes
