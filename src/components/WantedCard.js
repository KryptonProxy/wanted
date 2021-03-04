import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Swal from 'sweetalert2/src/sweetalert2.js';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function WantedCard(props) {
  const classes = useStyles();

  const handleClick = () => {
    Swal.fire({
      imageUrl: 'https://placeholder.pics/svg/300x1500',
      imageHeight: 1500,
      imageAlt: 'A tall image'
    })
  }


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {props.badguy.images[0].large}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.badguy.title}
          </Typography> 
          <Typography variant="body2" color="textSecondary" component="p">
          {props.badguy.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="contained" color="primary" onClick={()=>window.open("https://www.fbi.gov/contact-us/", "name", 200, 200)}>
          Contact
        </Button>
        <Button size="containedl" color="primary" onClick={()=>handleClick()}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}