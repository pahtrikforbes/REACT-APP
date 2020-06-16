import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBIcon } from "mdbreact";

import FaqSlide1 from '../../../statics/images/faqslider/general-info.png';
import FaqSlide2 from '../../../statics/images/faqslider/product-scanner.png';
import FaqSlide3 from '../../../statics/images/faqslider/money-back.png';
import FaqSlide4 from '../../../statics/images/faqslider/shopping-store.png';



class FaqSlider extends Component {
    render() {
        return(
            <div className="section p-bg-gray faq-slider-sec">
                <MDBContainer>
                    <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={false} multiItem className="h-carousel-slider p-faq-slider">
                        <MDBCarouselInner>
                            <MDBRow>
                                <MDBCarouselItem itemId="1">
                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={FaqSlide1} />
                                            <MDBCardBody>
                                                <div className="faq-slider-title">
                                                  <a href="#!">General Information</a>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    
                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={FaqSlide2} />
                                            <MDBCardBody>
                                                <div className="faq-slider-title">
                                                  <a href="#!">Product Enquiry</a>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={FaqSlide3} />
                                            <MDBCardBody>
                                                <div className="faq-slider-title">
                                                  <a href="#!">Purchases</a>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={FaqSlide4} />
                                            <MDBCardBody>
                                                <div className="faq-slider-title">
                                                  <a href="#!">Advertisment</a>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>                                    
                                </MDBCarouselItem>

                                <MDBCarouselItem itemId="2">
                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={FaqSlide1} />
                                            <MDBCardBody>
                                                <div className="faq-slider-title">
                                                  <a href="#!">General Information</a>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    
                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={FaqSlide2} />
                                            <MDBCardBody>
                                                <div className="faq-slider-title">
                                                  <a href="#!">Product Enquiry</a>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={FaqSlide3} />
                                            <MDBCardBody>
                                                <div className="faq-slider-title">
                                                  <a href="#!">Purchases</a>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="3" className="clearfix d-md-block">
                                        <MDBCard className="mb-2">
                                            <MDBCardImage src={FaqSlide4} />
                                            <MDBCardBody>
                                                <div className="faq-slider-title">
                                                  <a href="#!">Advertisment</a>
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

export default FaqSlider;
