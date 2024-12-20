import React, { useEffect, useState } from 'react'
import './Productdetails.css'
import  v1 from '../../assets/image 63.png'
import  v2 from '../../assets/image 57.png'
import  v3 from '../../assets/image 58.png'
import  v4 from '../../assets/image 59.png'
import  v5 from '../../assets/image 61.png'



const Productdetails = () => {
 const[product, setProduct] = useState(null);

 useEffect(() =>{
    setProduct(v1);
 
 }, []);

 console.log(v4);


  return (
    <section>
      <div className="product-details">
        <div className="product-images">
          <div className="product-variety-images">
            <div className="variety-product-image">
            <img src={v5} alt="" onClick={()=>setProduct(v5)}/>
            </div>
            <div className="variety-product-image">
              <img src={v2} alt="" onClick={()=>setProduct(v2)}/>
            </div>
            <div className="variety-product-image">
              <img src={v3} alt="" onClick={()=>setProduct(v3)}/>
            </div>
            <div className="variety-product-image">
              <img src={v4} alt="" onClick={()=>setProduct(v4)}/>
            </div>
          </div>
          <div className="display-product-image">
            <img src={product} alt="" />
        </div>
        </div>
        <div className="product-content">
          <h5>Havic HV G-92 Gamepad</h5>
          <h6>$192.00</h6>
          <p>Playstation 5 controller skin high quality vinyl with air channel adhesive
            for easy bubble free installs & mess free removal pressure sensitive
          </p>
          <hr />
          <p className='colors'>Colours:</p>
          <p className='size'>Size: <span className='sizebox'>XS</span>
                   <span className='sizebox'>S</span>
                   <span className='sizebox m'>M</span>
                   <span className='sizebox'>L</span>
                   <span className='sizebox'>XL</span>
          </p>
          <div className='product-prompts'>
            <div className="quantity-prompts">
              <i className='product-decrease sizebox'>-</i>
              <i className='product-quantity sizebox'>2</i>
              <i className='product-increase sizebox'>+</i>
            </div>
            <i className='red-button'>Buy Now</i>
            <i className="bi bi-suit-heart sizebox"></i>
          </div>
        </div>
        
      </div>

    </section>
  )
}

export default Productdetails