import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
      <Button variant="contained" color="primary">
      Hello World
    </Button>
    <Fab variant="extended">
      <NavigationIcon className={classes.extendedIcon} />
      Navigate
    </Fab>
      </header>
    </div>
  );
}

export default App;
