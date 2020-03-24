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
    const [itemList, changeList] = useState([])
    const addToList = () => {
        changeList([...itemList, {name, category, photo, price}])
        props.addItem(itemList)
        console.log(itemList)
    }
    return (
        <Container fixed style={{backgroundColor: '#cfe8fc', height: '80vh'}}>
            <form >
                <h2>Dodaj swój prezent:</h2>
            <TextField onChange={e => setName(e.target.value)} id="standard-basic" label="Nazwa prezentu" style={{paddingBottom: '3vh'}}/>
            <TextField onChange={e => setCategory(e.target.value)}id="standard-basic" label="Kategoria" style={{paddingBottom: '3vh'}} />
            <TextField onChange={e => setPhoto(e.target.value)}id="standard-basic" label="Zdjęcie" style={{paddingBottom: '3vh'}} />
            <TextField onChange={e => setPrice(e.target.value)}id="standard-basic" label="Cena" style={{paddingBottom: '3vh'}} />
            <Button variant="contained" color="primary" onClick={addToList}>Dodaj!</Button>
            </form>
    
        </Container>
        
    )
}

export default Addgift;
