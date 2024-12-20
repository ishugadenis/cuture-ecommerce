import { Link } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {
  return (
    <section className='navigation' >
     <nav className='navbar'>
       <div className="navbar-logo">
          <p>Cultures</p>
       </div>
       <div className="navbar-links">
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/contact">Contact</Link>
          <Link className='link' to="/about">About</Link>
          <Link className='link' to="/signup">Sign Up</Link>
       </div>
       <div className="navbar-search">
          <div className="search-input-container">
                <input
                  type="text"
                  placeholder="What are you Looking for?"
                  className="gray-input"
                />
            <i className="bi bi-search"></i>
          </div>
          <div className="icons-container">
            <i className="bi bi-suit-heart"></i>
            <Link className='iconlink' to="/cartpage"><i className="bi bi-cart3"></i></Link>
            <Link className='iconlink' to="/accountpage"><i className="bi bi-person"></i></Link>
          </div>
          
       </div>     
     </nav>
     <div className="horintal-line"></div>
    </section>
  )
}

export default Navbar