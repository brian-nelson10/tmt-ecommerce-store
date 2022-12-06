import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CssBaseline, Grid } from '@mui/material';
import Logo from '../assets/images/tmt-logo-peach.png';

const Music = () => {
  return (
    <Container container spacing={1} direction="column" alignItems="center" justifyContent="center">
        <CssBaseline/>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
    
    <Card sx={{ width: 400 }}>
      <CardMedia
        component="img"
        alt="album photo"
        height="300"
        image={Logo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          TMT Vinyl
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The Missing Teeth Album
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add To Cart</Button>
        <Button size="small">Detail</Button>
      </CardActions>
    </Card>
    </Grid>
<br/>
<Grid item xs={6}>
<Card sx={{ width: 400 }}>
      <CardMedia
        component="img"
        alt="album photo"
        height="300"
        image={Logo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          TMT Vinyl
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The Missing Teeth Album
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add To Cart</Button>
        <Button size="small">Detail</Button>
      </CardActions>
    </Card>
</Grid>
</Grid>
</Container>
  );
}

export default Music;