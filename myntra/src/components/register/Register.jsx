import React, { useState } from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {

    const [dropdownmenu, setdropdownmenu] = useState(false);
    const [userData, setUserData] = useState({ name: "", email: "", password: "", role: 'Buyer' });
    const router = useNavigate();

    const formValue = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    const selectRole = (event) => {
        setUserData({ ...userData, ["role"]: event.target.value })
    }

    const formSubmit = (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            if (userData.role == "Buyer") {
                const userArray = JSON.parse(localStorage.getItem("Users")) || [];
                console.log(userArray, "24");
                const userObj = {
                    name: userData.name,
                    email: userData.email,
                    password: userData.password,
                    role: userData.role,
                    cart: []
                }
                userArray.push(userObj);
                localStorage.setItem("Users", JSON.stringify(userArray));
                toast.success("Registration Successfull");
                router("/login");
                // setLoginSignup(false);
            }
            else {
                const users = JSON.parse(localStorage.getItem("Users")) || [];
                users.push(userData);
                localStorage.setItem("Users", JSON.stringify(users));
                toast.success("Registration Successfull");
                router("/login");
            }
        }
        else {
            toast.error("please fill all data");
        }
    }

    return (
        <div className='register-body'>
            <div className="loginpage">
                <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/c2be095d-a4fb-4981-bdad-9d69ea189da31675792659902-offer-banner-500-600x240-code-_-MYNTRA200.jpg"
                    className="register-imageSize" alt="" />
                <div className="loginId">
                    <p className="loginMargin"><span className="loginSize">Signup</span></p>
                    <form onSubmit={formSubmit}>
                        <input type="text" className="inputCss" name='name' onChange={formValue} placeholder="Enter Name" />
                        <input type="text" className="inputCss" name='email' onChange={formValue} placeholder="Enter Email" />
                        <input type="text" className="inputCss" name='password' onChange={formValue} placeholder="Enter password" />
                        <select className='form-select-css' onChange={selectRole}>
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                        </select>
                        <input type='submit' className="buttonCss buttonMargin" value='CONTINUE' />
                    </form>
                    <p className="terms loginMargin">Already have account then <span className="spanColor" onClick={()=>router('/login')}><b>Sign in from here</b></span></p>
                </div>
            </div>
        </div>
    )
}

export default Register
