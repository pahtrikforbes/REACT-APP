import React, { Component } from "react";
import { MDBContainer } from "mdbreact";

import ProductAddImg from '../../../statics/images/product-add.jpg';



class ProductAdd extends Component {
    render() {
        return(
            <div className="section">
                <MDBContainer>
                    <div className="product-add">
                        <img src={ProductAddImg} alt="Categoris" className="img-fluid" />
                    </div>    
                </MDBContainer>
                
            </div>
        )
    }
}

export default ProductAdd;
