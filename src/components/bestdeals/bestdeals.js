import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {NavLink} from 'react-router-dom'
import Jump from 'react-reveal/Jump';
import './bestdeals.css';
//start BestDeals section 
function BestDeals() {
    return(
        <section className='BestDeals'>           
            <Jump>
            <div className='container'>  
            <h2>Best Deals</h2> 
                 <Carousel  className='Carousel'>
                    <Carousel.Item>
                        <div className='row'>
                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/flat-hill.png" alt='shoes'/>
                                </div>
                                <h5 class="fw-bold text-1000 text-truncate">Flat Hill Slingback</h5>
                                <del>$200</del>
                                <span>$175</span>
                                </div>
                            </div>

                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/blue-ring.png" alt='shoes'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Ocean Blue Ring</h5>
                                <del>$200</del>
                                <span>$175</span>
                                </div>
                            </div>

                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/wallet.png"  alt='shoes'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Brown Leathered Wallet</h5>
                                <del>$200</del>
                                <span>$175</span>
                                </div>
                            </div>

                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/wrist-watch.png" alt='shoes'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Silverside Wristwatch</h5>
                                <del>$200</del>
                                <span>$175</span>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='row'>
                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/flat-hill.png" alt='shoes'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Flat Hill Slingback</h5>
                                <del>$200</del>
                                <span>$175</span>
                                </div>
                            </div>

                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/blue-ring.png" alt='shoes'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Ocean Blue Ring</h5>
                                <del>$200</del>
                                <span>$175</span>
                                </div>
                            </div>

                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/wallet.png"  alt='shoes'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Brown Leathered Wallet</h5>
                                <del>$200</del>
                                <span>$175</span>
                                </div>
                            </div>

                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/wrist-watch.png" alt='shoes'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Silverside Wristwatch</h5>
                                <del>$200</del>
                                <span>$175</span>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='row'>
                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/flat-hill.png" alt='shoes'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Flat Hill Slingback</h5>
                                <del>$200</del>
                                <span>$175</span>
                                </div>
                            </div>

                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/blue-ring.png" alt='shoes'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Ocean Blue Ring</h5>
                                <del>$200</del>
                                <span>$175</span>
                                </div>
                            </div>

                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/wallet.png"  alt='shoes'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Brown Leathered Wallet</h5>
                                <del>$200</del>
                                <span>$175</span>
                                </div>
                            </div>

                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/wrist-watch.png" alt='shoes'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Silverside Wristwatch</h5>
                                <del>$200</del>
                                <span>$175</span>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <div className='btn-box col-12 d-flex justify-content-center mt-5'><NavLink to='/shop' className='btn btn-lg btn-dark'>View All</NavLink></div>
            </div>
            </Jump>  
        </section>  
    )
}
export default BestDeals;
//end BestDeals section



