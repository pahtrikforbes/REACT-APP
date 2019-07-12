import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBIcon, MDBModal, MDBModalBody, MDBModalHeader, MDBBtn  } from 'mdbreact';

import ProductDetailImg from '../../../statics/images/product-detail/product-detail-img.png';
import HotVetor from '../../../statics/images/product-detail/hot-Vector.png';
import Sheild from '../../../statics/images/product-detail/sheild.png';
import Open from '../../../statics/images/product-detail/open.png';
import Truck from '../../../statics/images/product-detail/truck.png';
import Call from '../../../statics/images/product-detail/call-user.png';
import Coupon from '../../../statics/images/product-detail/coupon.png';
import Qr from '../../../statics/images/product-detail/qr.png';
import Email from '../../../statics/images/product-detail/invelop.png';
import Whatsapp from '../../../statics/images/product-detail/whatsapp.png';

class ProductInfoAndQr extends Component {

  state = {
    modal: false
  }
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

render() {
  return (
      <div className="p-product-info-sec">
        <MDBRow>
          <MDBCol md="7">
            <div className="product-image">
              <img src={ProductDetailImg} alt="Product Image" className="img-fluid" />
              <img src={HotVetor} alt="Product Hot" className="img-fluid product-hot" />
            </div>
          </MDBCol>
          <MDBCol md="5">
              <div className="p-product-info">
                  <div className="p-product-title">
                    <h5>Nike Hurachi 618</h5>
                    <h5>Mens’ Shoe</h5>
                  </div>
                  <div className="p-product-brand">
                    <span>Nike Stores</span>
                    <ul>
                      <li>
                        <img src={Sheild} alt="Product Hot" className="img-fluid" />
                      </li>
                      <li>
                        <img src={Open} alt="Product Hot" className="img-fluid" />
                      </li>
                      <li>
                        <img src={Truck} alt="Product Hot" className="img-fluid" />
                      </li>
                      <li>
                        <img src={Call} alt="Product Hot" className="img-fluid" />
                      </li>
                    </ul>
                  </div>
                  <div className="p-product-rating">
                    <div className="product-fav">
                        <div className="product-raiting">
                            <MDBIcon className="product-raiting-checked" far icon="star" />
                            <MDBIcon className="product-raiting-checked" far icon="star" />
                            <MDBIcon className="product-raiting-checked" far icon="star" />
                            <MDBIcon className="product-raiting-checked" far icon="star" />
                            <MDBIcon far icon="star" />
                        </div>
                        <span>8.3/10</span>
                    </div>
                    <div className="product-review">
                        <span><a href="#!">849 Reviews</a></span>
                    </div>
                  </div>
                  <div className="p-product-price">
                    <span>$ 8,930.00</span>
                    <span className="p-product-off">$11,230.00</span>
                  </div>
                  <div className="p-product-qr">
                    <MDBRow>
                      <MDBCol md="6"> 
                        <img src={Qr} alt="Product Hot" className="img-fluid" />
                      </MDBCol>
                      <MDBCol md="6 qr-info-center"> 
                        <div className="qr-info">
                          <p> Scan QR Code for deal or </p>
                          <div className="p-share-social-btn">
                            <ul>
                              <li><span>Send to</span></li>
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
                            <span>7HBD 7&T</span>
                          </div>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </div>
                  <div className="p-qr-join">
                    <p>It is a long established fact that a reader will be distracted by the readable. <u>Join Today</u> <MDBIcon icon="angle-right" /></p>
                  </div>
              </div>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default ProductInfoAndQr;
