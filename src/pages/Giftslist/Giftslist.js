import React, { Fragment, useState } from "react";
import Gift from "../../components/Gift/Gift";
import TablePagination from "@material-ui/core/TablePagination";
import TextField from "@material-ui/core/TextField";

const GiftList = function (props) {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  let {
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
          flexBasis: "100%",
          position: "relative",
          top: 10,
        }}
      >
        <TextField onChange={handleChange}></TextField>
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
        />
      </div>
      {gifts
        ?.slice(page * giftsPerPage, page * giftsPerPage + giftsPerPage)
        .filter(
          (gift) =>
            gift.name.toLowerCase().includes(searchInput.toLocaleLowerCase()) ||
            gift.category
              .toLowerCase()
              .includes(searchInput.toLocaleLowerCase())
        )
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

export default GiftList;
