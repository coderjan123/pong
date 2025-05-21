import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

function getgood(){
    alert("Skillissue found")
}

export default function Feedback() {
  return (
    <Card
      className="feedback"
      sx={{
        margin: "16px 4px",
        backgroundColor: 'rgb(60, 60, 60)',
        transition: 'background-color 0.3s ease',
        minWidth: 495,
        flexBasis: "495px",
        maxWidth:700,
        flexGrow: 1,
        flexShrink:1,
       
        minHeight: 495,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        '&:hover': {
          backgroundColor: 'rgb(99, 99, 99)', 
        },border: "2px solid red"
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <div>
          <StarIcon sx={{ fontSize: 64, color: 'gold' }} />
          <StarIcon sx={{ fontSize: 64, color: 'gold' }} />
          <StarIcon sx={{ fontSize: 64, color: 'gold' }} />
          <StarIcon sx={{ fontSize: 64 }} />
          <StarIcon sx={{ fontSize: 64 }} />
        </div>
        <Typography component="div" sx={{ fontSize: 24, marginTop: 2 }}>
          3 Nervliche zusammenbrüche bei der Lego-suche wurden beobachtet. Dennoch überzeugt das Projekt durch die konsequente Integration von LEGO-Elementen – ein klarer Pluspunkt. Geeignet für Kinder ab 6. 
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button size="small" onClick={getgood}>
          Dont like This?
        </Button>
      </CardActions>
    </Card>
  );
}
