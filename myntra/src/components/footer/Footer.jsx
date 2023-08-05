import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div id='footer-body'>
            <div>
                <div className="onlineShopping">
                    <p className="footerHeading"><b>ONLINE SHOPPING</b></p>
                    <p className="footerText">Men</p>
                    <p className="footerText">Women</p>
                    <p className="footerText">Kids</p>
                    <p className="footerText">Home & Living</p>
                    <p className="footerText">Beauty</p>
                    <p className="footerSubHeading"><b>USEFUL LINK</b></p>
                    <p className="footerText">Blog</p>
                    <p className="footerText">Site Map</p>
                    <p className="footerText">Careers</p>
                    <p className="footerText">Whitehat</p>
                </div>
                <div className="customerpolicy">
                    <p className="footerHeading"><b>CUSTOMER POLICIES</b></p>
                    <p className="footerText">Contact us</p>
                    <p className="footerText">FAQ</p>
                    <p className="footerText">T&C</p>
                    <p className="footerText">Terms to use</p>
                    <p className="footerText">Track orders</p>
                    <p className="footerText">Shipping</p>
                    <p className="footerText">Cancellation</p>
                    <p className="footerText">Return</p>
                    <p className="footerText">Private Policy</p>
                </div>

                <div className="experianceMyntraMobile">
                    <p className="footerHeading"><b>EXPERIENCE MYNTRA APP ON MOBILE</b></p>
                    <div className="appDownloadImage">
                        <div><img className="androidLink"
                            src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                            alt="" /></div>
                        <div><img className="iosLink"
                            src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                            alt="" /></div>
                    </div>
                    <p className="footerHeadingTouch"><b>KEEP IN TOUCH</b></p>
                    <div className="socialMediaLogo">
                        <div><img className="facebookLink"
                            src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png"
                            alt="" /></div>
                        <div><img className="twitterLink"
                            src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png"
                            alt="" /></div>
                        <div><img className="whatsappLink"
                            src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png"
                            alt="" /></div>
                        <div><img className="instagramLink"
                            src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png"
                            alt="" /></div>
                    </div>
                </div>

                <div className="originalLogo">
                    <div>
                        <div>
                            <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                                alt="" width="40" />
                        </div>
                        <div>
                            <p>100% ORIGINAL guarantee for all products at myntra.com</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
                                alt="" width="40" />
                        </div>
                        <div>
                            <p>Return within 14days of receiving your order</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer