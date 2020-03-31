import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Gift from '../../components/Gift/Gift'

const GiftList = function (props) {
    let { gifts, toggleFavorite } = props;

    return (
        <Fragment>

            {gifts?.map((gift, i) => (
              <Gift key={i} toggleFavorite={toggleFavorite} item={gift}/>
            ))}
          
        </Fragment>
      );
    };

export default GiftList;
