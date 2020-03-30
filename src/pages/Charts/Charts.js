
import React, { Component } from 'react';
import BarTemp from './bars'
import { Grid, Container} from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom'




class Charts extends Component {
    render() {
        return(
            <BrowserRouter>
            <Container>
                                        
                <BarTemp/>
                </Container>
        
                </BrowserRouter>
        )
    }
}

export default Charts;