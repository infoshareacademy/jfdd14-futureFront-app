import React from "react";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import "./Home.css";

const home = function () {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className="homeContainer1">
        <Typography component="div" />
      </Container>
      <Container maxWidth="xs" className="homeContainer">
        <Typography component="div" />
      </Container>
      <Container maxWidth="xs" className="homeContainer1">
        <Typography component="div" />
      </Container>
    </React.Fragment>
  );
};

export default home;
