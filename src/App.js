import React, { useState } from "react";
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

function App() {
  const [gifts, setGift] = useState([
    {
      name: "EXAMPLE GIFT",
      category: "Sport",
      photo: "dd",
      price: "1000",
      description: "Cool Gift",
      isFavorite: false,
      id: "666"
    },
    {
      name: "EXAMPLE GIFT",
      category: "Sport",
      photo: "dd",
      price: "1000",
      description: "Cool Gift",
      isFavorite: false,
      id: "666"
    },
    {
      name: "EXAMPLE GIFT",
      category: "Sport",
      photo: "dd",
      price: "1000",
      description: "Cool Gift",
      isFavorite: false,
      id: "666"
    },
    {
      name: "EXAMPLE GIFT",
      category: "Sport",
      photo: "dd",
      price: "1000",
      description: "Cool Gift",
      isFavorite: false,
      id: "666"
    },
    {
      name: "EXAMPLE GIFT",
      category: "Sport",
      photo: "dd",
      price: "1000",
      description: "Cool Gift",
      isFavorite: false,
      id: "666"
    },
    {
      name: "EXAMPLE GIFT",
      category: "Sport",
      photo: "dd",
      price: "1000",
      description: "Cool Gift",
      isFavorite: false,
      id: "666"
    },
    {
      name: "EXAMPLE GIFT",
      category: "Sport",
      photo: "dd",
      price: "1000",
      description: "Cool Gift",
      isFavorite: false,
      id: "666"
    }
  ]);
  const [favorites, setFavorites] = useState([]);
  const [giftToExpand, setGiftToExpand] = useState({});
  const [open, setOpen] = useState(false);

  const [page, setPage] = useState(0);
  const [giftsPerPage, setGiftsPerPage] = useState(5);

  const addGift = gift => {
    setGift([...gifts, gift]);
    console.log(gifts, gift, "GIIFTS AfTER ADD");
  };

  const toggleFavorite = giftId => {
    setFavorites(favorites =>
      favorites.includes(giftId)
        ? favorites.filter(id => id !== giftId)
        : [...favorites, giftId]
    );
  };

  const giftsWithFavs = gifts.map(gift => ({
    ...gift,
    isFavorite: favorites.includes(gift.id)
  }));

  const handleClickOpen = gift => {
    setGiftToExpand(gift);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //pagination

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeGiftsPerPage = (event) => {
    setGiftsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
          open={open}
          gift={giftToExpand}
        >
          <Gift item={giftToExpand} />
        </Dialog>
      </Menu>
    </BrowserRouter>
  );
}

export default App;
