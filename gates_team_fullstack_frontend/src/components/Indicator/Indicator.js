import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Indicator.scss';


class Indicator extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className='indicator'>
        <div className={data.value < data.threshold ? 'led good' : 'led bad'} />
        <div className='label-wrapper'>
          <p className='label'>{data.label}: {data.value ? data.value.toString().replace('.', ',')+'%' : '-'}</p>
          <p className='sublabel'>{data.sublabel}: {data.subvalue ? data.subvalue.toString().replace('.', ',')+'%' : '-'}</p>
        </div>
      </div>
    )
  }
}

Indicator.propTypes = {
  data: PropTypes.object,
};

Indicator.defaultProps = {
  data: {},
};

export default Indicator;
