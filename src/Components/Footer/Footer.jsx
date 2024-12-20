import './Footer.css';

const Footer = () => {
  return (
    <section className='footer'>
      <div className="footer-container">
        <div className="exclusive">
          <h3>Exclusive</h3>
          <ul>
            <li>Subscribe</li>
            <li>Get 10% off your first order</li>
          </ul>
          <div className="footer-container-input">
            <input type="text" placeholder='Enter your email' />
            <i className="fa-regular fa-paper-plane"></i>
          </div>
          
        </div>
        <div className="support">
          <h3>Support</h3>
          <ul>
            <li>111 Bioy sarani Dhaka</li>
            <li>DH 1515, Bangladesh</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>
        <div className="account">
          <h3>Account</h3>
          <ul>
            <li>My Account</li>
            <li>Login/Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="quick-ink">
          <h3>Privacy-policy</h3>
          <ul>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Footer