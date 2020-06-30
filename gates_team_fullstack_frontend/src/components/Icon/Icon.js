import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Icon.scss';
import { ReactComponent as CartIcon } from './cart.svg';
import { ReactComponent as FilterIcon } from './filter.svg';
import { ReactComponent as ClickIcon } from './click.svg';


class Icon extends Component {
  render() {
    return (
      <div className='icon'>
        <div className='circle' />
        <div className={`state ${this.props.state}`} />
        {
          this.props.type === 'click' && <ClickIcon className='svg' width="15px"/>
        }
        {
          this.props.type === 'filter' && <FilterIcon className='svg' width="16px"/>
        }
        {
          this.props.type === 'cart' && <CartIcon className='svg' width="20px"/>
        }
      </div>
    )
  }
}

Icon.propTypes = {
  type: PropTypes.string,
  state: PropTypes.string,
};

export default Icon;
