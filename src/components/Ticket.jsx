import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <p>{props.a - props.b}</p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  a: PropTypes.string,
  b: PropTypes.string
};

export default Ticket;
