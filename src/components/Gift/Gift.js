import React from 'react'
import Card from '@material-ui/core/Card';      

const Gift = (props) => {
    return (
        <Card style={{maxWidth: '300px' , padding: '5vh', margin: '5vh'}}>
            <div>{props.item.name}</div><div>{props.item.category}</div><div>{props.item.photo}</div>
            <div>{props.item.price}</div>
            </Card>

    )
}

export default Gift;