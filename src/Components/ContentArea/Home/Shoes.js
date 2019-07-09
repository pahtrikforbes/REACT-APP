import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon } from "mdbreact";

import Shoes1 from '../../../statics/images/products/shoes1.jpg';
import Shoes2 from '../../../statics/images/products/shoes2.jpg';
import Shoes3 from '../../../statics/images/products/shoes3.jpg';
import Shoes4 from '../../../statics/images/products/shoes4.jpg';



class Shoes extends Component {
    render() {
        return(
            <div className="section">
                <MDBContainer>
                    <div className="t-heading">
                        <span>Shoes</span>
                        <a href="#!">See all</a>
                    </div>
                    <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={false} multiItem className="h-carousel-slider">
                        <MDBCarouselInner>
                            <MDBRow>
                                <MDBCarouselItem itemId="1">
                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Shoes1} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Nike Shoes</a></span>
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>
                                                <div className="product-price">
                                                    <span>$8,930.00</span>
                                                    <span className="old-price">$8,930.00</span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    
                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Shoes2} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Nike Shoes</a></span>
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>
                                                <div className="product-price">
                                                    <span>$8,930.00</span>
                                                    <span className="old-price">$8,930.00</span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Shoes3} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Nike Shoes</a></span>
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>
                                                <div className="product-price">
                                                    <span>$8,930.00</span>
                                                    <span className="old-price">$8,930.00</span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Shoes4} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Nike Shoes</a></span>
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>
                                                <div className="product-price">
                                                    <span>$8,930.00</span>
                                                    <span className="old-price">$8,930.00</span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>                                    
                                </MDBCarouselItem>

                                <MDBCarouselItem itemId="2">
                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Shoes1} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Nike Shoes</a></span>
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>
                                                <div className="product-price">
                                                    <span>$8,930.00</span>
                                                    <span className="old-price">$8,930.00</span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    
                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Shoes2} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Nike Shoes</a></span>
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>
                                                <div className="product-price">
                                                    <span>$8,930.00</span>
                                                    <span className="old-price">$8,930.00</span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Shoes3} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Nike Shoes</a></span>
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>
                                                <div className="product-price">
                                                    <span>$8,930.00</span>
                                                    <span className="old-price">$8,930.00</span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Shoes4} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Nike Shoes</a></span>
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>
                                                <div className="product-price">
                                                    <span>$8,930.00</span>
                                                    <span className="old-price">$8,930.00</span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>                                    
                                </MDBCarouselItem>
                            </MDBRow>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBContainer>
            </div>
        )
    }
}

export default Shoes;
