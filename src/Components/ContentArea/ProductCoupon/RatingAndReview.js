import React, { Component } from 'react';

import { MDBBtn, MDBIcon, MDBRow, MDBCol, MDBProgress } from 'mdbreact';

class RatingAndReview extends Component {

render() {

  return (
        <div className="p-write-review p-write-review-rating">
          <h4 className="write-rewiew-title">RATINGS AND REVIEWS</h4>
          <MDBRow>
            <MDBCol md="2" className="qr-info-center">
              <div className="rating-number">
                <span>8.3</span>
              </div>
            </MDBCol>
            <MDBCol md="6">
              <div className="rewiew-progressbar">
                <div className="progress-number-bar"><span className="progress-number">5</span><MDBProgress value={90} className="my-2"></MDBProgress></div>
                <div className="progress-number-bar"><span className="progress-number">4</span><MDBProgress value={50} className="my-2"></MDBProgress></div>
                <div className="progress-number-bar"><span className="progress-number">3</span><MDBProgress value={10} className="my-2"></MDBProgress></div>
                <div className="progress-number-bar"><span className="progress-number">2</span><MDBProgress value={20} className="my-2"></MDBProgress></div>
                <div className="progress-number-bar"><span className="progress-number">1</span><MDBProgress value={30} className="my-2"></MDBProgress></div>
              </div>
            </MDBCol>
            <MDBCol md="4">
              <div className="product-fav p-rating-review">
                <p>849 Reviews</p>
                <div className="product-raiting">
                    <MDBIcon className="" far icon="star" />
                    <MDBIcon className="" far icon="star" />
                    <MDBIcon className="" far icon="star" />
                    <MDBIcon className="" far icon="star" />
                    <MDBIcon className="" far icon="star" />
                </div>
              </div>
              <MDBBtn>WRITE A REVIEW</MDBBtn>
            </MDBCol>
          </MDBRow>
          <div className="user-review-sec">
            <div className="review-username-sec">
              <div className="reveiw-name">
                <span className="r-username-big">J</span><span><a href="#!">Jason Mckormick</a></span>
              </div>
              <div className="product-fav p-rating-review-user">
                <div className="product-raiting">
                    <MDBIcon className="product-raiting-checked" far icon="star" />
                    <MDBIcon className="product-raiting-checked" far icon="star" />
                    <MDBIcon className="product-raiting-checked" far icon="star" />
                    <MDBIcon className="" far icon="star" />
                    <MDBIcon className="" far icon="star" />
                </div>
              </div>
            </div>
            <div className="reveiw-user-text">
              <p>This is maaad new style, me love it. Plus great bargain ! #Braff </p>
            </div>
            <div className="reveiw-helpful">
                <span>Was this information helpful ?</span>
                <div className="yesno-review-btn">
                  <MDBBtn><MDBIcon far icon="thumbs-up" />Yes</MDBBtn>
                  <MDBBtn><MDBIcon far icon="thumbs-down" />No</MDBBtn>
                </div>
            </div>
          </div>
        </div>
    );
  }
}

export default RatingAndReview;

      