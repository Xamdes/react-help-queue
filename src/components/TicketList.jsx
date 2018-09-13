/*
* Copy to other files
* import TicketList from './TicketList';
* <TicketList/>
*/
import styled from 'styled-components';
import Ticket from './Ticket';
import PropTypes from 'prop-types';
// import { Link, Switch, Route } from 'react-router-dom';

function TicketList(){
  return (
    <Main>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </Main>
  );
}

/*
NewTicketForm.propTypes = {
  [variable-name]: PropTypes.string,
};
*/

export default TicketList;

const Main = styled.div`

`;
