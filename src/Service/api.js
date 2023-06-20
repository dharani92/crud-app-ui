import axios from 'axios';

const baseUrl = 'http://52.91.243.129:8081/books';

export const getProducts = async () => {
    return await axios.get(`${baseUrl}`);
}
export const getProductById = async (id) => {
    return await axios.get(`${baseUrl}/${id}`);
}
export const addProduct = async (product) => {
    return await axios.post(`${baseUrl}`, product);
}

export const deleteProduct = async (id) => {
    return await axios.delete(`${baseUrl}/${id}`);
}

export const editProduct = async (id, product) => {
    return await axios.put(`${baseUrl}/${id}`, product)
}