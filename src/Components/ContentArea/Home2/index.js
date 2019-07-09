import React, { Component } from "react";

import SliderLogin from './SliderLogin';
import SideCategories from './SideCategories';
import FeaturedDeals from './FeaturedDeals';
import NewDeals from './NewDeals';
import RecentlyViewed from './RecentlyViewed';
import WellnessSpa from './WellnessSpa';
import FoodDeals from './FoodDeals';

class OurProducts extends Component {
    render() {
        return( 
            <div>
                <SliderLogin />
                <SideCategories />
                <FeaturedDeals />   
                <NewDeals />
                <RecentlyViewed />
                <WellnessSpa />
                <FoodDeals />                            
            </div>
        )
    }
}

export default OurProducts;
