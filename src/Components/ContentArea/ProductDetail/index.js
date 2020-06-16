import React, { Component } from 'react';
import { MDBContainer, MDBModalBody, MDBModalHeader, MDBIcon, MDBRow, MDBCol, MDBBtn  } from 'mdbreact';

import ProductInfo from './ProductInfo.js';
import ProductDetailSlider from './ProductDetailSlider.js';
import ProductDescription from './ProductDescription.js';
import WriteReview from './WriteReview.js';

import Logo from '../../../statics/images/logo.png';
import Instagram from '../../../statics/images/product-detail/instagram.png';
import Email from '../../../statics/images/product-detail/invelop.png';
import Whatsapp from '../../../statics/images/product-detail/whatsapp.png';

class ProductDeatil extends Component {

render() {
  const { closeModal } = this.props;

  return (
    <MDBContainer>
      <MDBModalHeader className="p-modal-header p-header-popup-social">
          <div className="popup-header">
            <MDBIcon icon="long-arrow-alt-left" onClick={ closeModal }/>
            <img src={Logo} alt="Veme" className="img-fluid" />
          </div>
          <div>Nike Shoes sale</div>
          <div className="p-share-social-btn">
            <ul>
              <li><span>Share</span></li>
              <li>
                <MDBBtn className="tw" floating social="tw" size="md">
                  <MDBIcon fab icon="twitter" className="pr-1" />
                </MDBBtn>
              </li>
              <li>
                <MDBBtn className="fb" floating social="fb" size="md">
                  <MDBIcon fab icon="facebook-f" className="pr-1" />
                </MDBBtn>
              </li>
              <li>
                <MDBBtn className="gp" floating social="gp" size="md">
                  <img src={Instagram} alt="Veme" className="img-fluid" />
                </MDBBtn>
              </li>
              <li>
                <MDBBtn className="gp" floating social="gp" size="md">
                <img src={Email} alt="Veme" className="img-fluid" />
                </MDBBtn>
              </li>
              <li>
                <MDBBtn className="gp" floating social="gp" size="md">
                <img src={Whatsapp} alt="Veme" className="img-fluid" />
                </MDBBtn>
              </li>
            </ul>
          </div>
      </MDBModalHeader>
      <MDBModalBody>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12"><ProductInfo /></MDBCol>
            <MDBCol md="12"><ProductDetailSlider /></MDBCol>
            <MDBCol md="12"><ProductDescription /></MDBCol>
            <MDBCol md="12"><WriteReview /></MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBModalBody>
    </MDBContainer>
    );
  }
}

export default ProductDeatil;
