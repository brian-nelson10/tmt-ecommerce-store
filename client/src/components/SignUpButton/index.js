import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import FairyWand from '../../assets/images/fairyWand.png'

const images = [
  {
    url: '../../assets/images/fairyWand.jpg',
    title: 'Become a Fairy..',
    width: '100%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 650,
  margin: '0 0 0 0',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 200,
  },
  '.MuiTypography-root': {
    fontFamily: 'Lacquer',
    fontWeight: '700',
  fontSize: '60px',
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      color: 'black',
      border: '6px solid black',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 0 0 0', 
  color: theme.palette.common.white,
}));

export default function SignUpButton() {
    const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: 500 }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          onClick={(e) => {navigate("/signup")}}
        >
          <ImageSrc style={{ backgroundImage: `url(${FairyWand})` }} />
          <Image style={{ margin: '0 0 0 0'}}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}