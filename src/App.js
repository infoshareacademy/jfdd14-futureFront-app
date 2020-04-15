import React, { useState, useEffect } from "react";
import "./App.css";
import Addgift from "./pages/AddGift/Addgift";
import Giftslist from "./pages/Giftslist/Giftslist";
import Charts from "./pages/Charts/Charts";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import Menu from "./components/Menu/Menu_Material";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dialog from "./components/Dialog/Dialog";
import Gift from "./components/Gift/Gift";
import mapObjectToArray from "./mapObjectToArray";

function App() {
  const [gifts, setGift] = useState([]);
  useEffect(() => {
    fetch("https://jfdd14-futurefrontapp.firebaseio.com/gifts.json").then(
      (response) =>
        response.json().then((response) => {
          const giftsList = mapObjectToArray(response);
          setGift(giftsList);
        })
    );
  }, [gifts]);

  const [favorites, setFavorites] = useState([]);
  const [giftToExpand, setGiftToExpand] = useState({});
  const [open, setOpen] = useState(false);

  const [page, setPage] = useState(0);
  const [giftsPerPage, setGiftsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    console.log(newPage);
    setPage(newPage);
  };

  const handleChangeGiftsPerPage = (event) => {
    setGiftsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const addGift = (gift) => {
    console.log(gifts, gift, "GIIFTS AfTER ADD");
  };

  const toggleFavorite = (giftId) => {
    setFavorites((favorites) =>
      favorites.includes(giftId)
        ? favorites.filter((id) => id !== giftId)
        : [...favorites, giftId]
    );
  };

  const giftsWithFavs = gifts.map((gift) => ({
    ...gift,
    isFavorite: favorites.includes(gift.id),
  }));

  const handleClickOpen = (gift) => {
    setGiftToExpand(gift);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BrowserRouter>
      <Menu>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/addgift">
            <Addgift addGift={addGift} />
          </Route>
          <Route path="/gifts">
            <Giftslist
              gifts={giftsWithFavs}
              toggleFavorite={toggleFavorite}
              handleClickOpen={handleClickOpen}
              giftsPerPage={giftsPerPage}
              handleChangeGiftsPerPage={handleChangeGiftsPerPage}
              handleChangePage={handleChangePage}
              page={page}
            />
          </Route>
          <Route path="/charts" component={Charts} />
          <Route path="/favorites">
            <Favorites
              gifts={giftsWithFavs}
              toggleFavorite={toggleFavorite}
              handleClickOpen={handleClickOpen}
            />
          </Route>
        </Switch>
        <Dialog
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          toggleFavorite={toggleFavorite}
          open={open}
          gift={giftToExpand}
          gifts={giftsWithFavs}
        >
          <Gift item={giftToExpand} />
        </Dialog>
      </Menu>
    </BrowserRouter>
  );
}

export default App;
