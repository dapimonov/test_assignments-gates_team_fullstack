import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.scss';
import Tabs from "../../components/Tabs/Tabs";

const tabs = [
  {label: 'Last hour', value: 'lastHour',},
  {label: 'Today', value: 'today',},
  {label: 'Yesterday', value: 'yesterday',},
  {label: 'Last 3 days', value: 'lastThreeDays',},
];

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Tabs
          tabs={tabs}
        />
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
