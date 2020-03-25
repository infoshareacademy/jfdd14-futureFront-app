
import React, { Component } from 'react';
import PieChart from './pieChart';
import BarChart from './chartBar'
import Box from '@material-ui/core/Container';
import { Grid, Container } from '@material-ui/core';

class Charts extends Component {
    render() {
        return(
            <Grid flex-direction="row">
                <PieChart/>
            
                <BarChart/>
           
        
                </Grid>
                
        )
    }
}

export default Charts;