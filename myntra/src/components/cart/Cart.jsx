import React, { useEffect, useState } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Cart = () => {

    const [usercart, setUsercart] = useState([]);
    const [finalPrice, setFinalPrice] = useState();
    const router = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        if (user?.email) {
            const allUser = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUser.length; i++) {
                if (allUser[i].email == user.email && allUser[i].password == user.password) {
                    setUsercart(allUser[i].cart);
                    break;
                }
            }
        }
        else {
            toast.error("Please Login first to add product");
            router("/login");
        }
    }, [])

    useEffect(() => {
        var totalPrice = 0
        if (usercart?.length) {
            for (var i = 0; i < usercart.length; i++) {
                totalPrice = totalPrice + parseInt(usercart[i].price);
            }
            setFinalPrice(totalPrice);
        }
    }, [usercart])

    const buyProduct = () => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        if (usercart.length) {
            if (user?.email) {
                const allUser = JSON.parse(localStorage.getItem("Users"));
                for (var i = 0; i < allUser.length; i++) {
                    if (allUser[i].email == user.email && allUser[i].password == user.password) {
                        allUser[i].cart = [];
                        localStorage.setItem("Users", JSON.stringify(allUser));
                        break;
                    }
                }
                setFinalPrice(0);
                setUsercart([]);
                router('/')
                return toast.success("Product will delivered Soon!!!")
            }
        }
        else {
            toast.error("please add product first")
            router('/all-products')
        }
    }

    const removeProduct = (id) => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        var removeItem;
        if (user?.email) {
            const allUser = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUser.length; i++) {
                if (allUser[i].email == user.email && allUser[i].password == user.password) {
                    removeItem = usercart.filter((item) => item.id !== id);
                    allUser[i].cart = removeItem;
                    localStorage.setItem("Users", JSON.stringify(allUser));
                    break;
                }
            }
        }
        setFinalPrice(0);
        setUsercart(removeItem);
    }

    return (
        <div className="cart-body">
            <div className='bodyContent-cart'>
                <div className="rightDiv-cart-product">
                    <div className="pincodeDiv">
                        <div className="deliver">
                            <p>Deliver to:<span><b>421502</b></span></p>
                        </div>
                        <div className="changeAddress">
                            <p><b>CHANGE ADDRESS</b></p>
                        </div>
                    </div>

                    <div className="availableOffers">
                        <div>
                            <p className="offersCss"><b>Available Offers</b></p>
                            <p className="discountCss">10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of
                                Rs 3,500.TCA</p>
                            <p className="showMoreCss"><b>Show More </b><i className="arrow down"></i></p>
                        </div>

                    </div>

                    {usercart.map((cartProduct) => (
                        <>
                            <div className="wishlist-cart-product">
                                <div className="selectedItemWishlist">
                                    <input className="checkboxCss" type="checkbox" name="" id="" />
                                    <h4 className="itemCss">1/1 ITEM SELECTED</h4>
                                </div>
                                <div className="removeItemWishlist">
                                    <div className="removeWishlist" style={{ cursor: "pointer" }} onClick={() => removeProduct(cartProduct.id)}><b>REMOVE</b></div>
                                    <div className="moveWishlist"><b>MOVE TO WISHLIST</b></div>
                                </div>
                            </div>

                            <div className="productInfo">
                                <div className="imageCss-cart">
                                    <img src={cartProduct.image} alt="" />
                                </div>
                                <div className="productDescription-cart">
                                    <p className="productHeading"><b>{cartProduct.name}</b></p>
                                    <div className="sizeCss">
                                        <div className="sizeQty">
                                            <div className="size">
                                                <p className="sizePadding"><b>Size: M</b></p>
                                            </div>
                                            <div className="qty">
                                                <p className="qtyPadding"><b>Qty: 1</b></p>
                                            </div>
                                        </div>
                                    </div>
                                    <p><span className="amt"><b> &#8377;{cartProduct.price} &nbsp;</b></span><span
                                        className="discountAmt">&#8377;5000</span><span className="discountNo"> &nbsp;55% OFF</span></p>
                                    <p className="returnDays"><b>14 Days </b><span className="returnAvailable">return available</span></p>
                                    <p className="returnAvailable">Delivered by <span className="returnDays"><b>15 Jun 2023</b></span></p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>

                <div className="leftDiv-cart-product">
                    <div className='leftDiv-cart'>
                        <p className="coupons"><b>COUPONS</b></p>
                        <div className="couponTag">
                            <div className="tagg"><i className="fa-solid fa-tag"></i></div>
                            <div className="applyCss">
                                <div className="applyCoupon">
                                    <p><b>Apply Coupon</b></p>
                                </div>
                                <div className="applyy">
                                    <p className="applyCsss"><b>APPLY</b></p>
                                </div>
                            </div>
                        </div>
                        <p className="coupons"><b>PRICE DETAILS(1 Item)</b></p>
                        <div className="mrpCss">
                            <p>Total MRP</p>
                            <p>&#8377;{finalPrice + finalPrice}</p>
                        </div>
                        <div className="mrpCss">
                            <p>Discount on MRP</p>
                            <p style={{ color: "#20BD99" }}>-&#8377;{finalPrice}</p>
                        </div>

                        <div className="mrpCss">
                            <p>Coupon Discount</p>
                            <p style={{ color: "#ff3f6c" }}>Apply Coupon</p>
                        </div>

                        <div className="mrpCss">
                            <p>Convenience Fee <span style={{ color: "#ff3f6c" }}><b>Know More</b></span></p>
                            <p><span style={{ textDecoration: "line-through" }}>&#8377;99 </span><span
                                style={{ color: "#20BD99" }}>FREE</span></p>
                        </div>

                        <div style={{ borderBottom: "1px solid #f5f5f6", marginBottom: "5%" }}></div>

                        <div className="mrpCss">
                            <p><b>Total Amount</b></p>
                            <p><b>&#8377;{finalPrice}</b></p>
                        </div>

                        <div className="placeOrder">
                            <p onClick={buyProduct} ><b>PLACE ORDER</b></p>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Cart
