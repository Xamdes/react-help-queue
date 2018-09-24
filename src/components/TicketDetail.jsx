/*
* Copy to other files
* import TicketDetail from './TicketDetail';
* <TicketDetail/>
*/
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import { Link, Switch, Route } from 'react-router-dom';

function TicketDetail(props){
  return (
    <Main>
      <hr/>
      <h1>{props.selectedTicket.names} - {props.selectedTicket.location}</h1>
      <h2>Submitted {props.selectedTicket.formattedWaitTime} ago</h2>
      <Issue><em>{props.selectedTicket.issue}</em></Issue>
      <hr/>
    </Main>
  );
}


TicketDetail.propTypes = {
  selectedTicket: PropTypes.object,
};


export default TicketDetail;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
padding-top: 50px;
color: white;
`;

const HeaderThree = styled.h3`
background-color: green;
&:hover ${HeaderThree} {
  background-color: blue;
}
`;

const Issue = styled.h3`
background-color: red;
&:hover ${Issue} {
  background-color: teal;
}
`;
