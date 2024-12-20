import React from 'react'
import './Cartitem.css'
import Laptop from '../../assets/ideapad-gaming-3i-01-500x500 1.png';

const Cartitem = () => {
  return (
    <div className='cart-item'>
        <div className="cart-item-product">
            <img src={Laptop} alt="" />
            <p>LCD Monitor</p>
        </div>
        <div className="cart-item-price">
            <p>$650</p>
        </div>
        <div className="cart-item-quantity">
            <p>01</p>
            <div className="quantity-controllers">
              <i className="bi bi-chevron-up"></i>
              <i className="bi bi-chevron-down"></i>
            </div>
        </div>
        <div className="cart-item-subtotal">
            <p>$650</p>
        </div>

    </div>
  )
}

export default Cartitem