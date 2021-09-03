import React from 'react';

import { Card, CardMedia, CardContent, CardHeader, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: '72%',
    marginLeft: '250px',
  },
  media: {
    height: 0,

    paddingTop: '56.25%', // 16:9
  },
  content: {
    padding: '0px',
    marginLeft: '18px',
  },
  header: {
    padding: '0px',
    marginLeft: '18px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'red',
  },
  image: {
    padding: '30px',
    border: '10px',
    borderRadius: '200px',
  },
}));
const CommonCard = ({ name, price, resturantName, img }) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <Box className={classes.image}>
          <CardMedia className={classes.media} image={img} title={name} />
        </Box>
        <CardHeader className={classes.header} subheader={<h4>{resturantName}</h4>} title={<h2>{name}</h2>} />
        <CardContent className={classes.content}>
          <Typography color="textSecondary" component="p" variant="h4">
            <b>
              Price:<span style={{ marginLeft: '10px', marginBottom: '20px' }}>{price}</span>
            </b>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default CommonCard;
