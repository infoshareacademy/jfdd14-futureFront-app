import React from 'react'
import Card from '@material-ui/core/Card';      

const Gift = (props) => {
    return (
        <Card style={{maxWidth: '300px' , padding: '5vh', margin: '5vh'}}>{props.item.name}</Card>

    )
}

export default Gift;