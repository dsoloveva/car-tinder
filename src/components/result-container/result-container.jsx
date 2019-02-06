import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import MakeModelCard from '../make-model-card/make-model-card';

import './result-container.css';

const mapStateToProps = state => ({
  results: state.results
})

class ResultContainerUI extends Component {
  render () {
    return (
      <div>
        <div className="reload-link">
          <h3>People with the same preferences choose next cars</h3>
          <a className="d-block h5 mb-0" href="" onClick={() => window.location.reload()}>
            Try again
          </a>
        </div>
        <div className="d-flex flex-wrap justify-content-around">
          {this.props.results.map(item => 
            <MakeModelCard key={`${item.make}-${item.model}`} makeModel={item}>
            </MakeModelCard>)
          }
        </div>
      </div>
    );
  };
};

export default connect(mapStateToProps)(ResultContainerUI);