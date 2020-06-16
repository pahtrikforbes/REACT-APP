import React, { Component } from 'react';

import { MDBBtn, MDBIcon } from 'mdbreact';

class ProductDeatil extends Component {

render() {

  return (
        <div className="p-write-review">
          <h4 className="write-rewiew-title">REVIEWS</h4>
          <div className="product-fav">
            <div className="product-raiting">
                <MDBIcon className="product-raiting-checked" far icon="star" />
                <MDBIcon className="product-raiting-checked" far icon="star" />
                <MDBIcon className="product-raiting-checked" far icon="star" />
                <MDBIcon className="product-raiting-checked" far icon="star" />
                <MDBIcon className="product-raiting-checked" far icon="star" />
            </div>
          </div>
          <h4>CURRENTLY NO RWVIEW</h4>
          <p>Write a review beofre anyone else.</p>
          <MDBBtn>WRITE A REVIEW</MDBBtn>
        </div>
    );
  }
}

export default ProductDeatil;

      