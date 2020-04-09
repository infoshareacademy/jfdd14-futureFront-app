import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import "./AddGift.css";

const Addgift = (props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Inne");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [giftAddedText, setGiftAddedText] = useState(false);
  const id = Date.now();
  const isFavorite = false;

  const handleChangeName = (e) => {
    setName(e.target.value);
    setGiftAddedText(false);
  };

  const addToList = () => {
    props.addGift({
      name,
      category,
      photo,
      price,
      description,
      id,
      isFavorite,
    });
    setName("");
    setCategory("Inne");
    setPhoto("");
    setPrice("");
    setDescription("");
    setGiftAddedText(true);
  };

  return (
    <Grid item xs={10} sm={10} md={8} lg={6} justify-content="center">
      <Container maxWidth="sm" className="formContainer">
        <form className="addGiftForm">
          <h2>DODAJ PREZENT</h2>
          <Box color="text.primary" clone>
            <TextField
              value={name}
              fullWidth
              color="primary"
              onChange={(e) => handleChangeName(e)}
              id="standard-basic"
              label="Nazwa prezentu"
              variant="outlined"
              style={{ paddingBottom: "2vh" }}
            />
          </Box>

          <FormControl variant="outlined" fullWidth color="primary">
            <InputLabel id="demo-simple-select-outlined-label">
              Kategoria
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              variant="outlined"
            >
              <MenuItem value="Sport">Sport</MenuItem>
              <MenuItem value="Muzyka">Muzyka</MenuItem>
              <MenuItem value="Inne">Inne</MenuItem>
            </Select>
          </FormControl>

          <TextField
            value={photo}
            placeholder="Adres URL"
            fullWidth
            color="primary"
            onChange={(e) => setPhoto(e.target.value)}
            id="standard-basic"
            label="Zdjęcie"
            variant="outlined"
            style={{ marginBottom: "2vh", marginTop: "2vh" }}
          />

          <TextField
            color="primary"
            value={price}
            type="number"
            fullWidth
            onChange={(e) => setPrice(e.target.value)}
            id="standard-basic"
            label="Cena w dolarach"
            style={{ paddingBottom: "2vh" }}
            variant="outlined"
          />

          <TextField
            color="primary"
            id="outlined-multiline-static"
            label="Opis prezentu"
            multiline
            rows="4"
            variant="outlined"
            fullWidth
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            style={{ paddingBottom: "2vh" }}
          />

          <Button
            className="addGiftButton"
            variant="contained"
            disabled={
              !Boolean(name && category && photo && price && description)
            }
            color="primary"
            onClick={addToList}
          >
            Dodaj!
          </Button>
          {giftAddedText && (
            <div className="giftAdded">
              Prezent dodany pomyślnie! Znajdziesz go w zakładce Gifts{" "}
            </div>
          )}
        </form>
      </Container>
    </Grid>
  );
};

export default Addgift;
