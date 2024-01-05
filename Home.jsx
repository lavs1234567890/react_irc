import React from "react";

import Announcement from "../components/Announcement";
import Categories from "../components/Categories";

import Newsletter from "../components/Newsletter";


import Slider from "../components/Slider";
import Products from "../components/Products";

import {Link} from 'react-router-dom';



const Home = () => {
  return (
    <div>
      <Announcement />      
     
      <Categories />
      <Products/>
      
      <Newsletter/>
      
      
    </div>
  );
};

export default Home;