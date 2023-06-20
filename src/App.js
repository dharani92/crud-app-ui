import AllProducts from './Component/AllProducts';
import AddProduct from './Component/AddProduct';
import EditProduct from './Component/EditProduct';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/products" element={<AllProducts /> } />
        <Route path="/create" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
