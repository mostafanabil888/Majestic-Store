import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='d-flex flex-wrap justify-content-between'>
                <div className='right-contnat row col-lg-9 col-12'>
                    <div className='col-6 col-lg-3'>
                        <h5>Company Info</h5>
                        <p>About Us</p>
                        <p>Affiliate</p>
                        <p>Fashion Blogger</p>
                    </div>
                    <div className='col-6 col-lg-3'>
                        <h5>Help & Support</h5>
                        <p>Shipping Info</p>
                        <p>Refunds</p>
                        <p>How to Order</p>
                        <p>How to Track</p>
                        <p>Size Guides</p>
                    </div>
                    <div className='col-sm-12 col-lg-3'>
                        <h5>Customer Care</h5>
                        <p>Contact Us</p>
                        <p>Payment Methods</p>
                        <p>Bonus Point</p>
                    </div>
                </div>
                <div className='left-contant col-lg-3 col-12 '>
                        <h5>Signup For The Latest News</h5>
                        <input type='email' placeholder='> enter eamail' />
                        <span>+3930219390</span>
                        <span>mostafanabil420@gmail.com</span>
                </div>
            </div>
        </div>
    </footer>
  )
}
