import React, {useState} from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './AddGift.css'
const Addgift = (props) => {
   
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [photo, setPhoto] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
  
    const addToList = () => {
        
        props.addGift({name, category, photo, price, description})
        
    }
  
    
    return (
        <Container fixed style={{backgroundColor: '#cfe8fc', minHeight: '80vh', padding:'2vh'}}>
            <form >
                <h2>Dodaj swój prezent:</h2>
            <TextField onChange={e => setName(e.target.value)} id="standard-basic" label="Nazwa prezentu" style={{paddingBottom: '3vh'}}/>
            <TextField onChange={e => setCategory(e.target.value)}id="standard-basic" label="Kategoria" style={{paddingBottom: '3vh'}} />
            <TextField onChange={e => setPhoto(e.target.value)}id="standard-basic" label="Zdjęcie" style={{paddingBottom: '3vh'}} />
            <TextField onChange={e => setPrice(e.target.value)}id="standard-basic" label="Cena" style={{paddingBottom: '3vh'}} />
            <TextField
          id="outlined-multiline-static"
          label="Opis prezentu"
          multiline
          rows="4"
          style={{paddingBottom: '3vh'}}
          variant='outlined'
          fullWidth
          onChange={e => setDescription(e.target.value)}
        />
            <Button variant="contained" color="primary" onClick={addToList}>Dodaj!</Button>
            </form>
    
        </Container>
        
    )
}

export default Addgift;
