import React from 'react'
import './Account.css'

const Accountpage = () => {
  return (
    <section className='account'>
      <i className='account-owner'>Welcome! Denis Rav</i>
      <div className="spacer"></div>
      <div className="account-box">
        <div className="account-links">
          <div className="account-links-link">
            <h6>Manage My Account</h6>
            <i>My Profile</i>
            <i>Address Book</i>
            <i>Mt Payment Options</i>
          </div>
          <div className="account-links-link">
            <h6>Manage Orders</h6>
            <i>My Returns</i>
            <i>My Cancellations</i>
          </div>
          <div className="account-links-link">
            <h6>Manage WishList</h6>
          </div>
          
        </div>
        <div className="account-form box-container">
        <h6>Edit Your Profile</h6>
          <div className="name-input">
            <div className="input-box">      
              <label htmlFor="firstname">FirstName</label>
              <input type="text" placeholder='Denis' id='firstname'/>
            </div>
            <div className="input-box">
              <label htmlFor="lastname">Lastname</label>
              <input type="text" placeholder='Rav' id='lastname'/>
            </div>
          </div>
          <div className="name-input">
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder='denisrav@gmail.com' id='email'/>
            </div>
            <div className="input-box">
              <label htmlFor="address">Address</label>
              <input type="text" placeholder='Nairobi 546, Moi Avenue' id='address' />
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="password">Password Changes</label>
            <input type="text" placeholder='Current Password' />
            <input type="text" placeholder='New Password' />
            <input type="text" placeholder='Confirm New Password' />
          </div>
          <div className="account-form-btns">
            <i className='action-button'>Cancel</i>
            <i className='red-button'>Save Changes</i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accountpage