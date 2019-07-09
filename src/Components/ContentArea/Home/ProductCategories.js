import React, { Component } from "react";
import { MDBContainer, MDBIcon } from "mdbreact";

import Trading from '../../../statics/images/categories/trading.png';
import Cloth from '../../../statics/images/categories/cloth.png';
import Food from '../../../statics/images/categories/food.png';
import Games from '../../../statics/images/categories/games.png';
import Wellness from '../../../statics/images/categories/wellness.png';
import Auto from '../../../statics/images/categories/auto.png';
import Realestate from '../../../statics/images/categories/realestate.png';
import Travel from '../../../statics/images/categories/travel.png';



class ProductCategories extends Component {
    render() {
        return(
            <div className="section">
                <MDBContainer>
                    <div className="t-heading">
                        <h5>Browse By Categories</h5>
                    </div>
                    <div className="categories-list">
                        <ul>
                            <li>
                                <img src={Trading} alt="Categoris" className="img-fluid" />
                                <a href="#!">Trending</a>
                            </li>
                            <li>
                                <img src={Cloth} alt="Categoris" className="img-fluid" />
                                <a href="#!">Clothing</a>
                            </li>
                            <li>
                                <img src={Food} alt="Categoris" className="img-fluid" />
                                <a href="#!">Food & Drink</a>
                            </li>
                            <li>
                                <img src={Games} alt="Categoris" className="img-fluid" />
                                <a href="#!">Games</a>
                            </li>
                            <li>
                                <img src={Wellness} alt="Categoris" className="img-fluid" />
                                <a href="#!">Wellness</a>
                            </li>
                            <li>
                                <img src={Auto} alt="Categoris" className="img-fluid" />
                                <a href="#!">Auto</a>
                            </li>
                            <li>
                                <img src={Realestate} alt="Categoris" className="img-fluid" />
                                <a href="#!">Real Estate</a>
                            </li>
                            <li>
                                <img src={Travel} alt="Categoris" className="img-fluid" />
                                <a href="#!">Travel</a>
                            </li>
                            <li>
                                <div className="product-more">
                                    <MDBIcon icon="ellipsis-h" />
                                    <a href="#!">More</a>   
                                </div>
                            </li>
                        </ul>
                    </div>
                </MDBContainer>
                
            </div>
        )
    }
}

export default ProductCategories;
