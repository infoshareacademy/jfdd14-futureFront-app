import React, { Fragment, useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Gift from '../../components/Gift/Gift'

const GiftList = function (props) {
    let gifts = props.gifts

    const updateFavorite = (id, isFavorite) => props.updateIsFavorite(id, isFavorite)
    const setFavorites = (id, isFavorite) => console.log(id, isFavorite, gifts, "IN GIFTLIST");

    return (
        <Fragment>
            <h1>
           Gift!
        </h1>
         <Container display="flex">{gifts ? gifts.map((e,i) => (
            <Gift
            key={i}
            setFavorites={updateFavorite}
            item={e}/>))
            : null}
        </Container>
        </Fragment>

    );
}

export default GiftList;
