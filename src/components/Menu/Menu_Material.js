import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import RedeemOutlinedIcon from "@material-ui/icons/RedeemOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import QueueOutlinedIcon from "@material-ui/icons/QueueOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { logIn, isTokenInStorage, logOut } from "../FirebaseAuth/FirebaseAuth";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { auth } from "firebase";
import { auth2, googleProvider } from "../fireBase.config";
import firebase from "firebase";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      zIndex: theme.zIndex.drawer + 1,
    },
    background: "linear-gradient(45deg, #84404B 30%, #772B37  90%)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "#424242",
    color: "white",
  },
  content: {
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: theme.spacing(6),
  },
  toolbarButtons: {
    marginLeft: "auto",
  },
}));

function ResponsiveDrawer(props) {
  const { container, children } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(isTokenInStorage());
  const [passwordError, setPasswordError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const id = setInterval(() => setLoggedIn(isTokenInStorage()));
    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    auth2.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const theme = createMuiTheme({
    palette: {
      type: `${selected ? "dark" : "light"}`,
      background: {
        default: `${selected ? "#56232C" : "#FDF0F1"}`,
        paper: `${selected ? "#632832" : "#FAEAEC"}`,
      },
      secondary: {
        light: "#bfdcdc",
        main: "#72a7a7",
        dark: "#286F6F",
        contrastText: "#fff",
      },
      primary: {
        light: "#F1D1D6",
        main: "#B06D78",
        dark: "#772B37",
        contrastText: "#000",
      },
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const onLogInClick = (email, password) => {
  //   return logIn(email, password)
  //     .then(() => {
  //       setLoggedIn(true);
  //       handleClose();
  //     })
  //     .catch((err) => {
  //       setPasswordError(true);
  //       setLoggedIn(false);
  //       //display toast: Błąd logowania. Niepoprawny email lub hasło
  //     });
  // };

  const onLogInClick = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoggedIn(true);
        handleClose();
      })
      .catch((err) => {
        setPasswordError(true);
        setLoggedIn(false);
        //display toast: Błąd logowania. Niepoprawny email lub hasło
      });
  };

  const onLogOutClick = () => {
    logOut();
    props.setFavorites([]);
    console.log(isLoggedIn, "login");
  };

  const onLogOutClickGoogle = () => {
    auth2.signOut();
    props.setFavorites([]);
  };

  const onLogInClickGoogle = () => {
    auth2.signInWithPopup(googleProvider);
    handleClose();
  };

  const drawer = (
    <div>
      <Hidden xsDown>
        <div className={classes.toolbar} />
      </Hidden>
      <Divider />
      <List>
        <ListItem button component={Link} to={"/"}>
          <ListItemIcon>
            <HomeOutlinedIcon fontSize={"large"} style={{ color: "#F1D1D6" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to={"/addgift"}>
          <ListItemIcon>
            <QueueOutlinedIcon
              fontSize={"large"}
              style={{ color: "#F1D1D6" }}
            />
          </ListItemIcon>
          <ListItemText primary="Dodaj prezent" />
        </ListItem>
        <ListItem button component={Link} to={"/charts"}>
          <ListItemIcon>
            <EqualizerOutlinedIcon
              fontSize={"large"}
              style={{ color: "#F1D1D6" }}
            />
          </ListItemIcon>
          <ListItemText primary="Statystyki" />
        </ListItem>
        <ListItem button component={Link} to={"/favorites"}>
          <ListItemIcon>
            <FavoriteOutlinedIcon
              fontSize={"large"}
              style={{ color: "#F1D1D6" }}
            />
          </ListItemIcon>
          <ListItemText primary="Ulubione" />
        </ListItem>
        <ListItem button component={Link} to={"/gifts"}>
          <ListItemIcon>
            <RedeemOutlinedIcon
              fontSize={"large"}
              style={{ color: "#F1D1D6" }}
            />
          </ListItemIcon>
          <ListItemText primary="Lista prezentów" />
        </ListItem>
      </List>
    </div>
  );

  const brightnessIcon = selected ? (
    <Brightness7Icon style={{ color: "white" }} />
  ) : (
    <Brightness4Icon style={{ color: "white" }} />
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
              style={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" noWrap style={{ color: "white" }}>
              GiftMatcher
            </Typography>

            <div className={classes.toolbarButtons}>
              <Hidden xsDown>
                {!user ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={onLogInClickGoogle}
                    startIcon={<AccountBoxIcon />}
                    style={{ marginRight: 20 }}
                    className={classes.button}
                  >
                    Log In by Google
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="red"
                    onClick={onLogOutClickGoogle}
                    startIcon={<ExitToAppIcon />}
                    style={{ marginRight: 20 }}
                    className={classes.button}
                  >
                    Log Out Google
                  </Button>
                )}

                {!isLoggedIn ? (
                  <>
                    {" "}
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleClickOpen}
                      startIcon={<AccountBoxIcon />}
                      style={{ marginRight: 20 }}
                      className={classes.button}
                    >
                      Sign In
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="form-dialog-title"
                    >
                      <DialogTitle id="form-dialog-title">SIGN IN</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Podaj swój adres e-mail oraz hasło aby się zalogować.
                        </DialogContentText>
                        <TextField
                          error={passwordError}
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
                          helperText={
                            passwordError ? "Niepoprawne hasło lub email" : ""
                          }
                          autoFocus
                          margin="dense"
                          id="password"
                          label="Hasło"
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          fullWidth
                        />
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Cancel
                        </Button>
                        <Button
                          onClick={() => onLogInClick(email, password)}
                          color="primary"
                        >
                          Log In
                        </Button>
                        <Button onClick={onLogInClickGoogle} color="primary">
                          Google Log In
                        </Button>
                      </DialogActions>
                    </Dialog>{" "}
                  </>
                ) : (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={onLogOutClick}
                    startIcon={<ExitToAppIcon />}
                    style={{ marginRight: 20 }}
                    className={classes.button}
                  >
                    Log Out
                  </Button>
                )}
              </Hidden>
              <Hidden smUp>
                {!isLoggedIn ? (
                  <IconButton>
                    <AccountBoxIcon
                      onClick={handleClickOpen}
                      style={{ color: "white" }}
                    />
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="form-dialog-title"
                    >
                      <DialogTitle id="form-dialog-title">SIGN IN</DialogTitle>

                      <DialogContent>
                        <DialogContentText>
                          Podaj swój adres e-mail oraz hasło aby się zalogować.
                        </DialogContentText>
                        <TextField
                          autoFocus
                          margin="dense"
                          id="name"
                          label="Email Address"
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          fullWidth
                        />
                        <TextField
                          autoFocus
                          margin="dense"
                          id="name"
                          label="Password"
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          fullWidth
                        />
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Cancel
                        </Button>
                        <Button
                          onClick={() => onLogInClick(email, password)}
                          color="primary"
                        >
                          Login
                        </Button>
                        <Button
                          onClick={() => onLogInClickGoogle()}
                          color="primary"
                        >
                          Log In by Google
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </IconButton>
                ) : (
                  <ExitToAppIcon
                    onClick={onLogOutClick}
                    style={{ color: "white" }}
                  />
                )}
              </Hidden>

              <IconButton
                onClick={() => {
                  setSelected(!selected);
                }}
              >
                {brightnessIcon}
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClick={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid
            container
            spacing={6}
            direction="row"
            justify="center"
            alignItems="center"
          >
            {children}
          </Grid>
        </main>
      </div>
    </ThemeProvider>
  );
}

ResponsiveDrawer.propTypes = {
  container: PropTypes.any,
};

export default ResponsiveDrawer;
