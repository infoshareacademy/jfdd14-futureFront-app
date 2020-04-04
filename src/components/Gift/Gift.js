import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "auto",
    // height: 400,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Gift(props) {
  const { toggleFavorite, handleClickOpen, item } = props;
  const classes = useStyles();

  return (
    <Grid item xs={10} sm={8} md={4} lg={3} mr={0} justify-content="center">
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
          image={props.item.photo}
          title="Gift photo"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Kategoria: {props.item.category}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => toggleFavorite(props.item.id)}
          >
            <FavoriteIcon
              style={{ color: props.item.isFavorite ? "red" : undefined }}
              aria-label="add to favorites"
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

          <Button
            className={clsx(classes.expand, {})}
            onClick={() => handleClickOpen(item)}
            size="small"
            variant="contained"
            color="secondary"
          >
            Description
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
