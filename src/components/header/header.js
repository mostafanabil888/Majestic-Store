import React  from "react";
import "./header.css";
import Fade from 'react-reveal';
import NavBar from "../navbar/navbar";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header name="header"  className="header py-11  border-bottom border-white border-5">
      <div className=" overlay"></div>
      <NavBar />
           <div className="container">
           <div  className="header-content  d-flex align-items-center justify-content-center">
                  <div>
                  <Fade left big>
                        <h3>With an outstanding style, only foryou</h3>
                        <h2 className="col-12">Exclusively designed for you</h2>
                    </Fade>
                  </div>           
            </div>

            <div className="img-box ">
              <Fade>
                <div className="d-flex flex-wrap">
                      <div className="right-contant col-sm-12 col-md-6">
                      <img className="col-12" src="assets/img/gallery/her.png"  alt="womenclothes"/>
                          <NavLink to='/' className='btn'>for her</NavLink>
                        </div>

                        <div className="left-contant col-sm-12 col-md-6">
                        <img className="col-12" src="assets/img/gallery/him.png"  alt="menclothes"/>
                        <NavLink to='/' className='btn'>for him</NavLink>
                        </div>   
                </div>
              </Fade>       
            </div>
              
           </div>
    </header>
  );
}
export default Header;
