import React from "react";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import "./Home.css";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import QueueOutlinedIcon from "@material-ui/icons/QueueOutlined";
import RedeemOutlinedIcon from "@material-ui/icons/RedeemOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const Home = function () {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box clone order={{ xs: 2, sm: 2 }}>
        <Grid item xs={12} sm={10} md={10} lg={4} justify-content="center">
          <Container fixedWidth className="homeContainer1">
            <Typography component="div" />
            <div style={{ display: "flex" }}>
              Podziel się swoimi pomysłami na prezenty i korzystaj z pomysłów
              innych...
            </div>
            <div style={{ marginTop: 50 }}>
              <ListItemIcon>
                <QueueOutlinedIcon style={{ fontSize: 50 }} color="primary" />
              </ListItemIcon>
              <ListItemIcon>
                <RedeemOutlinedIcon color="primary" style={{ fontSize: 50 }} />
              </ListItemIcon>
            </div>
          </Container>
        </Grid>
      </Box>
      <Box clone order={{ md: 1, lg: 2 }}>
        <Grid item xs={12} sm={10} md={10} lg={4} justify-content="center">
          <Container fixedWidth className="homeContainer">
            <Typography component="div" />
          </Container>
        </Grid>
      </Box>
      <Box clone order={{ xs: 3, sm: 3 }}>
        <Grid item xs={12} sm={10} md={10} lg={4} justify-content="center">
          <Container fixedWidth className="homeContainer1">
            <Typography component="div" />
            <div style={{ display: "flex" }}>
              Twórz spersonalizowane listy prezentów, dostępne tylko dla Ciebie
              po zalogowaniu...
            </div>
            <div style={{ marginTop: 50 }}>
              <ListItemIcon>
                <FavoriteOutlinedIcon
                  color="primary"
                  style={{ fontSize: 50 }}
                />
              </ListItemIcon>
            </div>
          </Container>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Home;
