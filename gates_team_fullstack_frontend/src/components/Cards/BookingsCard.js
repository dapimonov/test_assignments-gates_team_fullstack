import React, { Component } from 'react';
import './Cards.scss';

class BookingsCard extends Component {
  render() {
    return (
      <div className='card'>
        <div className='left-column'>
          <p className='card-line'>
            <span className={'label'}>Bookings</span>
            <div className={'led none'}></div>
          </p>
          <p className='card-line'>
            <span className='number'>{(24).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
            <span className='text'>Yesterday</span>
          </p>
          <p className='card-line light'>
            <span className='number'>{(24).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
            <span className='text'>Last friday</span>
          </p>
        </div>
        <div className='right-column'>
          <p className='card-line'>
            <span className='label'>STR: 6,2%</span>
          </p>
          <p className='card-line'>
            <span className={'label'}>Avg. check: {(8903).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
          </p>
          <p className='card-line light'>
            <span className='info'>Conversion from clicks to bookings on all devices.</span>
          </p>
          <p className='card-line'>
            <span className='help'>Help: <button href='#'>STR</button>, <button href='#'>Bookings</button>, <button href='#'>Avg. check</button></span>
          </p>
        </div>
      </div>
    )
  }
}

export default BookingsCard;
