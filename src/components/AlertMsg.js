import React from 'react';
import propTypes from 'prop-types';
import {
  Alert,
  Button,
} from 'react-bootstrap';

const AlertMsg = props => {
  const {
    content, type, show, handleDismiss,
  } = props;
  if (show) {
    return (
      <Alert variant={type}>
        <p>
          {content}
        </p>
        <p>
          <Button onClick={handleDismiss}>Ok</Button>
        </p>
      </Alert>
    );
  }
  return (
    null
  );
};

AlertMsg.propTypes = {
  content: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  show: propTypes.bool.isRequired,
  handleDismiss: propTypes.func.isRequired,
};

export default AlertMsg;
