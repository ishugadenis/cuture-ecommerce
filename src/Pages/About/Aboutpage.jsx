import './Aboutpage.css';
import Iconcontainer from '../../Components/Iconcontainer/Iconcontainer';
import Potrait from '../../assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png';
import Profilecontainer from '../../Components/Profiecontainer/Profilecontainer';
import Tom from '.././../assets/image 46.png'
import Emma from '.././../assets/image 51.png'
import Will from '.././../assets/image 47.png'

const Aboutpage = () => {
  return (
    <div>
      <section className='our-story'>
         <div className="our-story-content">
           <h2>Our Story</h2>
           <p>Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh, Supported by wide range
            of tailored marketing, data and service solutions, Exclusive has 10,500
            sellers and 300 brand and serves 3 million customers acrross the region
           </p>
           <p>Exclusive has more than 1 million products to offer, growing at a very fast rate,
            Exclusive offers a diverse assotment in categories ranging from consumer.
           </p>
         </div>
         <img src={Potrait} alt="" />
      </section>
      <section className='stats'>
       <Iconcontainer outerBackground='#a7a7a7'
                      title='10.5k'
                      content='Sellers active our site'
                      icon='fa-solid fa-truck-fast'
                       borderType='solid 2px var(--background-gray)'
       />
       <Iconcontainer outerBackground='#a7a7a7'
                      title='3.3k'
                      content='Mopnthly Product sale'
                      icon='fa-solid fa-headset'
                      borderType='solid 2px var(--background-gray)'
       />
       <Iconcontainer outerBackground='#a7a7a7'
                      title='45.5k'
                      content='Customer active in our site'
                      icon='fa-solid fa-truck'
                      borderType='solid 2px var(--background-gray)'
       />
       <Iconcontainer outerBackground='#a7a7a7'
                      title='25k'
                      content='Anual gross sale in our site'
                      icon='fa-solid fa-truck'
                      borderType='solid 2px var(--background-gray)'
       />
    </section>
     
    <section className='profiles'>
      <Profilecontainer profileImage={Tom} position='Founder & Chairman' />
      <Profilecontainer profileImage={Emma} position='Managing Designer'/>
      <Profilecontainer profileImage={Will} position='Product Designer'/>

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

export default Aboutpage