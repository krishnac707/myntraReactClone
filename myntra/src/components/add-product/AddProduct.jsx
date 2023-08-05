import React, { useEffect, useState } from 'react';
import './AddProduct.css';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-hot-toast';

const AddProduct = () => {
    const [productData, setproductData] = useState({ name: '', price: '', image: '', category: 'Others' })
    const router = useNavigate();

    const handleValue = (event) => {
        setproductData({ ...productData, [event.target.name]: event.target.value })
    }

    const selectCategory = (event) => {
        setproductData({ ...productData, ["category"]: event.target.value })
    }

    const formSubmit = (event) => {
        event.preventDefault();
        if (productData.name && productData.price && productData.image) {
            const product = JSON.parse(localStorage.getItem("Products")) || [];
            const randomId = uuidv4();
            productData["id"] = randomId;
            product.push(productData)
            localStorage.setItem("Products", JSON.stringify(product));
            toast.success("Product added Successfully");
            router("/all-products");
        }
        else {
            toast.error("Please Fill All Detail");
        }

    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        if (user) {
            if (user?.role == "Buyer") {
                toast.error("You are not a seller");
                router('/')
            }
        }
        else {
            toast.error("Please login first");
            router('/login')
        }
    }, [])

    return (
        <div className='register-body'>
            <div className="loginpage">
                <div className="loginId">
                    <p className="loginMargin"><span className="loginSize">Add Product</span></p>
                    <form onSubmit={formSubmit}>
                        <input type="text" className="inputCss" name='name' onChange={handleValue} placeholder="Add Product Name" />
                        <input type="number" className="inputCss" name='price' onChange={handleValue} placeholder="Add Product Price" />
                        <input type="text" className="inputCss" name='image' onChange={handleValue} placeholder="Add Product Image" />
                        <select className='form-select-css' onChange={selectCategory}>
                            <option value="Others">Others</option>
                            <option value="Mens">Mens</option>
                            <option value="Womens">Women</option>
                            <option value="Kids">Kids</option>
                        </select>
                        <input type='submit' className="buttonCss buttonMargin" value='ADD PRODUCT' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct