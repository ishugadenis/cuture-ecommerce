import React from 'react'
import './Cartpage.css'
import Cartitem from '../../Components/Cartitem/Cartitem'

const Cartpage = () => {
  return (
    <section className='cartpage'>
      <div className="cart-title box-container">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
      <Cartitem />
      <Cartitem />
      <div className="cart-prompts">
        <div className="action-button">
          <i>Return to Shop</i>
        </div>
        <div className="action-button">
          <i>Update Cart</i>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="cart-checkout">
        <div className="cart-chekout-coupon">
          <input type="text" placeholder='Coupon Code' className='coupon' />
          <div className="red-button">
            <i>Apply Coupon</i>
          </div> 
        </div>
        <div className="cart-checkout-total">
          <h6>Cart Total</h6>
          <div className="cart-checkout-content">
            <i>Subtotal:</i>
            <i>$650</i>
          </div>
          <hr />
          <div className="cart-checkout-content">
            <i>Shipping:</i>
            <i>Free</i>
          </div>
          <hr />
          <div className="cart-checkout-content">
            <i>Total:</i>
            <i>$650</i>
          </div>
          <div className="cart-checkout-button">
            <div className="red-button">
              <i>Proceed to Checkout</i>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>

    </section>
  )
}

export default Cartpage