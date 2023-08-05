import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom'
import './SingleProductDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faBagShopping, faHeart, faTruck } from '@fortawesome/free-solid-svg-icons'

const SingleProductDetail = () => {

    const { id } = useParams();
    const router = useNavigate();
    const [allProducts, setAllProducts] = useState([]);
    const [singleproduct, setSingleProduct] = useState({});
    const [userdata, setUserData] = useState();
    const [isuserLogin, setUserLogin] = useState(false);
    const [currentEmail, setCurrentEmail] = useState("");

    console.log(id, "hello-15");

    useEffect(() => {
        const product = JSON.parse(localStorage.getItem("Products"));
        if (product) {
            for (var i = 0; i < product.length; i++) {
                setAllProducts(product);
            }
        }
    }, [])

    useEffect(() => {
        if (id && allProducts.length) {
            const result = allProducts.find((product) => product.id == id)
            // console.log(result, "result");
            setSingleProduct(result);
        }
    }, [allProducts, id])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        if (user) {
            setUserLogin(true);
            setUserData(user);
            setCurrentEmail(user?.email);
        }
    }, [])

    const cartProduct = () => {
        if (isuserLogin) {
            if (userdata?.role == "Buyer") {
                const alluser = JSON.parse(localStorage.getItem("Users"));
                for (var i = 0; i < alluser.length; i++) {
                    if (alluser[i].email == currentEmail) {
                        alluser[i]?.cart.push(singleproduct);
                        localStorage.setItem("Users", JSON.stringify(alluser));
                        toast.success("Product Added Successfully");
                        router("/all-products");
                        break;
                    }
                }
            }
            else {
                toast.error("Sorry!!! You are a seller. you won't be able to buy product")
            }
        }
        else {
            toast.error("please login first");
            router('/login');
        }
    }

    const redirect = (id) => {
        router(`/update-product/${id}`);
    }

    return (
        <div className='single-product-body'>
            <div id="path">
                <p>Home / Clothing</p>
            </div>
            <div id="productInfo">
                {singleproduct &&
                    <>
                        <div id="productImage">
                            <img src={singleproduct.image} alt="" />
                            <img src={singleproduct.image} alt="" />
                            <img src={singleproduct.image} alt="" />
                            <img src={singleproduct.image} alt="" />
                            <img src={singleproduct.image} alt="" />
                        </div>
                        <div id="productDescription">
                            <div>
                                <h3>{singleproduct.name}</h3>
                                <div className="productDescriptionBorderCss">
                                    <div className="productDescriptionAlignmentCss">
                                        <h5>4.5</h5><FontAwesomeIcon style={{ color: "#14958f" }} icon={faStar} />
                                    </div>
                                    <div>
                                        <p>319 Rating</p>
                                    </div>
                                </div>
                            </div>
                            <div id="productCartSection">
                                <p className="mrpCss"><b>&#8377; {singleproduct.price}&nbsp;&nbsp;</b>
                                </p>
                                <p className="taxCss"><b>inclusive of all taxes</b></p>
                                <p className="sizeMarginParagraph"><span className="headSize"><b>SELECT SIZE</b></span><span className="bodySize"><b>SELECT SIZE &gt;</b></span></p>

                                <div className="sizeCircle">
                                    <div><span><b>S</b></span></div>
                                    <div><span><b>M</b></span></div>
                                    <div><span><b>L</b></span></div>
                                    <div><span><b>XL</b></span></div>
                                    <div><span><b>XXL</b></span></div>
                                    <div><span><b>3XL</b></span></div>
                                </div>
                                <div className="buttonCssSingleProduct">
                                    <button className="buttonBag" onClick={cartProduct}><FontAwesomeIcon icon={faBagShopping} />&nbsp;&nbsp;&nbsp;ADD TO BAG</button>
                                    {userdata?.role == "Seller" ? <button className='wishlistCSs' onClick={() => redirect(singleproduct.id)}>Update product</button> : <button className="wishlistCSs"><FontAwesomeIcon icon={faHeart} />&nbsp;&nbsp;&nbsp;WISHLIST</button>}
                                </div>
                            </div>
                            <div id="deliveryDetail">
                                <div>
                                    <p style={{ color: "#282c3f" }}><b>DELIVERY OPTIONS</b>&nbsp;&nbsp;<FontAwesomeIcon icon={faTruck} /></p>
                                </div>
                                <div id="pincodeCss">
                                    <div className="pincodeInputCss">
                                        <input type="text" placeholder="Enter Pincode" />
                                        <button><b>check</b></button>
                                    </div>
                                </div>
                                <p className="fontPincodeCss">Please enter PIN code to check delivery time & Pay on Delivery
                                    Availability</p>
                                <div className="productTerms">
                                    <p>100% Original Products</p>
                                    <p> Pay on delivery might be available</p>
                                    <p>Easy 14 days returns and exchanges</p>
                                    <p>Try & Buy might be available</p>
                                </div>
                                <h4 className="offersCss">BEST OFFERS &nbsp;&nbsp;<i className="fa-solid fa-tag"></i></h4>
                                <p className="priceCss"><b>Best Price: <span className="rsCss">Rs. 749</span></b></p>

                                <div className="unorderListCss">
                                    <ul>
                                        <li>Coupon code: <b>MYNTRA200</b></li>
                                        <li>Coupon Discount: Rs. 150 off (check cart for final savings)</li>
                                        <li>Applicable on: Orders above Rs. 1199 (only on first purchase)</li>
                                    </ul>
                                </div>
                                <p className="eligibleCss"><b>View Eligible Products</b></p>

                                <h6 className="discountCss">12% instant Discount on OneCard Credit Cards</h6>
                                <div className="unorderListDiscountCss">
                                    <ul>
                                        <li>Min spend Rs. 3500, Max Discount Rs.1000</li>
                                    </ul>
                                </div>
                                <p className="eligibleCss"><b>Terms and Conditions</b></p>

                                <h6 className="discountCss">10% instant Discount on IDFC First Credit Cards and Debit Card</h6>
                                <div className="unorderListDiscountCss">
                                    <ul>
                                        <li>Min spend Rs. 2500, Max Discount Rs.1000</li>
                                    </ul>
                                </div>
                                <p className="termsCss"><b>Terms and Conditions</b></p>
                            </div>

                        </div>
                    </>
                }
            </div>
        </div >
    )
}

export default SingleProductDetail
