import React from 'react';
import BestDeals from '../bestdeals/bestdeals';
import Header from '../header/header';
import Explore from "../explore/explore";
import Checkout from "../checkout/checkout";
import Stories from "../storiescollection.js/stories";
import Bestseller from "../bestseller/bestseller";
import Outlet from "../outlet/outlet";
import Formallooks from "../formal-looks/formallooks";
import Card from "../card/cards";
import Testmonials from '../testmonials/testmonials';
import Footer from '../footer/footer';

import Copyright from '../copyright/copyright';
//start home page section
export default function Home() {
  return (
    <div>
        <Header />
        <BestDeals />
        <Explore />
        <Checkout />
        <Stories />
        <Bestseller />
        <Outlet />
        <Formallooks />
        <Card />
        <Testmonials />
        <Footer />
        <Copyright />
    </div>
  )
}
//end BestDeals section
