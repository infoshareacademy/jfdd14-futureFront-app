import React, { Fragment, useState } from "react";
import Gift from "../../components/Gift/Gift";
import TablePagination from "@material-ui/core/TablePagination";
import Searchbar from "../../components/Searchbar/Searchbar";
import { NoResults } from "../../components/NoResults/NoResults";
import CustomizedSlider from "../../components/Slider/Slider";
import Grid from "@material-ui/core/Grid";

import Loading from "../../components/Loading/Loading";

const GiftList = function (props) {
  const [searchInput, setSearchInput] = useState("");
  const [sliderInput, setSliderInput] = useState([0, 100000]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSlider = (value) => {
    setSliderInput(value);
  };

  const {
    gifts,
    toggleFavorite,
    handleClickOpen,
    giftsPerPage,
    handleChangeGiftsPerPage,
    handleChangePage,
    page,
    handleClickSnackbar,
  } = props;

  console.log("GIFT LIST", gifts);

  return (
    <Fragment>
      {gifts.length > 0 ? (
        <>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              flexBasis: "100%",
              marginTop: 15,
              // marginBottom: 10,
            }}
          >
            <Grid item xs={10} sm={10} md={4} lg={4} justify-content="center">
              <Searchbar handleChange={handleChange} />
            </Grid>
            <Grid item xs={10} sm={10} md={3} lg={3} justify-content="center">
              <CustomizedSlider handleSlider={handleSlider} gifts={gifts} />
            </Grid>
            <Grid item xs={10} sm={10} md={4} lg={4} justify-content="center">
              <TablePagination
                rowsPerPageOptions={[10, 15, 20]}
                labelRowsPerPage="Gifts"
                component="div"
                count={gifts.length}
                rowsPerPage={giftsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeGiftsPerPage}
              />
            </Grid>
          </div>
          {gifts
            ?.slice(page * giftsPerPage, page * giftsPerPage + giftsPerPage)
            .filter(
              (gift) =>
                gift.name
                  .toLowerCase()
                  .includes(searchInput.toLocaleLowerCase()) ||
                gift.category
                  .toLowerCase()
                  .includes(searchInput.toLocaleLowerCase())
            ).length > 0 &&
          gifts
            ?.slice(page * giftsPerPage, page * giftsPerPage + giftsPerPage)
            .filter(
              (gift) =>
                Number(gift.price) >= Number(sliderInput[0]) &&
                Number(gift.price) <= Number(sliderInput[1])
            ).length > 0 ? (
            gifts

              .filter(
                (gift) =>
                  gift.name
                    .toLowerCase()
                    .includes(searchInput.toLocaleLowerCase()) ||
                  gift.category
                    .toLowerCase()
                    .includes(searchInput.toLocaleLowerCase())
              )

              .filter(
                (gift) =>
                  Number(gift.price) >= Number(sliderInput[0]) &&
                  Number(gift.price) <= Number(sliderInput[1])
              )
              ?.slice(page * giftsPerPage, page * giftsPerPage + giftsPerPage)
              .map((gift, i) => (
                <Gift
                  key={i}
                  toggleFavorite={toggleFavorite}
                  item={gift}
                  handleClickOpen={() => handleClickOpen(gift)}
                  handleClickSnackbar={() => handleClickSnackbar()}
                />
              ))
          ) : (
            <NoResults />
          )}{" "}
        </>
      ) : (
        <Loading />
      )}
    </Fragment>
  );
};

export default GiftList;
