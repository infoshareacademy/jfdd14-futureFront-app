import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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

export default function RegisterForm({
  open,
  newUser,
  handleCloseRegister,
  setPassword,
  setEmail,
  emailError,
  emailErrorText,
  passwordError,
  passwordErrorText,
  setPasswordConfirm,
}) {
  return (
    <div>
      <Dialog
        onClose={handleCloseRegister}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{ textAlign: "center" }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleCloseRegister}>
          REJESTRACJA
        </DialogTitle>
        <DialogContentText style={{ padding: "10px" }}>
          Podaj swój adres e-mail oraz hasło aby się zarejestrowac.
        </DialogContentText>
        <DialogContent>
          <TextField
            error={emailError}
            helperText={emailError ? emailErrorText : ""}
            autoFocus
            margin="dense"
            id="email"
            label="Adres Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            error={passwordError}
            helperText={passwordError ? passwordErrorText : ""}
            autoFocus
            margin="dense"
            id="password"
            label="Hasło"
            type="password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            fullWidth
          />
          <TextField
            error={passwordError}
            helperText={passwordError ? passwordErrorText : ""}
            autoFocus
            margin="dense"
            id="passwordConfirm"
            label="Powtórz hasło"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {!window.user ? (
            <div>
              <Button onClick={newUser}>Rejestracja</Button>
              <Button onClick={handleCloseRegister}>Anuluj</Button>{" "}
            </div>
          ) : (
            <div>
              <div className="giftAdded">Konto założone pomyślnie! </div>
              <Button onClick={handleCloseRegister}>Zamknij</Button>
            </div>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
