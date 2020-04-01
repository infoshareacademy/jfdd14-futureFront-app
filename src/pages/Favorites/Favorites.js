import React, { Fragment, useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import Gift from '../../components/Gift/Gift'

const Favorites = function (props) {
     let { gifts, toggleFavorite, handleClickOpen } = props;

    return (
        <Fragment>
            {gifts?.map((gift, i) => (
                gift.isFavorite === true ?
              <Gift
              key={i}
              toggleFavorite={toggleFavorite}
              item={gift}
              handleClickOpen={()=>handleClickOpen(gift)}
              /> : null
            ))}

        </Fragment>
      );
    };

export default Favorites;


