/*
* Copy to other files
* import Admin from './Admin';
* <Admin/>
*/
import styled from 'styled-components';
import TicketList from './TicketList';
// import { Link, Switch, Route } from 'react-router-dom';

function Admin(props){
  console.log(props.currentRouterPath);
  return (
    <Main>
      <h1>Admin</h1>
      <TicketList
        ticketList={props.ticketList}
        currentRouterPath={props.currentRouterPath}/>
    </Main>
  );
}


Admin.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};


export default Admin;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
padding-top: 50px;
color: white;
`;
