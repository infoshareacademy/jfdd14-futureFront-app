import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './AddGift.css'
const Addgift = () => {
    return (
        <Container fixed style={{backgroundColor: '#cfe8fc', height: '80vh'}}>
            <form >
                <h2>Dodaj swój prezent:</h2>
            <TextField id="standard-basic" label="Nazwa prezentu" style={{paddingBottom: '3vh'}}/>
            <TextField id="standard-basic" label="Kategoria" style={{paddingBottom: '3vh'}} />
            <TextField id="standard-basic" label="Zdjęcie" style={{paddingBottom: '3vh'}} />
            <TextField id="standard-basic" label="Cena" style={{paddingBottom: '3vh'}} />
            <Button variant="contained" color="primary">Dodaj!</Button>
            </form>
    
        </Container>
        
    )
}

export default Addgift;
