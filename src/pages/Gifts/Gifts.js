import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
const gift = function (props) {
    let newItem = props.newItem
    return (
        <Fragment>
            <h1>
           
           Gift!
        </h1>
         <button onClick={() => console.log(newItem)}>Click</button>
         {newItem ? newItem.map((e,i) => <Card key={i}><div>{e.name}</div><div>{e.category}</div></Card>) : console.log('bb')} 
        </Fragment>
        
    );
}

export default gift;
