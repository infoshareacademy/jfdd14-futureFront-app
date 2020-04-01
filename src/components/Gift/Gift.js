import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



// const useStyles = makeStyles(theme => ({
//   root: {
//     maxWidth: 'auto',
//     height: 400,
//     margin: '2vh',
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// const Gift = props => {
//   const { toggleFavorite } = props;
//   const classes = useStyles();

//   return (
//     <Grid item xs={10} sm={10} md={6} lg={3} mr={0} justify-content='center'>
//       <Card className={classes.root}>
//         <CardHeader title={props.item.name} />
//         <CardMedia className={classes.media} image="https://picsum.photos/200">
//           <div>{props.item.description}</div>
//           <CardActions disableSpacing>
//             <IconButton
//               style={{ color: props.item.isFavorite ? "red" : undefined }}
//               aria-label="add to favorites"
//               onClick={() => toggleFavorite(props.item.id)}
//             >
//               <FavoriteIcon />
//             </IconButton>{" "}
//           </CardActions>
//           <div>{`${props.item.price}$`}</div>
//         </CardMedia>
//       </Card>
//       </Grid>
//     );
//   };

// export default Gift;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 'auto',
    // height: 400,
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
    backgroundColor: red[500],
  },
}));

export default function Gift(props) {
  const { toggleFavorite, handleClickOpen, item } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  return (
    <Grid item xs={10} sm={6} md={4} lg={3} mr={0} justify-content='center'>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
          </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.item.name}
          subheader={`${props.item.price}$`}
        />
        <CardMedia
          className={classes.media}
          image="https://picsum.photos/200"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          Short Description
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              style={{ color: props.item.isFavorite ? "red" : undefined }}
              aria-label="add to favorites"
              onClick={() => toggleFavorite(props.item.id)}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            // onClick={handleExpandClick}
            onClick={()=>handleClickOpen(item)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Description:</Typography>
            <Typography paragraph>
            {props.item.description}
          </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
          </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}


