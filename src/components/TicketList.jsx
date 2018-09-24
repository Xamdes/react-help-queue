/*
* Copy to other files
* import TicketList from './TicketList';
* <TicketList/>
*/
import styled from 'styled-components';
import Ticket from './Ticket';
// import { Link, Switch, Route } from 'react-router-dom';

function TicketList(props){
  return (
    <Main>
      {props.ticketList.map((ticket) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={ticket.id}
          onTicketSelection={props.onTicketSelection}/>
      )}
    </Main>
  );
}


TicketList.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func,
};


export default TicketList;

const Main = styled.div`

`;
