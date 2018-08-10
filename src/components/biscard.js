import React, { Component } from 'react';


class Biscard extends Component{
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return(
            <div className='container7' id='pinned_bizzcard'>
            <img id='thumbnailimg' src={this.state.image} />
            <div className='card-body textWrap'>
            <h5 id='bizzName'>{this.state.name}</h5>
            <p className='card-text' id='address1'>Address: {this.state.address}</p>
            <p className='card-text' id='phoneNumber1'>Phone Number:{this.state.phone}</p>
            <p className='card-text' id='rating1'>Ratings: {this.state.rating}</p>
            </div>
            </div>
        );
    }
};

export default Biscard;