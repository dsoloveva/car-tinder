import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ChoiceContainer }  from '../choice-container';
import ResultContainer  from '../result-container/result-container';
import { Fade } from 'reactstrap';

import './main-container.css';

const mapStateToProps = state => ({
  status: state.status
})

class MainContainerUI extends Component {
  render () {
    return (<Fragment>
      {this.props.status === 'in_progress'
        ? <ChoiceContainer></ChoiceContainer>
        : this.props.status === 'fetching'
          ? <img className="gif-loader mt-5" src="images/spinner.gif"/>
          // <Spinner className="mt-5" color="primary" />
          : <ResultContainer></ResultContainer>
      }
    </Fragment>);
  };
};

export default connect(mapStateToProps)(MainContainerUI);