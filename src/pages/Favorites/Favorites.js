import React, { Fragment, useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Gift from '../../components/Gift/Gift'

const Favorites = function (props) {
    let gifts = props.gifts
console.log(gifts, "FAVORITES")
    const setFavorites = (id, isFavorite) => console.log(id, isFavorite, gifts, "IN GIFTLIST");

    return (
        <Fragment>
            <h1>
           Gift!
        </h1>
         <Container display="flex">{gifts ? gifts.map((e,i) => (
             e.isFavorite === true ?
            <Gift
            key={i}
            setFavorites={setFavorites}
            item={e}/>:null))
            : null}
        </Container>
        </Fragment>

    );
}

export default Favorites;