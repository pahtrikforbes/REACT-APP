import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBIcon } from "mdbreact";

import RecentlyTitle from '../../../statics/images/recently-title.png';
import RecentlyViewed1 from '../../../statics/images/products/recently1.png';
import RecentlyViewed2 from '../../../statics/images/products/recently2.png';
import RecentlyViewed3 from '../../../statics/images/products/recently3.png';
import RecentlyViewed4 from '../../../statics/images/products/recently4.png';



class RecentlyViewed extends Component {
    render() {
        return(
            <div className="section">
                <MDBContainer>
                    <div className="t-heading">
                        <span><img src={RecentlyTitle} alt="Rate Hogs" className="img-fluid" /> Recently Viewed</span>
                        <a href="#!">See all</a>
                    </div>
                    <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={false} multiItem className="h-carousel-slider new-deals-height">
                        <MDBCarouselInner>
                            <MDBRow>
                                <MDBCarouselItem itemId="1">
                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={RecentlyViewed1} />
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
                                                </div>
                                                <div className="product-review">
                                                    <span><a href="#!">849 Reviews</a></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    
                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={RecentlyViewed2} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">10 Pair crazy socks</a></span>
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>
                                                <div className="product-price">
                                                    <span>$10,930.00</span>
                                                    <span className="old-price">$16,930.00</span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={RecentlyViewed3} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Water Lily Spa <br/> 25-50% OFF Special</a></span>
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>
                                                <div className="product-price">
                                                    <span>$10,930.00</span>
                                                    <span className="old-price">$16,930.00</span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={RecentlyViewed4} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Air Jordan</a></span>
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>
                                                <div className="product-price">
                                                    <span>$930.00</span>
                                                    <span className="old-price">$1,230.00</span>
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
                                            <MDBCardImage src={RecentlyViewed1} />
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
                                                </div>
                                                <div className="product-review">
                                                    <span><a href="#!">849 Reviews</a></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    
                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={RecentlyViewed2} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">10 Pair crazy socks</a></span>
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>
                                                <div className="product-price">
                                                    <span>$10,930.00</span>
                                                    <span className="old-price">$16,930.00</span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={RecentlyViewed3} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Water Lily Spa <br/> 25-50% OFF Special</a></span>
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>
                                                <div className="product-price">
                                                    <span>$10,930.00</span>
                                                    <span className="old-price">$16,930.00</span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={RecentlyViewed4} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Air Jordan</a></span>
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>
                                                <div className="product-price">
                                                    <span>$930.00</span>
                                                    <span className="old-price">$1,230.00</span>
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
                </MDBContainer>
            </div>
        )
    }
}

export default RecentlyViewed;
