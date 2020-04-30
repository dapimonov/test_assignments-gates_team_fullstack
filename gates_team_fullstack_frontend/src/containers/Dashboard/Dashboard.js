import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.scss';


class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        ...
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
