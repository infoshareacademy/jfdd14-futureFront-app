import React, {useState} from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './AddGift.css'
const Addgift = (props) => {
   
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [photo, setPhoto] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
  
    const addToList = () => {
        
        props.addGift({name, category, photo, price, description})
        props.modalHandle()
    }
  
    
    return (
        <Container fixed style={{backgroundColor: 'rgb(227, 188, 190)', minHeight: '80vh', padding:'2vh', boxShadow: '3px 7px 35px -4px rgba(0,0,0,0.45)', borderRadius: '2vh'}}>
            <form >
                <h2>Dodaj swój prezent:</h2>
            <Box width="30%"><TextField fullWidth color='secondary'onChange={e => setName(e.target.value)} id="standard-basic" label="Nazwa prezentu" style={{paddingBottom: '3vh'}}/></Box>
            <Box width="30%"><TextField fullWidth color='secondary'onChange={e => setCategory(e.target.value)}id="standard-basic" label="Kategoria" style={{paddingBottom: '3vh'}} /></Box>
            <Box width="30%"><TextField fullWidth color='secondary'onChange={e => setPhoto(e.target.value)}id="standard-basic" label="Zdjęcie" style={{paddingBottom: '3vh'}} /></Box>
            <Box width="30%"><TextField fullWidth color='secondary'onChange={e => setPrice(e.target.value)}id="standard-basic" label="Cena" style={{paddingBottom: '3vh'}} /></Box>
            <Box width="30%"><TextField  color='secondary' 
          id="outlined-multiline-static"
          label="Opis prezentu"
          multiline
          rows="4"
          style={{paddingBottom: '3vh'}}
          variant='outlined'
          fullWidth
          onChange={e => setDescription(e.target.value)}
        /></Box>
            <Button variant="contained" color="secondary" onClick={addToList}>Dodaj!</Button>
            </form>
    
        </Container>
        
    )
}

export default Addgift;
