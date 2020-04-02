import React, { Fragment } from "react";
import Gift from "../../components/Gift/Gift";

const GiftList = function (props) {
  let { gifts, toggleFavorite, handleClickOpen } = props;

  return (
    <Fragment>
      {gifts?.map((gift, i) => (
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
