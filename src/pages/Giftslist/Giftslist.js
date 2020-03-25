import React, { Fragment } from 'react';

import Container from '@material-ui/core/Container';
import Gift from '../../components/Gift/Gift'
const gift = function (props) {
    let newItem = props.newItem
    
    return (
        <Fragment>
            <h1>
           
           Gift!
        </h1>
         <Container display="flex">{newItem ? newItem.map((e,i) => <Gift key={i} item={e}/>) : null}
        </Container>
         
        </Fragment>
        
    );
}

export default gift;
