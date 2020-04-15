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
import firebase from "firebase";
import { database } from "./components/fireBase.config";

function App() {
  useEffect(() => {
    fetchGifts();
    // fetchFavorites();
    getFavorites();
  }, []);

  const [gifts, setGift] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [giftToExpand, setGiftToExpand] = useState({});
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [giftsPerPage, setGiftsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeGiftsPerPage = (event) => {
    setGiftsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const fetchGifts = () => {
    fetch("https://jfdd14-futurefrontapp.firebaseio.com/gifts.json").then(
      (response) =>
        response.json().then((response) => {
          const giftsList = mapObjectToArray(response);
          setGift(giftsList);
        })
    );
  };
  const addGift = () => {
    fetchGifts();
  };

  // const fetchFavorites = () => {
  //   fetch(`https://jfdd14-futurefront.firebaseio.com/items.json?auth=${idToken}`).then(
  //     (response) =>
  //       response.json().then((response) => {
  //         const favoriteList = mapObjectToArray(response);
  //         setFavorites(favoriteList);
  //       })
  //   );
  // };

  const idToken = "BxyhrMXaURNoIjtx7lTBnQGJtVy2";
  // const postFavorites = () => fetch(`https://jfdd14-futurefrontapp.firebaseio.com/users.json`, {
  //   method: "PUT",
  //   body: JSON.stringify({
  //     favorites,
  //   }),
  // });

  const setUserFavorites = () => {
    console.log(favorites);
    database.ref("users/" + idToken).set({
      favorites: favorites,
    });
  };

  //Get the current userID
  // var userId = firebase.auth().currentUser.uid;

  const getFavorites = () => {
    database
      .ref("/users/" + idToken)
      .once("value")
      .then(function (snapshot) {
        const userFavorites = snapshot.child("favorites").val();
        return userFavorites ? setFavorites((favorites) => userFavorites) : [];
      });
  };

  const toggleFavorite = (giftId) => {
    setFavorites((favorites) =>
      favorites.includes(giftId)
        ? favorites.filter((id) => id !== giftId)
        : [...favorites, giftId]
    );
    // postFavorites()
    setUserFavorites();
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
