import PropTypes from 'prop-types';
import styled from 'styled-components';

function Ticket(props){
  return (
    <div>
      <HeaderThree>{props.location} - {props.names}</HeaderThree>
      <Nick><em>{props.issue}</em></Nick>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
};

export default Ticket;

const HeaderThree = styled.h3`
  background-color: green;
  &:hover ${HeaderThree} {
    background-color: blue;
  }
`;

const Nick = styled.h3`
  background-color: red;
  &:hover ${Nick} {
    background-color: teal;
  }
`;
