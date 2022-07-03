import React, { useState} from "react";
import catoegories from '../../js/data'
import "./shop.css";
import { Tab, Tabs } from "react-bootstrap";
import Footer from "../footer/footer";
import Copyright from "../copyright/copyright";

export default function Shop() {
  const [data,setdata] = useState(catoegories);
  const filterresult = (item) =>{
      const result = catoegories.filter((curdata) => {
        return curdata.name === item;
      });
      setdata(result)
  }
  return (
    <section className="shop">
      <div className="container">
        <div className="shop-contant text-center">
          <h1>Shop By Category</h1>
          <Tabs defaultActiveKey="for woman" id="uncontrolled-tab-example" className="mb-3 d-flex justify-content-around ">
            <Tab  eventKey="for woman" title="for woman">
                 <div className="d-flex justify-content-between flex-wrap">
                 <button onClick={() => filterresult('woman-tshirt')}>t-shirt</button>
                 <button onClick={() => filterresult('woman-shirt')}>shirt</button>
                 <button onClick={() => filterresult('woman-shoes')}>shoe</button>
                 <button onClick={() => filterresult('woman-watch')}>watch</button>
                 <button onClick={() => filterresult('woman-sunglasses')}>sunglasses</button>
                 <button onClick={() => filterresult('woman-pagbacks')}>pagbacks</button>
                 </div>
            </Tab>
            <Tab eventKey="for men" title="for men">
            <div className="d-flex justify-content-between flex-wrap">
                 <button onClick={() => filterresult('men-tshirt')}>t-shirt</button>
                 <button onClick={() => filterresult('men-shirt')}>shirt</button>
                 <button onClick={() => filterresult('men-shoes')}>shoes</button>
                 <button onClick={() => filterresult('men-watch')}>watch</button>
                 <button onClick={() => filterresult('men-pagbacks')}>pagbacks</button>
            </div>
            </Tab>
          </Tabs>
        </div>
          <div className="shop-catogry">
              <div className="row">
              {data.map((value)=>{
                const {id,name,title,src,oldprice,newprice} = value
                return(
                    <div className="p-1 col-sm-12 col-md-6 col-lg-3" key={id}>
                      <div className="card">
                          <img src={src} alt={name} />
                          <h3>{title}</h3>
                          <del>${oldprice}</del>
                          <span>${newprice}</span>
                      </div>
                    </div>
                )
              })}
              </div>
          </div>
      </div>
      <Footer />
      <Copyright />
    </section>
    
  );
}

