import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

function CardComponent() {
    return (
        <div>
            <Card sx={{ display: 'flex' ,marginBottom: "3rem" ,justifyContent: "space-between", marginTop:"1rem"}}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            ""There is no better boat than horoscope to help a man cross over sea of life""
                        </Typography>
                        <Typography align="right" component="div" variant="h5">
                            -Vam Hamihira 
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 ,borderRadius:"8rem"}}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9fIDvX5lJajq-t-iKNnjFfp6mq7ASlUNKA&usqp=CAU"
                    alt="Ganesha photo"
                />
            </Card>
        </div>
    )
}

export default CardComponent
