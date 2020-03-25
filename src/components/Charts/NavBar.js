import React, { component } from 'react';
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import {Link, BrowserRouter, Switch, Route} from'react-router-dom';

const NavBar = () => {
  return(
    <div>
      <AppBar position="static">
        <ToolBar>
          <Typography variant="title" color="inherit">
          <Link to ="/">Home</Link>
    <Link to ="/pieChart">Charts Pie</Link>
    <Link to ="/charts">Charts</Link>
        
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  )
}

export default NavBar