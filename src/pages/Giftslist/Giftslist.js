import React, { Fragment } from "react";
import Gift from "../../components/Gift/Gift";
import TablePagination from "@material-ui/core/TablePagination";

const GiftList = function (props) {
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
