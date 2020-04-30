import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Tabs.scss';


class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.initial,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick = (event) => {
    this.setState({
      ...this.state,
      selected: event.target.id,
    });
    if(typeof this.props.onChange === "function"){
      this.props.onChange(event.target.id);
    }
  };

  render() {
    return (
      <div className='tabs'>
        {
          this.props.tabs.map((tab) => {
            return (
              <button
                key={tab.value}
                id={tab.value}
                className='tab-button'
                isactive={String(this.state.selected === tab.value)}
                onClick={this.onClick}
              >
                {tab.label}
              </button>
            )
          })
        }
      </div>
    )
  }
}

Tabs.propTypes = {
  tabs: PropTypes.array,
  onChange: PropTypes.func,
};

Tabs.defaultProps = {
  tabs: [],
};

export default Tabs;
