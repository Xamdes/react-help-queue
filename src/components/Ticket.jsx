import styled from 'styled-components';
import Moment from 'moment';

function Ticket(props){

  return (
    <div>
      <HeaderThree>{props.location} - {props.names}</HeaderThree>
      <h4>{displayTimeOpen(props.timeOpen)} ago</h4>
      <Nick><em>{props.issue}</em></Nick>
      <hr/>
    </div>
  );
}

function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  timeOpen: PropTypes.instanceOf(Moment).isRequired
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
