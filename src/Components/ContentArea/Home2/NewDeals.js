import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBIcon } from "mdbreact";

import DealTitle from '../../../statics/images/deal-title.png';
import NewDeal1 from '../../../statics/images/products/new-deal1.png';
import NewDeal2 from '../../../statics/images/products/new-deal2.png';
import NewDeal3 from '../../../statics/images/products/new-deal3.png';
import NewDeal4 from '../../../statics/images/products/new-deal4.png';



class NewDeals extends Component {
    render() {
        return(
            <div className="section">
                <MDBContainer>
                    <div className="t-heading">
                        <span><img src={DealTitle} alt="Rate Hogs" className="img-fluid" /> New Deals</span>
                        <a href="#!">See all</a>
                    </div>
                    <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={false} multiItem className="h-carousel-slider new-deals-height">
                        <MDBCarouselInner>
                            <MDBRow>
                                <MDBCarouselItem itemId="1">
                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={NewDeal1} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Casio Watch</a></span>
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
                                            <MDBCardImage src={NewDeal2} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Moto G7 plus</a></span>
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>
                                                <div className="product-price">
                                                    <span>$28,930.00</span>
                                                    <span className="old-price">$31,930.00</span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={NewDeal3} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">50 Pairs 5 Styles Lashes <br/> Handmade</a></span>
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
                                            <MDBCardImage src={NewDeal4} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Alladay lash glue</a></span>
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
                                            <MDBCardImage src={NewDeal1} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Casio Watch</a></span>
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
                                            <MDBCardImage src={NewDeal2} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Moto G7 plus</a></span>
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>
                                                <div className="product-price">
                                                    <span>$28,930.00</span>
                                                    <span className="old-price">$31,930.00</span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={NewDeal3} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">50 Pairs 5 Styles Lashes <br/> Handmade</a></span>
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
                                            <MDBCardImage src={NewDeal4} />
                                            <MDBCardBody>
                                                <div className="product-title shoes-title">
                                                    <span><a href="#!">Alladay lash glue</a></span>
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

export default NewDeals;
