import React, { Fragment, useState } from "react";
import TextField from "@material-ui/core/TextField";

import Container from "@material-ui/core/Container";
import Gift from "../../components/Gift/Gift";
const Giftlist = function (props) {
  const [searchInput, setSearchInput] = useState("");
  let gifts = props.gifts;
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <Fragment>
      <h1>
        <TextField onChange={handleChange}></TextField>
      </h1>
      <Container display="flex">
        {gifts
          ? gifts
              .filter(
                (gift) =>
                  gift.name
                    .toLowerCase()
                    .includes(searchInput.toLocaleLowerCase()) ||
                  gift.category
                    .toLowerCase()
                    .includes(searchInput.toLocaleLowerCase())
              )
              .map((e, i) => <Gift key={i} id={i} item={e} />)
          : null}
      </Container>
    </Fragment>
  );
};

export default Giftlist;
