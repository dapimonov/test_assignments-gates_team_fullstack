import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.scss';
import Tabs from "../../components/Tabs/Tabs";
import ValueBar from "../../components/ValueBar/ValueBar";

const tabs = [
  {label: 'Last hour', value: 'lastHour',},
  {label: 'Today', value: 'today',},
  {label: 'Yesterday', value: 'yesterday',},
  {label: 'Last 3 days', value: 'lastThreeDays',},
];

const metrics = [
  {label: 'Error 500', name: 'error500', value: 1256, barColor: '#FFCC00',},
  {label: 'Error 501', name: 'error501', value: 800, barColor: '#5856D5',},
  {label: 'Error 502', name: 'error502', value: 650, barColor: '#2196F3',},
  {label: 'Other', name: 'other', value: 330, barColor: '#A0B0B9',},
];

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Tabs tabs={tabs} />
        <ValueBar values={metrics}/>
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
