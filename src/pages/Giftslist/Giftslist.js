import React, { Fragment, useState } from "react";
import Gift from "../../components/Gift/Gift";
import TablePagination from "@material-ui/core/TablePagination";
import Searchbar from "../../components/Searchbar/Searchbar";
import { NoResults } from "../../components/NoResults/NoResults";
import CustomizedSlider from "../../components/Slider/Slider";
import Grid from "@material-ui/core/Grid";
let filteredArr = ["dummy"];
const GiftList = function (props) {
  const [searchInput, setSearchInput] = useState("");
  const [sliderInput, setSliderInput] = useState([0, 200]);
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    giftsFilter();
  };
  const handleSlider = (value) => {
    setSliderInput(value);
    giftsFilter();
  };

  const giftsFilter = () => {
    filteredArr = gifts
      .slice(page * giftsPerPage, page * giftsPerPage + giftsPerPage)
      .filter(
        (gift) =>
          gift.name.toLowerCase().includes(searchInput.toLocaleLowerCase()) ||
          gift.category.toLowerCase().includes(searchInput.toLocaleLowerCase())
      )
      .filter(
        (gift) =>
          Number(gift.price) >= Number(sliderInput[0]) &&
          Number(gift.price) < Number(sliderInput[1])
      );
  };
  const {
    gifts,
    toggleFavorite,
    handleClickOpen,
    giftsPerPage,
    handleChangeGiftsPerPage,
    handleChangePage,
    page,
  } = props;

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          flexBasis: "100%",
        }}
      >
        <Grid item xs={10} sm={10} md={4} lg={3} justify-content="center">
          <Searchbar handleChange={handleChange} />
        </Grid>
        <Grid item xs={10} sm={10} md={4} lg={3} justify-content="center">
          <CustomizedSlider handleSlider={handleSlider} />
        </Grid>
        <Grid item xs={10} sm={10} md={4} lg={3} justify-content="center">
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            labelRowsPerPage="Gifts"
            component="div"
            count={gifts.length}
            rowsPerPage={giftsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeGiftsPerPage}
            align="left"
            style={{ minWidth: 320 }}
          />
        </Grid>
      </div>

      {filteredArr.length > 0 ? (
        gifts.map((gift, i) => (
          <Gift
            key={i}
            toggleFavorite={toggleFavorite}
            item={gift}
            handleClickOpen={() => handleClickOpen(gift)}
          />
        ))
      ) : (
        <NoResults />
      )}
    </Fragment>
  );
};

export default GiftList;
