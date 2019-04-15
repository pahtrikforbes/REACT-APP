import React, { Component } from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow, MDBCol } from
"mdbreact";

import BannerImage from '../../../statics/images/banner-image.jpg'
import BannerBg3 from '../../../statics/images/banner-bg3.jpg'
import BannerBg1 from '../../../statics/images/banner-bg2.jpg'

class SliderLogin extends Component {
    render() {
        return(
            <MDBContainer fluid className="p-0">
                <MDBCarousel activeItem={1} length={2} showControls={true} showIndicators={false} className="z-depth-1 lg-crousel">
                    <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                        <img src={BannerBg3} alt="Rate Hogs" className="img-fluid d-block w-100" />
                        </MDBView>
                        <MDBCarouselCaption>
                        <div className="lg-banner-caption">
                            <div className="lg-banner-text">
                                <h1>0% APR</h1>
                                <span>for 60 Months*</span>
                                <a href="#!">Shop Now</a>
                            </div>
                        </div>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img src={BannerBg3} alt="Rate Hogs" className="img-fluid d-block w-100" />
                        </MDBView>
                        <MDBCarouselCaption>
                        <div className="lg-banner-caption">
                            <div className="lg-banner-text">
                                <h1>0% APR</h1>
                                <span>for 60 Months*</span>
                                <a href="#!">Shop Now</a>
                            </div>
                        </div>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        )
    }
}

export default SliderLogin;
