import React, { useEffect, useState } from 'react';
import './AllProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {

  const [allProducts, setAllProducts] = useState();
  const [isProductPresent, setProductPresent] = useState(false)
  const router = useNavigate();
  console.log(allProducts,"all-products");

  useEffect(() => {
    const product = JSON.parse(localStorage.getItem("Products"));
    if (product) {
      setAllProducts(product);
      setProductPresent(true);

    }
    else {
      setProductPresent(false);
    }
  }, [])

  const redirect = (id) => {
    router(`/single-product/${id}`);
  }

  return (
    <div className='all-product-body'>
      <div className="breadCrumbs">
        <div>
          <p className="homeColor">Home / Clothing</p>
        </div>
        <div>
          <p className="itemHeadingColor">
            <b>Clothes</b> <span className="itemColor">- 130761 items</span>
          </p>
        </div>
        <div className="filterSection">
          <div>
            <h4 style={{ color: "#282c3f" }}>FILTERS</h4>
          </div>
          <div>
            <select name="" id="">
              <option value="Bundles">Bundles&nbsp;</option>
            </select>
            <select name="" id="">
              <option value="Bundles">Countries of Origin</option>
            </select>
            <select name="" id="">
              <option value="Bundles">Size</option>
            </select>
          </div>
          <div>
            <label>Sort by:</label>
            <select name="recomnended" id="recomnended">
              <option value="Bundles">Recommended&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </option>
            </select>
          </div>
        </div>
      </div>

      <div id="inside-all-product-body">
        <div>
          <div className="headingCategory">
            <h5 style={{ color: "#282c3f" }}>CATEGORIES</h5>
          </div>
          <div className="checkbox_filter">
            <input type="checkbox" className="priceMargin" />
            <label>Kurtas <span>(75536)</span></label><br />
            <input type="checkbox" className="priceMargin" />
            <label>Kurta Sets <span>(55226)</span></label><br />
          </div>

          <div className="filter_category">
            <div className="brandCss">
              <div>
                <h5 style={{ color: "#282c3f" }}>BRAND</h5>
              </div>
              <div>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
          </div>
          <div className="checkbox_filter">
            <input type="checkbox" className="priceMargin" />
            <label>KALINI <span>(8931)</span></label><br />
            <input type="checkbox" className="priceMargin" />
            <label>Ethinic basket <span>(4769)</span></label><br />
            <input type="checkbox" className="priceMargin" />
            <label>7Threads <span>(4355)</span></label><br />
            <input type="checkbox" className="priceMargin" />
            <label>Anouk <span>(3763)</span></label><br />
            <input type="checkbox" className="priceMargin" />
            <label>Sangria <span>(3720)</span></label><br />
            <input type="checkbox" className="priceMargin" />
            <label>Inddo Era <span>(3089)</span></label><br />
            <input type="checkbox" className="priceMargin" />
            <label>1 Stop Fashion <span>(2655)</span></label><br />
            <input type="checkbox" className="priceMargin" />
            <label>FASHOR <span>(2326)</span></label><br />
            <p>+806 more</p>
          </div>

          <div className="headingCategory">
            <h5 style={{ color: "#282c3f" }}>PRICE</h5>
          </div>
          <div className="checkbox_filter">
            <input type="checkbox" className="priceMargin" />
            <label> Rs. 187 to Rs. 11141 <span>(130505)</span></label><br />
            <input type="checkbox" className="priceMargin" />
            <label> Rs. 11141 to Rs. 22095 <span>(236)</span></label><br />
            <input type="checkbox" className="priceMargin" />
            <label> Rs. 22095 to Rs. 33049 <span>(12)</span></label><br />
            <input type="checkbox" className="priceMargin" />
            <label> Rs. 33049 to Rs. 44003 <span>(8)</span></label><br />
          </div>

          <div className="filter_category">
            <div className="brandCss">
              <div>
                <h5 style={{ color: "#282c3f" }}>COLOR</h5>
              </div>
              <div>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
          </div>
          <div className="checkbox_filter">
            <input type="checkbox" className="priceMargin" />
            <label><span className="dot"></span>Black <span>(15019)</span></label><br />
            <input type="checkbox" className="priceMargin" />
            <label><span className="blueDot"></span>Blue <span>(13098)</span></label><br />
            <input type="checkbox" className="priceMargin" />
            <label><span className="whiteDot"></span>White <span>(12644)</span></label><br />
            <input type="checkbox" className="priceMargin" />
            <label><span className="navyBlue"></span>Navy Blue <span>(10172)</span></label><br />
            <input type="checkbox" className="priceMargin" />
            <label><span className="green"></span>Green <span>(6914)</span></label><br />
            <input type="checkbox" className="priceMargin" />
            <label><span className="grey"></span>Grey <span>(6060)</span></label><br />
            <input type="checkbox" className="priceMargin" />
            <label><span className="red"></span>Red <span>(5498)</span></label><br />
            <p>+39 more</p>
          </div>

          <div className="headingCategory">
            <h5 style={{ color: "#282c3f" }}>DISCOUNT RANGE</h5>
          </div>
          <div className="checkbox_filter">
            <input type="radio" className="priceMargin" />
            <label> 10% and above </label><br />
            <input type="radio" className="priceMargin" />
            <label> 20% and above </label><br />
            <input type="radio" className="priceMargin" />
            <label> 30% and above </label><br />
            <input type="radio" className="priceMargin" />
            <label> 40% and above </label><br />
            <input type="radio" className="priceMargin" />
            <label> 50% and above </label><br />
            <input type="radio" className="priceMargin" />
            <label> 60% and above </label><br />
            <input type="radio" className="priceMargin" />
            <label> 70% and above </label><br />
            <input type="radio" className="priceMargin" />
            <label> 80% and above </label><br />
          </div>
        </div>

        <div className="rightDiv">
          <div className="singleProductDiv">
            {allProducts && allProducts.map((pro) => (
              <div key={pro.id} className="singleProductCss" onClick={() => redirect(pro.id)}>
                <img className='product-image-in-all-product' src={pro.image} alt="" />
                <h4 className="text_css_Heading">{pro.name}</h4>
                <h4 className="mrpSpace">Rs. {pro.price}</h4>&nbsp;<span className="lineThrough">Rs.5449</span>&nbsp;<span className="offerCss">(74%OFF)</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllProducts
