import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addProduct } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    title: '',
    author: '',
    editionYear: 1,
    isbn: '',
    publisher: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddProduct = () => {
    const [product, setProduct] = useState(initialValue);
    const { title, author, editionYear, isbn, publisher } = product;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const addProductDetails = async() => {
        await addProduct(product);
        navigate('/products');
    }

    return (
        <Container>
            <Typography variant="h4">Add Product</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='title' value={title} id="title" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Author</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='author' value={author} id="author" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Edition Year</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='editionYear' value={Number(editionYear)} id="editionYear" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">ISBN</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='isbn' value={isbn} id="isbn" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Publisher</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='publisher' value={publisher} id="publisher" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addProductDetails()}>Add Product</Button>
            </FormControl>
        </Container>
    )
}

export default AddProduct;