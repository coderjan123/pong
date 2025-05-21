import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';


function getgood(){
    alert("Skillissue found")
}

export default function Feedback2() {
  return (
    <Card
      className="feedback"
      sx={{margin: "16px", marginLeft: "4px", backgroundColor: 'rgb(60, 60, 60)',display:"flex",flexDirection:"column",

            transition: 'background-color 0.3s ease', maxWidth: 495,height: "clamp(10rem, 28vw, 200rem)", 

    '&:hover': {
      animationTimeline: "5s",
      backgroundColor: 'rgb(99, 99, 99)',
    }, }}
    >
      <CardContent sx={{flexGrow:1}}>
        <div>
          <StarIcon style={{ fontSize: 64, color: 'gold' }} />
          <StarIcon style={{ fontSize: 64, color: 'gold' }} />
          <StarIcon style={{ fontSize: 64, color: 'gold' }} />
          <StarIcon style={{ fontSize: 64, color: 'gold' }} />
          <StarIcon style={{ fontSize: 64, color: 'gold' }} />
        </div>
        <Typography component="div" sx={{ fontSize: 'clamp(1rem, 1.5vw, 2rem)' }}>
        Mochte die Lego-Element. Weiß nun was "LEGO" bedeutet. Habe außerdem gelernt zu lesen. Würde es weiterempfehlen!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={getgood} sx={{alignSelf:"flex-end"}}>
          Dont like This?
        </Button>
      </CardActions>
    </Card>
  );
}