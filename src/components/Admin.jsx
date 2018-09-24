
/*
* Copy to other files
* import Admin from './Admin';
* <Admin/>
*/
import styled from 'styled-components';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

// import { Link, Switch, Route } from 'react-router-dom';

function Admin(props){
  let optionalSelectedTicketContent = null;
  if (props.selectedTicket != null)
  {
    optionalSelectedTicketContent =  <TicketDetail selectedTicket={props.ticketList[props.selectedTicket]} />;
  }
  return (
    <Main>
      <h2>Admin</h2>
      {optionalSelectedTicketContent}
      <TicketList
        ticketList={props.ticketList}
        currentRouterPath={props.currentRouterPath}
        onTicketSelection={props.onTicketSelection}/>
    </Main>
  );
}


Admin.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onTicketSelection: PropTypes.func.isRequired,
  selectedTicket: PropTypes.string,
};


export default Admin;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
padding-top: 50px;
color: white;
`;
