import './Contactpage.css';

const Contactpage = () => {
  return (
     <section className='contact'>
       <div className='contact-instruction'>
         <div className="call-to-us">
           <div className="title">
             <div className="icon-container">
                <i className="fa-solid fa-phone"></i>
             </div>
             <h3>Call To Us</h3>
           </div>
           <p>We are available 24/7, 7 day a week <br/>
           Phone: +254799768112
           </p>
         </div>
         <div className="horizontal-line"></div>
         <div className="write-to-us">
           <div className="title">
             <div className="icon-container">
                <i className="fa-solid fa-phone"></i>
             </div>
             <h3>Write To Us</h3>
           </div>
           <p>Fill out our form an we will contact<br/>
           you within 24 hours
           </p>
          <p>Email: customer@exclusive.com</p>
          <p>Email: support@exclusive.com</p>
         </div>

       </div>
       <div className="contact-inputs">
         <div className="your-details">
           <input className="your-details-input" type="text" placeholder='Your Name' required />
           <input className="your-details-input" type="text" placeholder='Your Email' required/>
           <input className="your-details-input" type="text" placeholder='Your Phone' required/>
         </div>
         <div className="your-message">
          <input className ="your-message-input" type="text" placeholder='Your Message' required />
         </div>
         <div className="send-message-btn button">
           <a>Send Message</a>
         </div>
       </div>
     </section>
  )
}

export default Contactpage