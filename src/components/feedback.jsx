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

export default function Feedback() {
  return (
    <Card
      className="feedback"
      sx={{margin: "16px", marginLeft: "4px", backgroundColor: 'rgb(60, 60, 60)',
            transition: 'background-color 0.3s ease', maxWidth: 495,height: "400px",display:"flex",flexDirection:"column",

    '&:hover': {
      animationTimeline: "5s",
      backgroundColor: 'rgb(99, 99, 99)', 
    }, }}
    >
      <CardContent  sx={{ flexGrow: 1 }}>
        <div>
          <StarIcon style={{ fontSize: 64, color: 'gold' }} />
          <StarIcon style={{ fontSize: 64, color: 'gold' }} />
          <StarIcon style={{ fontSize: 64, color: 'gold' }} />
          <StarIcon style={{ fontSize: 64 }} />
          <StarIcon style={{ fontSize: 64 }} />
        </div>
        <Typography component="div" sx={{ fontSize: 'clamp(1rem, 1.5vw, 2rem)' }}>
          3 Nervliche zusammenbrüche bei der Lego-suche wurden beobachtet. Dennoch überzeugt das Projekt durch die konsequente Integration von LEGO-Elementen – ein klarer Pluspunkt. Geeignet für Kinder ab 6. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={getgood} sx={{alignSelf:'flex-end'}}>
          Dont like This?
        </Button>
      </CardActions>
    </Card>
  );
}