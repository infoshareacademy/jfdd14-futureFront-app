import React, { Fragment, useState } from "react";
import TablePagination from "@material-ui/core/TablePagination";
import Gift from "../../components/Gift/Gift";

const Favorites = function (props) {
  const { gifts, toggleFavorite, handleClickOpen } = props;

  const [page, setPage] = useState(0);
  const [giftsPerPage, setGiftsPerPage] = useState(5);

  const favoritesArray =
    [] && gifts.filter((gift, i) => gift.isFavorite === true);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeGiftsPerPage = (event) => {
    setGiftsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexBasis: "100%",
        }}
      >
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          labelRowsPerPage="Gifts"
          component="div"
          count={favoritesArray.length}
          rowsPerPage={giftsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeGiftsPerPage}
          align="left"
        />
      </div>
      {favoritesArray
        ?.slice(page * giftsPerPage, page * giftsPerPage + giftsPerPage)
        .map((gift, i) => (
          <Gift
            key={i}
            toggleFavorite={toggleFavorite}
            item={gift}
            handleClickOpen={() => handleClickOpen(gift)}
          />
        ))}
    </Fragment>
  );
};

export default Favorites;
