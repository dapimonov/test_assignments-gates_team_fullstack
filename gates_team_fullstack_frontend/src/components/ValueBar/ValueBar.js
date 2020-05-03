import React, { Component } from 'react';
import PropTypes from "prop-types";
import './ValueBar.scss';


class ValueBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.valueChanger = this.valueChanger.bind(this);
  }

  componentDidMount() {
    this.props.values.forEach((value) => {
      this.setState(() => ({
        ...this.state,
        [value.name]: this.state[value.name] || 0,
      }));
      this.valueChanger(0, value.value, value.name);
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.values !== this.props.values) {
      this.props.values.forEach((value) => {
        this.valueChanger(this.state[value.name], value.value, value.name);
      });
    }
  }

  valueChanger = (start, finish, field) => {
    const step = start < finish ? 15 : -15;
    let timer = setInterval(() => {
      const diff = finish - this.state[field];
      if (this.state[field] !== finish) {
        this.setState({
          ...this.state,
          [field]: this.state[field] + (Math.abs(diff) >= Math.abs(step) ? step : diff),
        })
      }
      else {
        clearInterval(timer);
      }
    }, 0);
  };

  render() {
    return (
      <div className='value-bar'>
        <div className='bar-wrapper'>
          {
            this.props.values.map((value) => {
              const sum = Object.values(this.state).reduce((last, current) => last + current, 0);
              return <div className='bar' style={{backgroundColor: value.barColor, width: `${this.state[value.name]*100/sum}%`}}/>
            })
          }
        </div>
        {
          this.props.values.map((value) =>
            <div className='label'>
              <span className='square' style={{backgroundColor: value.barColor,}}/>
              {value.label}: {this.state[value.name] && this.state[value.name].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </div>
          )
        }
      </div>
    )
  }
}

ValueBar.propTypes = {
  values: PropTypes.array,
};

ValueBar.defaultProps = {
  values: [],
};

export default ValueBar;
