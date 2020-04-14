import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";

import { storage } from "./../fireBase.config";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  progress: {
    width: "100%",
    height: 5,
  },
  form: {
    width: "100%",
  },
}));

export default function Inputs() {
  const classes = useStyles();

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = (e) => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          setError(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
              setProgress(0);
              console.log(url);
            });
        }
      );
    }
  };

  return (
    <div className={classes.form}>
      <div className={(classes.root, classes.progress)}>
        {progress > 0 ? (
          <LinearProgress variant="determinate" value={progress} />
        ) : (
          ""
        )}
      </div>
      <Input
        accept="image/*"
        className={classes.input}
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
        type="file"
        onChange={handleChange}
      />
      <label htmlFor="raised-button-file">
        <Button variant="raised" component="span" className={classes.button}>
          CHOOSE FILE
        </Button>
      </label>
      <label htmlFor="uplad-button-file">
        <Button
          variant="raised"
          component="span"
          className={classes.button}
          onClick={handleUpload}
        >
          Upload
        </Button>
      </label>
    </div>
  );
}
