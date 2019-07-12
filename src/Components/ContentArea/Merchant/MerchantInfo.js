import React, { Component } from "react";

import Merchant from '../../../statics/images/merchant/merchant.png';

class MerchantInfo extends Component {
    render() {
        return(
            <div className="merchant-info">
                <p>Join for free</p>
                <p>Start advertisting your deals on veme today</p>
                <img src={Merchant} alt="Rate Hogs" className="img-fluid mt-3" />
            </div>
        )
    }
}

export default MerchantInfo;
