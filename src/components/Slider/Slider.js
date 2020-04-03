import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

export default function CustomizedSlider(props) {
  const [value, setValue] = useState([0, 199]);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.handleSlider(newValue);
  };
  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Typography gutterBottom>Zakres ceny:</Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        value={value}
        onChange={handleChange}
      />
      <div className={classes.margin} />
      <div className={classes.margin} />
    </div>
  );
}

const PrettoSlider = withStyles({
  root: {
    color: "rgb(227, 188, 190)",
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
