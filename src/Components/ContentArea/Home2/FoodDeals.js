import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBIcon } from "mdbreact";

import FoodDeals1 from '../../../statics/images/products/food-deals1.png';
import FoodDeals2 from '../../../statics/images/products/food-deals2.png';
import FoodDeals3 from '../../../statics/images/products/food-deals3.png';
import FoodDeals4 from '../../../statics/images/products/food-deals4.png';

class RecentlyViewed extends Component {
    render() {
        return(
            <div className="section">
                <MDBContainer>
                    <div className="t-heading">
                        <span>Food Deals</span>
                        <a href="#!">See all</a>
                    </div>
                    <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={false} multiItem className="h-carousel-slider lg-carousel-slider">
                        <MDBCarouselInner>
                            <MDBRow>
                                <MDBCarouselItem itemId="1">
                                    <MDBCol size="12" md="3" className="clearfix d-md-block product-card">
                                        <MDBCard>
                                            <MDBCardImage src={FoodDeals1} />
                                            <MDBCardBody>
                                                <div className="product-title">
                                                    <a href="#!">
                                                        <span>Chilitos Jamexican Food</span>
                                                        <span>- Taco Tuesdays</span>
                                                    </a>
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
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>

                                                <div className="product-review">
                                                    <span><a href="#!">849 Reviews</a></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    
                                    <MDBCol size="12" md="3" className="clearfix d-md-block product-card">
                                        <MDBCard>
                                            <MDBCardImage src={FoodDeals2} />
                                            <MDBCardBody>
                                                <div className="product-title">
                                                    <a href="#!">
                                                        <span>KFC - BIG BOX</span>
                                                        <span>#HARDTOSHARE</span>
                                                    </a>
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
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>

                                                <div className="product-review">
                                                    <span><a href="#!">849 Reviews</a></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol size="12" md="3" className="clearfix d-md-block product-card">
                                        <MDBCard>
                                            <MDBCardImage src={FoodDeals3} />
                                            <MDBCardBody>
                                                <div className="product-title">
                                                    <a href="#!">
                                                        <span>SUBWAY</span>
                                                        <span>$550 Lunch Combo</span>
                                                    </a>
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
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>

                                                <div className="product-review">
                                                    <span><a href="#!">849 Reviews</a></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol size="12" md="3" className="clearfix d-md-block product-card">
                                        <MDBCard>
                                            <MDBCardImage src={FoodDeals4} />
                                            <MDBCardBody>
                                                <div className="product-title">
                                                    <a href="#!">
                                                        <span>Tastee</span>
                                                        <span>$250 `Jerk It` Combo</span>
                                                    </a>
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
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>

                                                <div className="product-review">
                                                    <span><a href="#!">849 Reviews</a></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>                             
                                </MDBCarouselItem>

                                <MDBCarouselItem itemId="2">
                                    <MDBCol size="12" md="3" className="clearfix d-md-block product-card">
                                        <MDBCard>
                                            <MDBCardImage src={FoodDeals1} />
                                            <MDBCardBody>
                                                <div className="product-title">
                                                    <a href="#!">
                                                        <span>Chilitos Jamexican Food</span>
                                                        <span>- Taco Tuesdays</span>
                                                    </a>
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
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>

                                                <div className="product-review">
                                                    <span><a href="#!">849 Reviews</a></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    
                                    <MDBCol size="12" md="3" className="clearfix d-md-block product-card">
                                        <MDBCard>
                                            <MDBCardImage src={FoodDeals2} />
                                            <MDBCardBody>
                                                <div className="product-title">
                                                    <a href="#!">
                                                        <span>KFC - BIG BOX</span>
                                                        <span>#HARDTOSHARE</span>
                                                    </a>
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
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>

                                                <div className="product-review">
                                                    <span><a href="#!">849 Reviews</a></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol size="12" md="3" className="clearfix d-md-block product-card">
                                        <MDBCard>
                                            <MDBCardImage src={FoodDeals3} />
                                            <MDBCardBody>
                                                <div className="product-title">
                                                    <a href="#!">
                                                        <span>SUBWAY</span>
                                                        <span>$550 Lunch Combo</span>
                                                    </a>
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
                                                    <a href="#!"><i class="far fa-heart"></i></a>
                                                </div>

                                                <div className="product-review">
                                                    <span><a href="#!">849 Reviews</a></span>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol size="12" md="3" className="clearfix d-md-block product-card">
                                        <MDBCard>
                                            <MDBCardImage src={FoodDeals4} />
                                            <MDBCardBody>
                                                <div className="product-title">
                                                    <a href="#!">
                                                        <span>Tastee</span>
                                                        <span>$250 `Jerk It` Combo</span>
                                                    </a>
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
                                                    <a href="#!"><i class="far fa-heart"></i></a>
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
