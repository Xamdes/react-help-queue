
/*
* Copy to other files
* import Admin from './Admin';
* <Admin/>
*/
import styled from 'styled-components';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import { Link, Switch, Route } from 'react-router-dom';

function Admin(props){
  let optionalSelectedTicketContent = null;
  if (props.selectedTicket.length>0)
  {
    optionalSelectedTicketContent =  <TicketDetail selectedTicket={props.ticketList[props.selectedTicket]} />;
  }
  return (
    <Main>
      <h2>Admin</h2>
      {optionalSelectedTicketContent}
      <TicketList
        ticketList={props.ticketList}
        currentRouterPath={props.currentRouterPath}/>
    </Main>
  );
}


Admin.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  selectedTicket: PropTypes.string
};

const mapStateToProps = state => {
  return {
    selectedTicket: state.selectedTicket,
    ticketList: state.masterTicketList
  };
};

export default connect(mapStateToProps)(Admin);

const Main = styled.div`
background-color: black;
font-family: sans-serif;
padding-top: 50px;
color: white;
`;
