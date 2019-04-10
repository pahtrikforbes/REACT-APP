import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBIcon } from "mdbreact";

import Wellness1 from '../../../statics/images/products/wellness1.jpg';
import Wellness2 from '../../../statics/images/products/wellness2.jpg';



class WellnessSpa extends Component {
    render() {
        return(
            <div className="section">
                <MDBContainer>
                    <div className="t-heading">
                        <span>Wellness & Spa</span>
                        <a href="#!">See all</a>
                    </div>
                    <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={false} multiItem className="h-carousel-slider">
                        <MDBCarouselInner>
                            <MDBRow>
                                <MDBCarouselItem itemId="1">
                                    <MDBCol md="2" className="clearfix d-md-block product-card">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Wellness2} />
                                            <MDBCardBody>
                                                <div className="product-title">
                                                    <a href="#!">
                                                        <span>Chilitos Jamexican</span>
                                                        <span>- Taco Tuesdays</span>
                                                    </a>
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
                                    
                                    <MDBCol md="2" className="clearfix d-md-block product-card">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Wellness2} />
                                            <MDBCardBody>
                                                <div className="product-title">
                                                    <a href="#!">
                                                        <span>Chilitos Jamexican</span>
                                                        <span>- Taco Tuesdays</span>
                                                    </a>
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

                                    <MDBCol md="2" className="clearfix d-md-block product-card">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Wellness2} />
                                            <MDBCardBody>
                                                <div className="product-title">
                                                    <a href="#!">
                                                        <span>Chilitos Jamexican</span>
                                                        <span>- Taco Tuesdays</span>
                                                    </a>
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

                                    <MDBCol md="3" className="clearfix d-md-block product-card">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Wellness1} className="img-fluid" />
                                            <MDBCardBody>
                                                <div className="product-title">
                                                    <a href="#!">
                                                        <span>Chilitos Jamexican</span>
                                                        <span>- Taco Tuesdays</span>
                                                    </a>
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

                                    <MDBCol md="3" className="clearfix d-md-block product-card">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Wellness1} className="img-fluid" />
                                            <MDBCardBody>
                                                <div className="product-title">
                                                    <a href="#!">
                                                        <span>Chilitos Jamexican</span>
                                                        <span>- Taco Tuesdays</span>
                                                    </a>
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
                                </MDBCarouselItem>

                                <MDBCarouselItem itemId="2">
                                    <MDBCol md="2" className="clearfix d-md-block product-card">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Wellness2} />
                                            <MDBCardBody>
                                                <div className="product-title">
                                                    <a href="#!">
                                                        <span>Chilitos Jamexican</span>
                                                        <span>- Taco Tuesdays</span>
                                                    </a>
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
                                    
                                    <MDBCol md="2" className="clearfix d-md-block product-card">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Wellness2} />
                                            <MDBCardBody>
                                                <div className="product-title">
                                                    <a href="#!">
                                                        <span>Chilitos Jamexican</span>
                                                        <span>- Taco Tuesdays</span>
                                                    </a>
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

                                    <MDBCol md="2" className="clearfix d-md-block product-card">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Wellness2} />
                                            <MDBCardBody>
                                                <div className="product-title">
                                                    <a href="#!">
                                                        <span>Chilitos Jamexican</span>
                                                        <span>- Taco Tuesdays</span>
                                                    </a>
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

                                    <MDBCol md="3" className="clearfix d-md-block product-card">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Wellness1} className="img-fluid" />
                                            <MDBCardBody>
                                                <div className="product-title">
                                                    <a href="#!">
                                                        <span>Chilitos Jamexican</span>
                                                        <span>- Taco Tuesdays</span>
                                                    </a>
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

                                    <MDBCol md="3" className="clearfix d-md-block product-card">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={Wellness1} className="img-fluid" />
                                            <MDBCardBody>
                                                <div className="product-title">
                                                    <a href="#!">
                                                        <span>Chilitos Jamexican</span>
                                                        <span>- Taco Tuesdays</span>
                                                    </a>
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
                                </MDBCarouselItem>
                            </MDBRow>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBContainer>
            </div>
        )
    }
}

export default WellnessSpa;
