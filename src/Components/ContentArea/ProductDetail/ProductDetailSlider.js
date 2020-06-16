import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBIcon } from "mdbreact";

import Shoez1 from '../../../statics/images/product-detail/shoes-1.png';
import Shoez2 from '../../../statics/images/product-detail/shoes-2.png';
import Shoez3 from '../../../statics/images/product-detail/shoes-3.png';
import Shoez4 from '../../../statics/images/product-detail/shoes-4.png';

class ProductDetailSlider extends Component {
    render() {
        return(
            <div className="section p-product-likes-sec">
                    <div className="t-heading">
                        <span>YOU MAY ALSO LIKE</span>
                        <a href="#!">See all</a>
                    </div>
                    <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={false} multiItem className="h-carousel-slider new-deals-height p-products-likes">
                        <MDBCarouselInner>
                            <MDBRow>
                                <MDBCarouselItem itemId="1">
                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Shoez1} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Nike Shoe</a></span>
                                                </div>
                                                <div className="product-price">
                                                    <span>$8,930.00</span>
                                                    <span className="old-price">$8,930.00</span>
                                                </div>
                                                <div className="product-fav">
                                                    <div className="product-raiting">
                                                        <MDBIcon className="product-raiting-checked" far icon="star" />
                                                        <MDBIcon className="product-raiting-checked" far icon="star" />
                                                        <MDBIcon className="product-raiting-checked" far icon="star" />
                                                        <MDBIcon className="product-raiting-checked" far icon="star" />
                                                        <MDBIcon far icon="star" />
                                                    </div>
                                                    <span>8.3/10</span>
                                                    <div className="p-product-chart">
                                                      <a href="#!"><i class="far fa-heart"></i></a>
                                                      <a href="#!"><MDBIcon icon="shopping-cart" /></a>
                                                    </div>
                                                </div>
                                                <div className="product-review">
                                                    <span><a href="#!">849 Reviews</a></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    
                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                          <MDBCardImage src={Shoez2} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Nike Shoe</a></span>
                                                </div>
                                                <div className="product-price">
                                                    <span>$8,930.00</span>
                                                    <span className="old-price">$8,930.00</span>
                                                </div>
                                                <div className="product-fav">
                                                    <div className="product-raiting">
                                                        <MDBIcon className="product-raiting-checked" far icon="star" />
                                                        <MDBIcon className="product-raiting-checked" far icon="star" />
                                                        <MDBIcon className="product-raiting-checked" far icon="star" />
                                                        <MDBIcon className="product-raiting-checked" far icon="star" />
                                                        <MDBIcon far icon="star" />
                                                    </div>
                                                    <span>8.3/10</span>
                                                    <div className="p-product-chart">
                                                      <a href="#!"><i class="far fa-heart"></i></a>
                                                      <a href="#!"><MDBIcon icon="shopping-cart" /></a>
                                                    </div>
                                                </div>
                                                <div className="product-review">
                                                    <span><a href="#!">849 Reviews</a></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                          <MDBCardImage src={Shoez3} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Nike Shoe</a></span>
                                                </div>
                                                <div className="product-price">
                                                    <span>$8,930.00</span>
                                                    <span className="old-price">$8,930.00</span>
                                                </div>
                                                <div className="product-fav">
                                                    <div className="product-raiting">
                                                        <MDBIcon className="product-raiting-checked" far icon="star" />
                                                        <MDBIcon className="product-raiting-checked" far icon="star" />
                                                        <MDBIcon className="product-raiting-checked" far icon="star" />
                                                        <MDBIcon className="product-raiting-checked" far icon="star" />
                                                        <MDBIcon far icon="star" />
                                                    </div>
                                                    <span>8.3/10</span>
                                                    <div className="p-product-chart">
                                                      <a href="#!"><i class="far fa-heart"></i></a>
                                                      <a href="#!"><MDBIcon icon="shopping-cart" /></a>
                                                    </div>
                                                </div>
                                                <div className="product-review">
                                                    <span><a href="#!">849 Reviews</a></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                          <MDBCardImage src={Shoez4} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Nike Shoe</a></span>
                                                </div>
                                                <div className="product-price">
                                                    <span>$8,930.00</span>
                                                    <span className="old-price">$8,930.00</span>
                                                </div>
                                                <div className="product-fav">
                                                    <div className="product-raiting">
                                                        <MDBIcon className="product-raiting-checked" far icon="star" />
                                                        <MDBIcon className="product-raiting-checked" far icon="star" />
                                                        <MDBIcon className="product-raiting-checked" far icon="star" />
                                                        <MDBIcon className="product-raiting-checked" far icon="star" />
                                                        <MDBIcon far icon="star" />
                                                    </div>
                                                    <span>8.3/10</span>
                                                    <div className="p-product-chart">
                                                      <a href="#!"><i class="far fa-heart"></i></a>
                                                      <a href="#!"><MDBIcon icon="shopping-cart" /></a>
                                                    </div>
                                                </div>
                                                <div className="product-review">
                                                    <span><a href="#!">849 Reviews</a></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>                                    
                                </MDBCarouselItem>

                                <MDBCarouselItem itemId="2">
                                    <MDBCol md="3" className="clearfix d-md-block">
                                      <MDBCard className="mb-2">
                                        <MDBCardImage src={Shoez1} />
                                          <MDBCardBody>
                                              <div className="product-title shoes-title">
                                                  <span><a href="#!">Nike Shoe</a></span>
                                              </div>
                                              <div className="product-price">
                                                  <span>$8,930.00</span>
                                                  <span className="old-price">$8,930.00</span>
                                              </div>
                                              <div className="product-fav">
                                                  <div className="product-raiting">
                                                      <MDBIcon className="product-raiting-checked" far icon="star" />
                                                      <MDBIcon className="product-raiting-checked" far icon="star" />
                                                      <MDBIcon className="product-raiting-checked" far icon="star" />
                                                      <MDBIcon className="product-raiting-checked" far icon="star" />
                                                      <MDBIcon far icon="star" />
                                                  </div>
                                                  <span>8.3/10</span>
                                                  <div className="p-product-chart">
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                    <a href="#!"><MDBIcon icon="shopping-cart" /></a>
                                                  </div>
                                              </div>
                                              <div className="product-review">
                                                  <span><a href="#!">849 Reviews</a></span>
                                              </div>
                                          </MDBCardBody>
                                      </MDBCard>
                                    </MDBCol>
                                    
                                    <MDBCol md="3" className="clearfix d-md-block">
                                      <MDBCard className="mb-2">
                                        <MDBCardImage src={Shoez2} />
                                          <MDBCardBody>
                                              <div className="product-title shoes-title">
                                                  <span><a href="#!">Nike Shoe</a></span>
                                              </div>
                                              <div className="product-price">
                                                  <span>$8,930.00</span>
                                                  <span className="old-price">$8,930.00</span>
                                              </div>
                                              <div className="product-fav">
                                                  <div className="product-raiting">
                                                      <MDBIcon className="product-raiting-checked" far icon="star" />
                                                      <MDBIcon className="product-raiting-checked" far icon="star" />
                                                      <MDBIcon className="product-raiting-checked" far icon="star" />
                                                      <MDBIcon className="product-raiting-checked" far icon="star" />
                                                      <MDBIcon far icon="star" />
                                                  </div>
                                                  <span>8.3/10</span>
                                                  <div className="p-product-chart">
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                    <a href="#!"><MDBIcon icon="shopping-cart" /></a>
                                                  </div>
                                              </div>
                                              <div className="product-review">
                                                  <span><a href="#!">849 Reviews</a></span>
                                              </div>
                                          </MDBCardBody>
                                      </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="3" className="clearfix d-md-block">
                                      <MDBCard className="mb-2">
                                        <MDBCardImage src={Shoez3} />
                                          <MDBCardBody>
                                              <div className="product-title shoes-title">
                                                  <span><a href="#!">Nike Shoe</a></span>
                                              </div>
                                              <div className="product-price">
                                                  <span>$8,930.00</span>
                                                  <span className="old-price">$8,930.00</span>
                                              </div>
                                              <div className="product-fav">
                                                  <div className="product-raiting">
                                                      <MDBIcon className="product-raiting-checked" far icon="star" />
                                                      <MDBIcon className="product-raiting-checked" far icon="star" />
                                                      <MDBIcon className="product-raiting-checked" far icon="star" />
                                                      <MDBIcon className="product-raiting-checked" far icon="star" />
                                                      <MDBIcon far icon="star" />
                                                  </div>
                                                  <span>8.3/10</span>
                                                  <div className="p-product-chart">
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                    <a href="#!"><MDBIcon icon="shopping-cart" /></a>
                                                  </div>
                                              </div>
                                              <div className="product-review">
                                                  <span><a href="#!">849 Reviews</a></span>
                                              </div>
                                          </MDBCardBody>
                                      </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="3" className="clearfix d-md-block">
                                      <MDBCard className="mb-2">
                                        <MDBCardImage src={Shoez4} />
                                          <MDBCardBody>
                                              <div className="product-title shoes-title">
                                                  <span><a href="#!">Nike Shoe</a></span>
                                              </div>
                                              <div className="product-price">
                                                  <span>$8,930.00</span>
                                                  <span className="old-price">$8,930.00</span>
                                              </div>
                                              <div className="product-fav">
                                                  <div className="product-raiting">
                                                      <MDBIcon className="product-raiting-checked" far icon="star" />
                                                      <MDBIcon className="product-raiting-checked" far icon="star" />
                                                      <MDBIcon className="product-raiting-checked" far icon="star" />
                                                      <MDBIcon className="product-raiting-checked" far icon="star" />
                                                      <MDBIcon far icon="star" />
                                                  </div>
                                                  <span>8.3/10</span>
                                                  <div className="p-product-chart">
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                    <a href="#!"><MDBIcon icon="shopping-cart" /></a>
                                                  </div>
                                              </div>
                                              <div className="product-review">
                                                  <span><a href="#!">849 Reviews</a></span>
                                              </div>
                                          </MDBCardBody>
                                      </MDBCard>
                                    </MDBCol>                                    
                                </MDBCarouselItem>
                            </MDBRow>
                        </MDBCarouselInner>
                    </MDBCarousel>
            </div>
        )
    }
}

export default ProductDetailSlider;