import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import '../../index.css';

const ErrorNotification = props => {
  return(
    <div className="container">
      <Alert variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <hr/>
      <p>{props.error}</p>
      </Alert>
    </div>
  );
};

ErrorNotification.propTypes = {
	error: PropTypes.string
};
export default ErrorNotification;

