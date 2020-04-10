import React from "react";
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
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Button from "@material-ui/core/Button";
import Brightness4Icon from "@material-ui/icons/Brightness4";

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
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<AccountBoxIcon />}
                  style={{ marginRight: 20, color: "white" }}
                >
                  Sign In
                </Button>
              </Hidden>
              <Hidden smUp>
                <IconButton>
                  <AccountBoxIcon style={{ color: "white" }} />
                </IconButton>
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
