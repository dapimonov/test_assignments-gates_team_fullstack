import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.scss';
import Tabs from "../../components/Tabs/Tabs";
import ValueBar from "../../components/ValueBar/ValueBar";
import Indicator from "../../components/Indicator/Indicator";
import SearchesCard from "../../components/Cards/SearchesCard";
import ClicksCard from "../../components/Cards/ClicksCard";
import BookingsCard from "../../components/Cards/BookingsCard";
import Icon from "../../components/Icon/Icon";

const tabs = [
  {label: 'Last hour', value: 'lastHour',},
  {label: 'Today', value: 'today',},
  {label: 'Yesterday', value: 'yesterday',},
  {label: 'Last 3 days', value: 'lastThreeDays',},
];

const errorMetrics = [
  {label: 'Error 500', name: 'error500', value: 1256, barColor: '#FFCC00',},
  {label: 'Error 501', name: 'error501', value: 800, barColor: '#5856D5',},
  {label: 'Error 502', name: 'error502', value: 650, barColor: '#2196F3',},
  {label: 'Other', name: 'other', value: 330, barColor: '#A0B0B9',},
];

const metrics = [
  {label: 'Errors', value: 0.12, sublabel: 'Average', subvalue: null, threshold: 10,},
  {label: 'Zeroes', value: 5.12, sublabel: 'Average', subvalue: 0.11, threshold: 10,},
  {label: 'Timeouts', value: 0.12, sublabel: 'Average', subvalue: 0.11, threshold: 10,},
];

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h2>Main metrics</h2>
        <Tabs tabs={tabs} />
        <div className='indicators-wrapper'>
          {
            metrics.map((item) => <Indicator data={item}/>)
          }
        </div>
        <ValueBar values={errorMetrics}/>
        <div className='card-row'>
          <Icon state='good' type='cart'/>
          <SearchesCard />
        </div>
        <hr/>
        <div className='card-row'>
          <Icon state='bad' type='click'/>
          <ClicksCard />
        </div>
        <hr/>
        <div className='card-row'>
          <Icon state='good' type='cart'/>
          <BookingsCard />
        </div>
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
