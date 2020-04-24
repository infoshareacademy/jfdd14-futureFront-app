import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    minWidth: 300,
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({
  handleClose,
  open,
  gift,
  toggleFavorite,
  gifts,
}) {
  let isFavorite = false;
  gifts.forEach((el) => {
    if (el.id === gift.id) {
      isFavorite = el.isFavorite;
    }
  });

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {gift.name}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            CENA: {gift.price} PLN
            <br />
            <br />
            <span style={{ display: "flex", justifyContent: "center" }}>
              <img width="400px" height="auto" src={gift.photo} alt="gift" />
            </span>
            <br />
            <br />
            OPIS:
            <br />
            <br />
            <span style={{ textAlign: "justify" }}>{gift.description}</span>
          </Typography>
        </DialogContent>
        <DialogActions>
          <IconButton
            aria-label="add to favorites"
            onClick={() => toggleFavorite(gift.id)}
          >
            <FavoriteIcon style={{ color: isFavorite ? "red" : undefined }} />
          </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
