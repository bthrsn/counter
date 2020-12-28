import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rfr}) => {
  return (
    <div>
    <div className="counter-wrap">
      <div className="counter">{counter}</div>
    </div>
    <div className="button-block">
      <button 
        className="button button-increment"
        onClick={inc}
      >
        <img src="assets/Plus.png" alt="plus"/>
      </button>
      <button 
        className="button button-decrement"
        onClick={dec}
      >
        <img src="assets/Minus.png" alt="minus"/>
      </button>
      <button 
        className="button button-refresh"
        onClick={rfr}
      >
        <img src="assets/Refresh-up.png" alt="refresh-up"/>
        <img src="assets/Refrresh-bottom.png" alt="refresh-bottom"/>
      </button>  
    </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps, actions)(Counter);