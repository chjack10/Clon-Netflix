import * as React from 'react';
import Card from '@mui/material/Card';
import { Box, Button, CardActionArea, CardMedia, Typography } from '@mui/material';
import PlayButton from '../buttons/PlayButton'
import AddButton from '../buttons/AddButton';

export const IntroCard = ({title, overview}) => {
  return (
    <Card sx={{ 
      m:0,
      // maxWidth: 1440,
      // maxHeight: 600
      }}>
      <Box sx={{ position: 'relative' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              // maxHeight: '60%',
              bgcolor: 'rgba(0, 0, 0, 0.07)',
              color: 'white',
              padding: '3rem',
            }}
          >
            <Typography variant="h3">{title}</Typography>
            <Typography variant="body2" sx={{maxWidth: 550}}>{overview}</Typography>
            <PlayButton />   
            <AddButton />           
          </Box>
        </CardActionArea>
      </Box>
    </Card>
  )
}
