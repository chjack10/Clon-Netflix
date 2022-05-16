import * as React from 'react';
import Card from '@mui/material/Card';
import { Box, Button, CardActionArea, CardMedia, Typography } from '@mui/material';
import PlayButton from '../buttons/PlayButton'
import AddButton from '../buttons/AddButton';

export const IntroCard = () => {
  return (
    <Card sx={{ maxWidth: 1250}}>
      <Box sx={{ position: 'relative' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            // height="400"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              // bgcolor: 'rgba(0, 0, 0, 0.54)',
              color: 'white',
              padding: '50px',
            }}
          >
            <PlayButton />   
            <AddButton />           
            <Typography variant="h2">Lizard</Typography>
            <Typography variant="body2">Subtitle</Typography>
          </Box>
        </CardActionArea>
      </Box>
    </Card>
  )
}
