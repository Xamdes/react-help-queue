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
          timeOpen={ticket.timeOpen}
          key={ticket.id}/>
      )}
    </Main>
  );
}


TicketList.propTypes = {
  ticketList: PropTypes.array,
};


export default TicketList;

const Main = styled.div`

`;
