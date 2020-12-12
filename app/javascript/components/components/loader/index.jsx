import React, { Component } from 'react';
import {Spinner} from 'react-bootstrap';
export default class SpinnerLoader extends Component {
  render() {
    return (
      <div className="spinner-wrapper-styles">
        <Spinner className='spinner-styles' animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }
}