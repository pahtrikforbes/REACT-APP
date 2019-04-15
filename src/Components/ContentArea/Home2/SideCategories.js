import React, { Component } from "react";
import { MDBTooltip, MDBBtn } from 'mdbreact';

import Trading from '../../../statics/images/categories/trading.png';
import Cloth from '../../../statics/images/categories/cloth.png';
import Food from '../../../statics/images/categories/food.png';
import Games from '../../../statics/images/categories/games.png';
import Wellness from '../../../statics/images/categories/wellness.png';
import Auto from '../../../statics/images/categories/auto.png';
import Realestate from '../../../statics/images/categories/realestate.png';
import Travel from '../../../statics/images/categories/travel.png';



class SideCategories extends Component {
    render() {
        return(
            <div className="section">
                <div className="side-categories">
                    <ul>
                        <li>
                            <a href="#!"><img src={Trading} alt="Categoris" className="img-fluid" /></a>
                        </li>
                        <li>
                            <a href="#!"><img src={Cloth} alt="Categoris" className="img-fluid" /></a>
                        </li>
                        <li>
                            <a href="#!"><img src={Food} alt="Categoris" className="img-fluid" /></a>
                        </li>
                        <li>
                            <a href="#!"><img src={Games} alt="Categoris" className="img-fluid" /></a>
                        </li>
                        <li>
                            <a href="#!"><img src={Wellness} alt="Categoris" className="img-fluid" /></a>
                        </li>
                        <li>
                            <a href="#!"><img src={Auto} alt="Categoris" className="img-fluid" /></a>
                        </li>
                        <li>
                            <a href="#!"><img src={Realestate} alt="Categoris" className="img-fluid" /></a>
                        </li>
                        <li>
                            <a href="#!"><img src={Travel} alt="Categoris" className="img-fluid" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideCategories;
