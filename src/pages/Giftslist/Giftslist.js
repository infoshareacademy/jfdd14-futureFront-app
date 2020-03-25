import React, { Fragment, useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';
import Gift from '../../components/Gift/Gift'





const GiftList = function (props) {
    let gifts = props.gifts

    const [isFavorite, setIsFavorite] = useState('false')
    const [id, setId] = useState('')
    const setFavorites = (id ,isFavorite) => {
        setIsFavorite(isFavorite);
        setId(id);

    }


    // useEffect (() => {

    //      props.addFavorite(id, isFavorite);
    // });

//  props.addFavorite(id, isFavorite);



//  e.id = i,

    return (
        <Fragment>
            <h1>
           Gift!
        </h1>
         <Container display="flex">{gifts ? gifts.map((e,i) => (

            <Gift
            key={i}
            id={i}
            setId={setId}
            setFavorites={setFavorites}
            item={e}/>))
            : null}
        </Container>
        </Fragment>
        
    );
}

export default GiftList;
