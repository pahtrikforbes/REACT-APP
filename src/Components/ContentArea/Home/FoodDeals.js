import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBIcon } from "mdbreact";
import InfiniteScroll from "react-infinite-scroll-component";

import FoodDeals1 from '../../../statics/images/products/food-deals1.png';
import FoodDeals2 from '../../../statics/images/products/food-deals2.png';
import FoodDeals3 from '../../../statics/images/products/food-deals3.png';
import FoodDeals4 from '../../../statics/images/products/food-deals4.png';



class FoodDeals extends Component {
    state = {
        items: [
          { title: 'Chilitos Jamexican Food', title1: '- Taco Tuesdays', img: FoodDeals1 },
          { title: 'KFC - BIG BOX ', title1: '#HARDTOSHARE', img: FoodDeals2 },
          { title: 'SUBWAY ', title1: '$550 Lunch Combo', img: FoodDeals3 },
          { title: 'Tastee ', title1: '$250 `Jerk It` Combo', img: FoodDeals4 },
        ]
      };
    
      fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        const nextValues = [
            { title: 'Chilitos Jamexican Food', title1: '- Taco Tuesdays', img: FoodDeals1 },
            { title: 'KFC - BIG BOX ', title1: '#HARDTOSHARE', img: FoodDeals2 },
            { title: 'SUBWAY ', title1: '$550 Lunch Combo', img: FoodDeals3 },
            { title: 'Tastee ', title1: '$250 `Jerk It` Combo', img: FoodDeals4 },
        ];
        setTimeout(() => {
          this.setState({
            items: this.state.items.concat(nextValues)
          });
        }, 1500);
      };

    render() {
        return(            
            <div className="section">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="12">
                            <div className="t-heading">
                                <span>Food Deals</span>
                                <a href="#!">See all</a>
                            </div>
                        </MDBCol>
                    </MDBRow>    
                    <InfiniteScroll
                        dataLength={this.state.items.length}
                        next={this.fetchMoreData}
                        hasMore={true}
                        loader={<h4 className="scroll-text">Scroll to see more deals</h4>}
                        >
                        <MDBRow>
                            {this.state.items.map((data, index) => (
                                
                                <MDBCol size="12" md="3" className="clearfix d-md-block product-card" key={index}>
                                    <MDBCard>
                                        <MDBCardImage src={data.img} />
                                        <MDBCardBody>
                                            <div className="product-title">
                                                <a href="#!">
                                                    <span>{data.title}</span>
                                                    <span>{data.title1}</span>
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
                            ))}
                        </MDBRow>
                    </InfiniteScroll>
                </MDBContainer>
            </div>
        )
    }
}

export default FoodDeals;
