import React, { Component } from 'react';
import './Cards.scss';

class SearchesCard extends Component {
  render() {
    return (
      <div className='card'>
        <div className='left-column'>
          <p className='card-line'>
            <span className={'label'}>Searches</span>
            <div className={'led'}>+5%</div>
          </p>
          <p className='card-line'>
            <span className='number'>{(29380).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
            <span className='text'>Yesterday</span>
          </p>
          <p className='card-line light'>
            <span className='number'>{(27985).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
            <span className='text'>Last friday</span>
          </p>
        </div>
        <div className='right-column'>
          <p className='card-line'>
            <span className='label'>Mobile traffic: 100%</span>
          </p>
          <p className='card-line'>
            <span className={'label'}>Web traffic: 100%</span>
          </p>
          <p className='card-line light'>
            <span className='info'>You get 100% traffic on mobile and desktop devices.</span>
          </p>
          <p className='card-line'>
            <span className='help'>Help: <button href='#'>Searches</button>, <button href='#'>Pessimisation</button></span>
          </p>
        </div>
      </div>
    )
  }
}

export default SearchesCard;
