import * as React from 'react';
import Card from '@mui/material/Card';
import { Box, Button, CardActionArea, CardMedia, Typography } from '@mui/material';
import PlayButton from '../buttons/PlayButton'
import AddButton from '../buttons/AddButton';

export const AreaCard = ({title}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box sx={{ position: 'relative' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              bgcolor: 'rgba(0, 0, 0, 0.07)',
              color: 'white',
              padding: '15px',
            }}
          >
            <Typography variant="h6" sx={{fontSize: 17}}>{title}</Typography>
            {/* <Typography variant="body2">Subtitle</Typography> */}
            <PlayButton />   
            <AddButton />           
          </Box>
        </CardActionArea>
      </Box>
    </Card>
  )
}
