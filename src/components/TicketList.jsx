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
      <hr/>
      {Object.keys(props.ticketList).map(function(ticketId) {
        let ticket = props.ticketList[ticketId];
        return <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={ticketId}
          onTicketSelection={props.onTicketSelection}
          ticketId={ticketId}/>;
      })}
    </Main>
  );
}


TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func,
};


export default TicketList;

const Main = styled.div`

`;
