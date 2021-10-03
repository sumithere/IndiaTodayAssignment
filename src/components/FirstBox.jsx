import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core';
import middleLogo from '../images/pics/logo.png';
import { Typography } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';


//do box banenge 
// ek upar ek neeche 
//unke andar flex honge items
// first ke andar image andd typo
// dusre ke andar typography and button
function FirstBox() {
    const [state,setState] = useState([1,2,3,4,5]);
    let useStyles = makeStyles({
        flex: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            height: "10rem",
            width: "20rem"
        },
        height: {
            height: "52px",
            marginTop: "14px"
        }
        ,
        fTypo: {
            width: "9rem"
        },
        width: {
            width: "14rem",
            margin: "0 auto"
        },
        button: {
            backgroundColor: "#e97d31",
            margin: "0 auto",
            height: "2rem",
            borderRadius: "5px",
            padding: "9px 31px",
            color:"white"
        }
    })
    let classes = useStyles();

    return (
        <div style={{display:"flex" ,minWidth:"25rem" ,overflow:"auto"}}>
            {state.map(function(box){
                return(
                    <Card style={{
                        height: "20rem",
                        minWidth: "21rem",
                        margin: "0rem 3rem"
                    }} sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <div className={classes.flex}>
                                <img className={classes.height} src={middleLogo} alt="Logo" />
                                <Typography class={classes.fTypo} variant="body2" gutterBottom>
                                    Not Sure About Your Appraisal?
                                </Typography>
                            </div>
                            <Typography className={classes.width} align="center" variant="body2" color="text.secondary">
                                Download holoscropes report at at rs.51 and get 100% cashback .Use Coupon Code:RT100
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <div className={classes.button}>
                                Visit   
                                <span style={{color:"black"}}>  astrotak.com</span> Now!
                            </div>
                        </CardActions>
                    </Card>
                )
            })}

        </div>
    )
}

export default FirstBox;


