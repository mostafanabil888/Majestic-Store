import React from 'react'
import './checkout.css'
export default function Checkout () {
  return (
    <section className='checkout'>
        <div className='container'>
            <h2>Checkout New Arrivals</h2>
            <div className='row'>
                <div className='card-box col-sm-6 col-md-3 col-12'>
                    <img src='\assets\img\gallery\full-body.png' alt='FlatHillSlingback'/>
                        <div className='box-content'>
                            <h3>Flat Hill Slingback</h3>
                            <p>Jumper set for Women</p>
                            <span>$175</span>
                        </div>
                </div>

                <div className='card-box col-sm-6 col-md-3 col-12'>
                    <img src='\assets\img\gallery\formal-coat.png' alt='OceanBlueRing' />
                    <div className='box-content'>
                            <h3>Ocean Blue Ring</h3>
                            <p>Jumper set for Women</p>
                            <span>$175</span>
                    </div>
                </div>
                
                <div className='card-box col-sm-6 col-md-3 col-12'>
                    <img src='\assets\img\gallery\ocean-blue.png' alt='BrownLeatheredWallet' />
                    <div className='box-content'>
                            <h3>Brown Leathered Wallet</h3>
                            <p>Jumper set for Women</p>
                            <span>$175</span>
                    </div>
                </div>

                <div className='card-box col-sm-6 col-md-3 col-12'>
                    <img src='\assets\img\gallery\sweater.png' alt='sweater' />
                    <div className='box-content'>
                            <h3>Silverside Wristwatch</h3>
                            <p>Jumper set for Women</p>
                            <span>$175</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
