import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import { positions } from '@mui/system';


export default function ActionAreaCard(props) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../../../../public/assets/favicon.png"
          alt="green iguana"
          sx={{ zIndex: 'modal' }}
        />
        <CardContent sx={{zIndex: 'tooltip'}}>
          <Typography
          //  gutterBottom variant="h5" 
          // component="div" 
          sx={{zIndex: 'tooltip'}}>
            {props.title}
            Lizard
          </Typography>
          <Typography
          //  variant="body2" color="text.secondary"
            sx={{zIndex: 'modal'}}>
            {props.overview}
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
