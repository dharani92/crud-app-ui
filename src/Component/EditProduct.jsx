import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getProducts, getProductById,editProduct } from '../Service/api';

const initialValue = {
    title: '',
    author: '',
    editionYear: '',
    isbn: '',
    publisher: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditProduct = () => {
    const [product, setProduct] = useState(initialValue);
    const { title, author, editionYear, isbn, publisher } = product;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadProductDetails();
    }, [id]);

    const loadProductDetails = async() => {
        const response = await getProductById(id);
        setProduct(response.data);
    }

    const editProductDetails = async() => {
        const response = await editProduct(id, product);
        navigate('/products');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setProduct({...product, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Product</Typography>
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
                <Input onChange={(e) => onValueChange(e)} name='editionYear' value={editionYear} id="editionYear" aria-describedby="my-helper-text" />
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
                <Button variant="contained" color="primary" onClick={() => editProductDetails()}>Edit Product</Button>
            </FormControl>
        </Container>
    )
}

export default EditProduct;