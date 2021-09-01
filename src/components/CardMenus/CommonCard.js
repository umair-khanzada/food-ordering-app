import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';

// eslint-disable-next-line import/order
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
// eslint-disable-next-line import/order
import Avatar from '@material-ui/core/Avatar';
// eslint-disable-next-line import/order
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
}));
const CommonCard = ({ name, price, resturantName }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {price}
            </Avatar>
          }
          subheader={resturantName}
          title={name}
        >
          <CardMedia className={classes.media} image="./components/images/areebAli.png" title="Paella dish">
            <CardContent>
              <Typography color="textSecondary" component="p" variant="body2">
                This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
                cup of frozen peas along with the mussels, if you like.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken,
                shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer
                shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about
                10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
            </CardContent>
          </CardMedia>
        </CardHeader>
      </Card>
    </div>
  );
};
export default CommonCard;
