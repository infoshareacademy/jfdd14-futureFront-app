import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Gift from '../../components/Gift/Gift'

const GiftList = function (props) {
    let { gifts, toggleFavorite } = props;

    return (
        <Fragment>
          <h1>Gift!</h1>
          <Container display="flex">
            {gifts?.map((gift, i) => (
              <Gift key={i} toggleFavorite={toggleFavorite} item={gift}/>
            ))}
          </Container>
        </Fragment>
      );
    };

export default GiftList;
