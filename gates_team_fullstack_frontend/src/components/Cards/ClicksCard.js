import React, { Component } from 'react';
import './Cards.scss';

class ClicksCard extends Component {
  render() {
    return (
      <div className='card'>
        <div className='left-column'>
          <p className='card-line'>
            <span className={'label bad'}>Clicks</span>
            <div className={'led bad'}>-13%</div>
          </p>
          <p className='card-line'>
            <span className='number'>{(243).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
            <span className='text'>Yesterday</span>
          </p>
          <p className='card-line light'>
            <span className='number'>{(280).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
            <span className='text'>Last friday</span>
          </p>
        </div>
        <div className='right-column'>
          <p className='card-line'>
            <span className={'label bad'}>CTR: 0,04%</span>
          </p>
          <p className='card-line light'>
            <span className='info'>Conversion from searches  to clicks on all devices.</span>
          </p>
          <p className='card-line'>
            <span className='help'>Help: <button href='#'>CTR</button>, <button href='#'>Clicks</button></span>
          </p>
        </div>
      </div>
    )
  }
}

export default ClicksCard;
