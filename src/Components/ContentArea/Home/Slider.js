import React, { Component } from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow, MDBCol } from
"mdbreact";

import BannerImage from '../../../statics/images/banner-image.jpg'
import BannerBg from '../../../statics/images/banner-bg1.jpg'
import BannerBg1 from '../../../statics/images/banner-bg2.jpg'

class Slides extends Component {
    render() {
        return(
            <MDBContainer fluid className="p-0">
                <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={false} className="z-depth-1 crousel-mob">
                    <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                        <img src={BannerBg} alt="Rate Hogs" className="img-fluid d-block w-100" />
                        <MDBMask className="red-mask" overlay="red" />
                        </MDBView>
                        <MDBCarouselCaption>
                        <div className="h-banner-caption">
                                <MDBRow>
                                    <MDBCol md="6" xs="6">
                                            <div className="h-banner-text">
                                                <h1>sale</h1>
                                                <span>UP TO 50% OFF</span>
                                                <a href="#!">Shop Now</a>
                                            </div>
                                    </MDBCol>
                                    <MDBCol md="6" xs="6">
                                    <img src={BannerImage} alt="Rate Hogs" className="img-fluid" />
                                    </MDBCol>
                                </MDBRow>
                        </div>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                        <img src={BannerBg1} alt="Rate Hogs" className="img-fluid d-block w-100" />
                        <MDBMask className="red-mask" overlay="red" />
                        </MDBView>
                        <MDBCarouselCaption>
                        <div className="h-banner-caption">
                                <MDBRow>
                                    <MDBCol md="6" xs="6">
                                            <div className="h-banner-text">
                                                <h1>sale</h1>
                                                <span>UP TO 50% OFF</span>
                                                <a href="#!">Shop Now</a>
                                            </div>
                                    </MDBCol>
                                    <MDBCol md="6" xs="6">
                                    <img src={BannerImage} alt="Rate Hogs" className="img-fluid" />
                                    </MDBCol>
                                </MDBRow>
                        </div>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                        <img src={BannerBg} alt="Rate Hogs" className="img-fluid d-block w-100" />
                        <MDBMask className="red-mask" overlay="red" />
                        </MDBView>
                        <MDBCarouselCaption>
                        <div className="h-banner-caption">
                                <MDBRow>
                                    <MDBCol md="6" xs="6">
                                            <div className="h-banner-text">
                                                <h1>sale</h1>
                                                <span>UP TO 50% OFF</span>
                                                <a href="#!">Shop Now</a>
                                            </div>
                                    </MDBCol>
                                    <MDBCol md="6" xs="6">
                                    <img src={BannerImage} alt="Rate Hogs" className="img-fluid" />
                                    </MDBCol>
                                </MDBRow>
                        </div>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        )
    }
}

export default Slides;
