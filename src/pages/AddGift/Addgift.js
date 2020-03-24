import React, {useState} from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './AddGift.css'
const Addgift = (props) => {
    const [name, setName] = useState('')
    const giftName = (e) => {
        setName({})
        console.log(name)
    }
    return (
        <Container fixed style={{backgroundColor: '#cfe8fc', height: '80vh'}}>
            <form >
                <h2>Dodaj swój prezent:</h2>
            <TextField onChange={giftName} id="standard-basic" label="Nazwa prezentu" style={{paddingBottom: '3vh'}}/>
            <TextField id="standard-basic" label="Kategoria" style={{paddingBottom: '3vh'}} />
            <TextField id="standard-basic" label="Zdjęcie" style={{paddingBottom: '3vh'}} />
            <TextField id="standard-basic" label="Cena" style={{paddingBottom: '3vh'}} />
            <Button variant="contained" color="primary" onClick={() => props.addItem('b')}>Dodaj!</Button>
            </form>
    
        </Container>
        
    )
}

export default Addgift;
