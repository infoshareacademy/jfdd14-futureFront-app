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
import Paper from "@material-ui/core/Paper";

const Home = function () {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box clone order={{ xs: 2, sm: 2 }}>
        <Grid item xs={12} sm={10} md={10} lg={4} justify-content="center">
          <Paper elevation={3}>
            <Container className="homeContainer1">
              <Typography component="div" />
              <div style={{ display: "flex" }}>
                Dodawaj swoje pomysły na prezenty i korzystaj z pomysłów
                innych...
              </div>
              <div style={{ marginTop: 50 }}>
                <ListItemIcon>
                  <QueueOutlinedIcon
                    style={{ fontSize: 50, margin: 10 }}
                    color="secondary"
                  />
                </ListItemIcon>
                <ListItemIcon>
                  <RedeemOutlinedIcon
                    color="secondary"
                    style={{ fontSize: 50, margin: 10 }}
                  />
                </ListItemIcon>
              </div>
            </Container>
          </Paper>
        </Grid>
      </Box>
      <Box clone order={{ md: 1, lg: 2 }}>
        <Grid item xs={12} sm={10} md={10} lg={4} justify-content="center">
          <Paper elevation={3}>
            <Container className="homeContainer">
              <Typography component="div" />
              <div className="subHeaderLine1">GIFTmatcher</div>
              <div className="subHeaderLine2">
                Obdarowywanie nigdy nie było takie proste.
              </div>
            </Container>
          </Paper>
        </Grid>
      </Box>
      <Box clone order={{ xs: 3, sm: 3 }}>
        <Grid item xs={12} sm={10} md={10} lg={4} justify-content="center">
          <Paper elevation={3}>
            <Container className="homeContainer1">
              <Typography component="div" />
              <div style={{ display: "flex" }}>
                Twórz spersonalizowane listy prezentów dostępne tylko dla
                Ciebie, po zalogowaniu...
              </div>
              <div style={{ marginTop: 50 }}>
                <ListItemIcon>
                  <FavoriteOutlinedIcon
                    color="secondary"
                    style={{ fontSize: 50 }}
                  />
                </ListItemIcon>
              </div>
            </Container>
          </Paper>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Home;
