import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

export default function CustomizedSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography gutterBottom>iOS</Typography>
      <IOSSlider
        aria-label="ios slider"
        defaultValue={60}
        marks={marks}
        valueLabelDisplay="on"
      />
      <div className={classes.margin} />
      <Typography gutterBottom>pretto.fr</Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
      />
      <div className={classes.margin} />
      <Typography gutterBottom>Tooltip value label</Typography>
      <Slider
        ValueLabelComponent={ValueLabelComponent}
        aria-label="custom thumb label"
        defaultValue={20}
      />
      <div className={classes.margin} />
      <Typography gutterBottom>Airbnb</Typography>
      <AirbnbSlider
        ThumbComponent={AirbnbThumbComponent}
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
        defaultValue={[20, 40]}
      />
    </div>
  );
}

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
