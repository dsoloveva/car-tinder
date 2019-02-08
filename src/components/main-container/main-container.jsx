import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ChoiceContainer }  from '../choice-container';
import ResultContainer  from '../result-container/result-container';
import { Spinner, Button, Jumbotron } from 'reactstrap';

import { start } from '../../actions/status';
import { Fade } from 'reactstrap';

import './main-container.css';

const mapStateToProps = state => ({
  status: state.status
})

const mapDispatchToProps = dispatch => ({
  start: () => dispatch(start()),
});

class MainContainerUI extends Component {
  renderInitialBanner = () => {
    return (
      <div className="start-container">
        <Jumbotron>
          <h1>Tell us what you like to find your perfect car</h1>
          <p>
            <Button color="danger"  size="lg" onClick={this.props.start} className="m-3 pr-5 pl-5">
              Start
            </Button>
          </p>
        </Jumbotron>
      </div>
    )
  }

  render () {
    return (<Fragment>
      {this.props.status === 'initial'
        ? this.renderInitialBanner()
        : this.props.status === 'in_progress'
        ? <ChoiceContainer></ChoiceContainer>
        : this.props.status === 'fetching'
          ? <img className="gif-loader mt-5" src="images/spinner.gif"/>
          // <Spinner className="mt-5" color="primary" />
          : <ResultContainer></ResultContainer>
      }
    </Fragment>);
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainerUI);