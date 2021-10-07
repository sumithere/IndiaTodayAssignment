import { Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import astro from '../files/astro';

function Astrologers() {
    const [astrologers, setAstrologers] = useState(astro);
    let useStyles = makeStyles({
        signs: {
            minWidth: "30rem",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center"
        },
        rates: {
            width: "3rem",
            wordWrap: "break-word"
        },
        ratings: {
            color: "#e97d31",
            fontWeight: "bold"
        },
        button: {
            backgroundColor: "#e97d31",
            height: "1.5rem",
            borderRadius: "5px",
            padding: "5px 23px",
            color: "white"
        },
        talkNow: {
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
        }
    })
    let classes = useStyles();
    return (
        <div style={{ paddingTop: "2rem" }}>
            <div>
                <div style={{ fontWeight: "bold" }}>
                    Talk to an Astrologer
                </div>
                <Typography variant="subtitle1" gutterBottom component="div">
                    Leading astrologers of india are just a phone call away.Our panels of astrologers not just provides solutions to our life problems but also guides you so that you can take the right path towards growth and prosperity
                </Typography>
            </div>
            <div style={{ display: "flex", minWidth: "25rem", overflow: "auto" }}>

                {astrologers.map(function (astrologer) {
                    return (<Paper className={classes.signs}>
                        <img style={{    height: "22rem"}} src={astrologer.images.medium.imageUrl} alt="" />
                        <div style={{
                            marginLeft: "-20px", display: "flex", justifyContent: "space-around", width: "100%"
                        }}>
                            <div style={{ fontWeight: "bold" }}>
                                {astrologer.firstName + " " + astrologer.lastName}
                            </div>
                            <div className={classes.ratings}>
                                {astrologer.rating}
                            </div>
                        </div>
                        <Typography style={{ display: "flex", marginLeft: "-14rem",justifyContent: "flex-start"}} variant="body2" gutterBottom component="div">
                            {astrologer.aboutMe}
                        </Typography>
                        <div className={classes.talkNow}>
                            <div className={classes.rates}>
                                Rs.{astrologer.minimumCallDurationCharges}/min
                            </div>
                            <div className={classes.button}>
                                Talk Now
                            </div>
                        </div>
                    </Paper>)
                })}
            </div>
        </div>
    )
}

export default Astrologers
