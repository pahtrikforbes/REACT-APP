import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBIcon } from "mdbreact";

import FeaturedTitle from '../../../statics/images/featured-title.png';
import Featured1 from '../../../statics/images/products/featured1.jpg';
import Featured2 from '../../../statics/images/products/featured2.jpg';



class FeaturedDeals extends Component {
    render() {
        return(
            <div className="section">
                
                    
                    <MDBContainer>
                        <div className="featured-sec">
                        <div className="featured-sec-border">
                        <MDBRow>
                            <MDBCol md="12">
                                <div className="t-heading">
                                    <span><img src={FeaturedTitle} alt="Rate Hogs" className="img-fluid" /> Featured Daily Deals</span>
                                    <a href="#!">See all</a>
                                </div>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src={Featured1} />
                                    <MDBCardBody>
                                        <div className="product-title featured-p-title">
                                            <span><a href="#!">Giscombe's sports sale</a></span>
                                            <span><a href="#!">50% off new arrivals</a></span>
                                        </div>
                                        <div className="product-title">
                                            <div className="product-raiting">
                                                <MDBIcon className="product-raiting-checked" far icon="star" />
                                                <MDBIcon className="product-raiting-checked" far icon="star" />
                                                <MDBIcon className="product-raiting-checked" far icon="star" />
                                                <MDBIcon className="product-raiting-checked" far icon="star" />
                                                <MDBIcon far icon="star" />
                                            </div>
                                            <span>8.3/10</span>
                                            <a href="#!"><i class="far fa-heart"></i></a>
                                        </div>

                                        <div className="product-review">
                                            <span><a href="#!">849 Reviews</a></span>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="2">
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src={Featured2} />
                                    <MDBCardBody>
                                        <div className="product-title featured-p-title">
                                            <span><a href="#!">lees fifth avenue</a></span>
                                            <span><a href="#!">$10 off</a></span>
                                        </div>
                                        <div className="product-title">
                                            <div className="product-raiting">
                                                <MDBIcon className="product-raiting-checked" far icon="star" />
                                                <MDBIcon className="product-raiting-checked" far icon="star" />
                                                <MDBIcon className="product-raiting-checked" far icon="star" />
                                                <MDBIcon className="product-raiting-checked" far icon="star" />
                                                <MDBIcon far icon="star" />
                                            </div>
                                            <span>8.3/10</span>
                                            <a href="#!"><i class="far fa-heart"></i></a>
                                        </div>

                                        <div className="product-review">
                                            <span><a href="#!">849 Reviews</a></span>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src={Featured1} />
                                    <MDBCardBody>
                                        <div className="product-title featured-p-title">
                                            <span><a href="#!">Giscombe's sports sale</a></span>
                                            <span><a href="#!">50% off new arrivals</a></span>
                                        </div>
                                        <div className="product-title">
                                            <div className="product-raiting">
                                                <MDBIcon className="product-raiting-checked" far icon="star" />
                                                <MDBIcon className="product-raiting-checked" far icon="star" />
                                                <MDBIcon className="product-raiting-checked" far icon="star" />
                                                <MDBIcon className="product-raiting-checked" far icon="star" />
                                                <MDBIcon far icon="star" />
                                            </div>
                                            <span>8.3/10</span>
                                            <a href="#!"><i class="far fa-heart"></i></a>
                                        </div>

                                        <div className="product-review">
                                            <span><a href="#!">849 Reviews</a></span>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="2">
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src={Featured2} />
                                    <MDBCardBody>
                                        <div className="product-title featured-p-title">
                                            <span><a href="#!">lees fifth avenue</a></span>
                                            <span><a href="#!">$10 off</a></span>
                                        </div>
                                        <div className="product-title">
                                            <div className="product-raiting">
                                                <MDBIcon className="product-raiting-checked" far icon="star" />
                                                <MDBIcon className="product-raiting-checked" far icon="star" />
                                                <MDBIcon className="product-raiting-checked" far icon="star" />
                                                <MDBIcon className="product-raiting-checked" far icon="star" />
                                                <MDBIcon far icon="star" />
                                            </div>
                                            <span>8.3/10</span>
                                            <a href="#!"><i class="far fa-heart"></i></a>
                                        </div>

                                        <div className="product-review">
                                            <span><a href="#!">849 Reviews</a></span>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                        </div>  
                        </div>  
                    </MDBContainer>
            </div>
        )
    }
}

export default FeaturedDeals;
