import Iconcontainer from '../../Components/Iconcontainer/Iconcontainer';
import Productcard from '../../Components/Productcard/Productcard';
import Sectionheader from '../../Components/Sectionheader/Sectionheader';
import './Homepage.css';
import { useEffect, useState  } from 'react';
   

const Homapage = () => {
   const [products, setProducts] = useState([]); // State to hold fetched data
   const [loading, setLoading] = useState(true); // Loading state
   const [error, setError] = useState(null); // Error state

    // Fetch data when the component mounts
  useEffect(() => {
   const fetchProducts = async () => {
     try {
       const response = await fetch('https://dummyjson.com/products/categories');
       if (!response.ok) {
         throw new Error('Failed to fetch products');
       }
       const data = await response.json();
       setProducts(data); // Set the products in state
     } catch (error) {
       setError(error.message); // Handle errors
     } finally {
       setLoading(false); // End loading
     }
   };

   fetchProducts();
  }, []); // Empty dependency array ensures the fetch runs only once when mounted
   

console.log(products);

  return (
    <div>
    <section className='hero-banner'>
       <div className="categories">
          <ul>
            <li>Gaming</li>
            <li>Womans Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifesyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Babys & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
          <div className="verticle-line"></div>
       </div>
       <div className="hero-banner-voucher"> </div>
    </section>
    <section className='flash-sales'>
       <Sectionheader title={`Today's`} subTitle={'Flash Sales'} />
        <ul className='product-list'>  
          <li >
            <Productcard  />
          </li>
        </ul>
    </section>
    <section className='deliverables'>
       <Iconcontainer outerBackground='#a7a7a7'
                      title='FREE AND FAST DELIVERY'
                      content='Free delivery for all orders over $140'
                      icon='fa-solid fa-truck-fast'
       />
       <Iconcontainer outerBackground='#a7a7a7'
                      title='24/7 CUSTOMER SERVICE'
                      content='Friendly 24/7 customer support'
                      icon='fa-solid fa-headset'
       />
       <Iconcontainer outerBackground='#a7a7a7'
                      title='MONEY BACK GUARANTEE'
                      content='We return monry within 30days'
                      icon='fa-solid fa-truck'
       />
    </section>
       
    </div>
  )
}

export default Homapage