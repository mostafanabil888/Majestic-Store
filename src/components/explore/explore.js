import React from "react";
import { NavLink } from "react-router-dom";
import { Fade, Bounce } from "react-reveal";
import "./explore.css";
export default function Explore() {
  return (
    <section className="explore" id="explore-collection">
      <div className="container">
        <div className="d-flex flex-wrap mb-2">
          <Fade left big>
            <div className="expolore-contant d-flex justify-content-center align-items-center col-md-6 col-sm-12">
              <div>
                <h4>Exclusive collection 2021</h4>
                <h1 class="fw-semi-bold lh-sm fs-4 fs-lg-5 fs-xl-9">
                  Be exclusive
                </h1>
                <p class="mb-5">
                  The best everyday option in a Super Saver range within a
                  reasonable price. It is our responsibility to keep you 100
                  percent stylish. Be smart & , trendy with us.
                </p>
                <NavLink className="btn" to="/">
                  Explore Collection
                </NavLink>
              </div>
            </div>
          </Fade>
          <div className="img-box col-md-6 col-sm-12">
            <img
              className="col-12"
              src="\assets\img\gallery\outfit.png"
              alt="womenoutfit"
            />
            <NavLink className="link" to="/shop">
              outfit
            </NavLink>
          </div>
        </div>
        <div className="d-flex flex-wrap">
         <Bounce>
         <div className="img-box col-md-4 col-sm-12">
            <img
              className="col-12 pe-2"
              src="assets/img/gallery/vanity-bag.png"
              alt="vanity-bag"
            />
            <NavLink className="link" to="/shop">
              vanity-bag
            </NavLink>
          </div>
          <div className="img-box col-md-4 col-sm-12">
            <img
              className="col-12 pe-2"
              src="\assets\img\gallery\hat.png"
              alt="hat"
            />
            <NavLink className="link" to="/shop">
              hats
            </NavLink>
          </div>
          <div className="img-box col-md-4 col-sm-12">
            <img
              className="col-12"
              src="\assets\img\gallery\high-heels.png"
              alt="high-heels"
            />
            <NavLink className="link" to="/shop">
              high heels
            </NavLink>
          </div>
         </Bounce>
        </div>
      </div>
    </section>  
  );
}
