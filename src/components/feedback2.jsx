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

export default function Feedback2() {
  return (
    <Card
      className="feedback"
      sx={{
        margin: "16px 4px",
        backgroundColor: 'rgb(60, 60, 60)',
        display: "flex",
        flexDirection: "column",
        transition: 'background-color 0.3s ease',
        minWidth: 495,
        flexBasis: "495px",
        maxWidth:700,
        flexGrow:1,
        flexShrink:1,
   
        minHeight: 495,
        justifyContent: "space-between",
        '&:hover': {
          backgroundColor: 'rgb(99, 99, 99)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <div>
          <StarIcon sx={{ fontSize: 64, color: 'gold' }} />
          <StarIcon sx={{ fontSize: 64, color: 'gold' }} />
          <StarIcon sx={{ fontSize: 64, color: 'gold' }} />
          <StarIcon sx={{ fontSize: 64, color: 'gold' }} />
          <StarIcon sx={{ fontSize: 64, color: 'gold' }} />
        </div>
        <Typography component="div" sx={{ fontSize: 24, marginTop: 2 }}>
          Mochte die Lego-Element. Weiß nun was "LEGO" bedeutet. Habe außerdem gelernt zu lesen. Würde es weiterempfehlen!
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
