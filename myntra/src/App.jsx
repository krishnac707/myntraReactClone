import logo from './logo.svg';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Register from './components/register/Register';
import Login from './components/login/Login';
import AllProducts from './components/all-products/AllProducts';
import MensProduct from './components/mens-product/MensProduct';
import WomensProducts from './components/women-product/WomenProducts';
import KidsProducts from './components/kids-product/KidsProducts';
import SingleProductDetail from './components/single-page/SingleProductDetail';
import AddProduct from './components/add-product/AddProduct';
import UpdateProduct from './components/update-product/UpdateProduct';
import Cart from './components/cart/Cart';
import UpdateProfile from './components/update-profile/UpdateProfile';

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/all-products' element={<AllProducts />} />
                <Route exact path='/mens-products' element={<MensProduct />} />
                <Route exact path='/womens-products' element={<WomensProducts />} />
                <Route exact path='/kids-products' element={<KidsProducts />} />
                <Route exact path='/single-product/:id' element={<SingleProductDetail />} />
                <Route exact path='/add-product' element={<AddProduct />} />
                <Route exact path='/update-product/:id' element={<UpdateProduct />} />
                <Route exact path='/cart' element={<Cart />} />
                <Route exact path='/update-profile' element={<UpdateProfile />} />
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
