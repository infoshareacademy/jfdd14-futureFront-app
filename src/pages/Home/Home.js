import React from "react";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import "./Home.css";
import Grid from "@material-ui/core/Grid";

const home = function () {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid item xs={10} sm={10} md={10} lg={4} justify-content="center">
        <Container fixedWidth className="homeContainer1">
          <Typography component="div" />
        </Container>
      </Grid>
      <Grid item xs={10} sm={10} md={10} lg={4} justify-content="center">
        <Container maxWidth="lg" className="homeContainer">
          <Typography component="div" />
        </Container>
      </Grid>
      <Grid item xs={10} sm={10} md={10} lg={4} justify-content="center">
        <Container maxWidth="lg" className="homeContainer1">
          <Typography component="div" />
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default home;
