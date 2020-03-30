import React, { Fragment, useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Gift from '../../components/Gift/Gift'

const Favorites = function (props) {
     let { gifts, toggleFavorite } = props;

    return (
        <Fragment>
          <h1>Gift!</h1>
          <Container display="flex">
            {gifts?.map((gift, i) => (
                gift.isFavorite === true ?
              <Gift key={i} toggleFavorite={toggleFavorite} item={gift}/> : null
            ))}
          </Container>
        </Fragment>
      );
    };

export default Favorites;