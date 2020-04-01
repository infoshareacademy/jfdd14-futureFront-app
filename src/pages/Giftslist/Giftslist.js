import React, { Fragment } from "react";

import Container from "@material-ui/core/Container";
import Gift from "../../components/Gift/Gift";
const gift = function (props) {
  let gifts = props.gifts;

  return (
    <Fragment>
      <h1>Gift!</h1>
      <Container display="flex">
        {gifts ? gifts.map((e, i) => <Gift key={i} id={i} item={e} />) : null}
      </Container>
    </Fragment>
  );
};

export default gift;
