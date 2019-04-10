import React, { Component } from "react";

import Slider from './Slider';
import ProductCategories from './ProductCategories';
import FeaturedDeals from './FeaturedDeals';
import Shoes from './Shoes';
import WellnessSpa from './WellnessSpa';
import ProductAdd from './ProductAdd';
import FoodDeals from './FoodDeals';





class OurProducts extends Component {
    render() {
        return(
            <div>
                <Slider />
                <ProductCategories />
                <FeaturedDeals />   
                <Shoes />
                <WellnessSpa />
                <ProductAdd />
                <FoodDeals />
                
                
                
            </div>
        )
    }
}

export default OurProducts;
