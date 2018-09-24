import styled from 'styled-components';

function Ticket(props)
{
  const ticketInformation =
    <div>
      <HeaderThree>{props.location} - {props.names}</HeaderThree>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/admin')
  {
    return (
      <div onClick={() => {props.onTicketSelection(props.ticketId);}}>
        {ticketInformation}
      </div>
    );
  }
  else
  {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  ticketId: PropTypes.string.isRequired,
};

export default Ticket;

const HeaderThree = styled.h3`
background-color: green;
&:hover ${HeaderThree} {
  background-color: blue;
}
`;
