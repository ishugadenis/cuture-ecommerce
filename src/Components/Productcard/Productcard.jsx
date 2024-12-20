import './Productcard.css';
import Ps5pad from '../../assets/g92-2-500x500 1.png'
import { Link } from 'react-router-dom';

const Productcard = ({productImage, productName, productDescription, productPrice, productRating}) => {
  return (
   <Link to="/productdetails" >
    <div className='productcard'>
       <div className="productcard-container">
          <img src={Ps5pad} alt="" />
           <div className="offer-percentage">
            <p>-47%</p>
           </div>
           <div className="favourite">
            <i className="bi bi-suit-heart"></i>
           </div>
          <div className="productcard-button">
            <p>Add To Cart</p>
          </div>
       </div>
       <div className="productcard-info">
          <p id='product-name'>{productName}</p>
          <p>$ {productPrice}</p>
          <div className="product-ratings">
             <i className="bi bi-star"></i>
             <i className="bi bi-star"></i>
             <i className="bi bi-star"></i>
             <i className="bi bi-star"></i>
             <i className="bi bi-star"></i>
          </div>
       </div>
    </div>
    </Link>
  )
}

export default Productcard