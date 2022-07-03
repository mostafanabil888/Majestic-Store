import React from "react";
import { NavLink } from "react-router-dom";
import "./outlet.css";
export default function Outlet() {
  return (
    <section name="outlet" className="outlet-section">
      <div className="container">
        <div className="d-flex flex-wrap">
          <div className="right-content col-md-6 col-sm-12">
              <div className="img-box bg-light col-12 text-center">
                  <img src="\assets\img\gallery\summer.png" alt="summer-clothes" />
                <NavLink className='link' to="/"> summer of '21</NavLink>
              </div>
          </div>

          <div className="left-content  col-md-6 col-sm-12">
                <div className="d-flex flex-wrap">

                <div className="img-box col-md-6 col-12">
                <img src="\assets\img\gallery\sunglasses.png" alt="summer-clothes" />
                <NavLink className='link' to="/"> sunglasses</NavLink>
                </div>

                <div className="img-box col-md-6 col-12">
                <img src="\assets\img\gallery\footwear.png" alt="summer-clothes" />
                <NavLink className='link' to="/"> footwear</NavLink>
                </div>

                <div className="img-box col-md-6 col-12">
                <img src="\assets\img\gallery\hat-black-border.png" alt="summer-clothes" />
                <NavLink className='link' to="/">hat</NavLink>
                </div>

                <div className="img-box col-md-6 col-12">
                <img src="\assets\img\gallery\watches.png" alt="summer-clothes" />
                <NavLink className='link' to="/"> watches</NavLink>
                </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>

  );
}
