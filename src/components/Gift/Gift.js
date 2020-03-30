import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card';

import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        height: 400,
        margin: '2vh'
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

const Gift = props => {
    const { toggleFavorite } = props;
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardHeader title={props.item.name} />
        <CardMedia className={classes.media} image="https://picsum.photos/200">
          <div>{props.item.description}</div>
          <CardActions disableSpacing>
            <IconButton
              style={{ color: props.item.isFavorite ? "red" : undefined }}
              aria-label="add to favorites"
              onClick={() => toggleFavorite(props.item.id)}
            >
              <FavoriteIcon />
            </IconButton>{" "}
          </CardActions>
          <div>{`${props.item.price}$`}</div>
        </CardMedia>
      </Card>
    );
  };

export default Gift;