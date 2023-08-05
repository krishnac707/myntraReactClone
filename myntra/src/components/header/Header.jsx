import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Auth.context';

const Header = () => {

    const { state, login, logout } = useContext(AuthContext);
    const [user, setUser] = useState();
    const router = useNavigate();

    useEffect(() => {
        if (state?.user) {
            setUser(state?.user)
        }
        else {
            setUser({});
        }
    }, [state])

    const redirectLogin = () => {
        if (user?.name) {
            router('/update-profile');
        }
    }

    return (
        <div>
            <div className="header">
                <div className="logo">
                    <div className="leftHeader">
                        <div className="logoImage">
                            <img className='imageSizeView' onClick={() => router('/')} width={110} src="data:image/jpeg;base64,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" alt="" />
                        </div>
                        <div className="menubar">
                            <div>
                                <p onClick={() => router('/mens-products')}><b>MEN</b></p>
                            </div>
                            <div>
                                <p onClick={() => router('/womens-products')}><b>WOMEN</b></p>
                            </div>
                            <div>
                                <p onClick={() => router('/kids-products')}><b>KIDS</b></p>
                            </div>
                            <div>
                                <p></p>
                                {user?.role == "Seller" ? <p onClick={() => router('/add-product')}><b>Add Product</b></p> : <p><b>HOME & LIVING</b></p>}

                            </div>
                            <div>
                                <p><b>BEAUTY</b></p>
                            </div>
                            <div>
                                <p onClick={() => router('/all-products')}><b>ALL PRODUCTS</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="rightHeader">
                        <div className="searchbar">
                            <p className="iconSearch"><FontAwesomeIcon icon={faMagnifyingGlass} />
                            </p>
                            <input type="text" className="inputSize" placeholder="Search for brands,product and More" />
                        </div>
                        <div className="profile">
                            <FontAwesomeIcon className='iconMargin' icon={faUser} />
                            <div className="dropdown-header">
                                {/* <p className="fontSize"><b>profile</b></p> */}
                                {user?.email ? <p className="dropbtn-header">{user.name}</p> : <p className="dropbtn-header">profile</p>}
                                <div className="dropdown-content-header">
                                    {user?.email && <div ><p onClick={redirectLogin}>My Account</p></div>}
                                    {user?.email ? <div><p onClick={logout}>Logout</p></div> : <div onClick={()=>router('login')}><button className='login-register-button-css-navbar'>login/register</button></div>}
                                </div>
                            </div>
                        </div>
                        <div className="wishlist">
                            <FontAwesomeIcon className='iconMargin' icon={faHeart} />
                            <p className="fontSize"><b>Wishlist</b></p>
                        </div>
                        <div className="cart" onClick={() => router('/cart')}>
                            <FontAwesomeIcon className='iconMargin' icon={faBagShopping} />
                            <p className="fontSize"><b>Cart</b></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
