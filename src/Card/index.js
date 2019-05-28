import React, { Component } from 'react';
import Showposter from '../Assets/show-poster.jpg';
import Chevron from '../Assets/bf244f65-c514-428a-b4b2-ac2746281e91_chevron.svg';
import Info from '../Assets/bf244f65-c514-428a-b4b2-ac2746281e91_info.svg';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.limit = 3;
    this.state = {
      viewMore: true,
      limit: this.limit
    };
  }

  // gets the listings from props and renders
  renderListings = () => {
    const { limit } = this.state;
    const { timeListing } = this.props.listings;
    const list = [];
    for (let i = 0; i < limit; i++) {
      list.push(timeListing[i]);
    }
    return list.map((item, index) => {
      return (
        <div className='event-container' key={index}>
          <div className='date-container'>
            <span>{item.date.day}</span>
            <span>{item.date.date}</span>
          </div>
          <div className='time-container'>
            {item.times.map((time, index) => (
              <div
                onClick={e => console.log()}
                role='button'
                className={`timeslot soldout-${time.soldOut} `}
                key={index}
              >
                {time.soldOut === 'true' && <span>Sold Out</span>}
                <span className={`timeslot-time timeslot-time-${index}`}>
                  {time.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  // shows the rest of the listings
  viewMoreHandler = () => {
    this.setState({
      limit: this.props.listings.timeListing.length,
      viewMore: false
    });
  };

  // resets listings back to 3
  viewLessHandler = () => {
    this.setState({
      limit: this.limit,
      viewMore: true
    });
  };

  render() {
    const { title, priceMax, priceMin, timeListing } = this.props.listings;
    const { limit, viewMore } = this.state;
    return (
      <div className={`card ${!viewMore ? 'expanded' : 'collapsed'}`}>
        <div className='card-header-container'>
          <img
            className='showPoster'
            src={Showposter}
            alt='Show-Image'
            width='60'
            height='100'
          />
          <div className='card-title-container'>
            <h4 className='card-title-text'>
              {title} <span>Tickets</span>
            </h4>
            <span className='card-event-price'>
              &#36;{priceMin}.00 - &#36;
              {priceMax}.00
            </span>
            <div className='learn-more'>
              <img src={Info} alt='More-Info' />{' '}
              <span className='learn-more-text'>Learn More</span>
            </div>
          </div>
        </div>

        {this.renderListings()}
        {viewMore ? (
          <div className='view-more' onClick={() => this.viewMoreHandler()}>
            <span className='view-more-text'>
              More Performances({timeListing.length - limit})
            </span>
            <img className='view-more-chevron' src={Chevron} alt='view-more' />
          </div>
        ) : (
          <div className='view-cal' onClick={() => this.viewLessHandler()}>
            <span className='view-cal-text'>View Calendar</span>
            <img
              className={`${
                !viewMore ? 'sideways-chevron' : 'view-more-chevron'
              }`}
              src={Chevron}
              alt='view-more'
            />
          </div>
        )}
      </div>
    );
  }
}

export default Card;
