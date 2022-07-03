import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {NavLink} from 'react-router-dom';
import { useState } from 'react';
function BestSeller() {
    const [price] = useState({
        old: "$299",
        new: "$243",
    })
    return(
             <section className='BestDeals'>           
            <div className='container'>  
            <h2>Best Seller</h2> 
                 <Carousel  className='Carousel'>
                    <Carousel.Item>
                        <div className='row'>
                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/handbag.png" alt='handbag'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Marie Claire Handbag</h5>
                                <del>{price.old}</del>
                                <span>{price.new}</span>
                                </div>
                            </div>

                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/earrings.png" alt='earrings'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Red Gem Earrings</h5>
                                <del>{price.old}</del>
                                <span>{price.new}</span>
                                </div>
                            </div>

                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/lathered-wristwatch.png"  alt='wristwatch'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Black Leathered Wristwatch</h5>
                                <del>{price.old}</del>
                                <span>{price.new}</span>
                                </div>
                            </div>

                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/tie.png" alt='tie'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Red-White Stripped Tie</h5>
                                <del>{price.old}</del>
                                <span>{price.new}</span>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='row'>
                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/handbag.png" alt='handbag'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Marie Claire Handbag</h5>
                                <del>{price.old}</del>
                                <span>{price.new}</span>
                                </div>
                            </div>

                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/earrings.png" alt='earrings'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Red Gem Earrings</h5>
                                <del>{price.old}</del>
                                <span>{price.new}</span>
                                </div>
                            </div>

                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/lathered-wristwatch.png"  alt='wristwatch'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Black Leathered Wristwatch</h5>
                                <del>{price.old}</del>
                                <span>{price.new}</span>
                                </div>
                            </div>

                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/tie.png" alt='tie'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Red-White Stripped Tie</h5>
                                <del>{price.old}</del>
                                <span>{price.new}</span>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='row'>
                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/handbag.png" alt='handbag'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Marie Claire Handbag</h5>
                                <del>{price.old}</del>
                                <span>{price.new}</span>
                                </div>
                            </div>

                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/earrings.png" alt='earrings'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Red Gem Earrings</h5>
                                <del>{price.old}</del>
                                <span>{price.new}</span>
                                </div>
                            </div>

                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/lathered-wristwatch.png"  alt='wristwatch'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Black Leathered Wristwatch</h5>
                                <del>{price.old}</del>
                                <span>{price.new}</span>
                                </div>
                            </div>

                            <div className='parent col-sm-6 col-md-3'>
                                <div className="child">
                                <div className='img-box'>
                                    <img src="assets/img/gallery/tie.png" alt='tie'/>
                                </div>
                                <h5 className="fw-bold text-1000 text-truncate">Red-White Stripped Tie</h5>
                                <del>{price.old}</del>
                                <span>{price.new}</span>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <div className='btn-box col-12 d-flex justify-content-center mt-5'><NavLink to='/' className='btn btn-lg btn-dark'>View All</NavLink></div>
            </div>
        </section>  
    )
}
export default BestSeller;



