import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <Main>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link>
      <Blank> | </Blank>
      <Link to="/newticket">Create Ticket</Link>
      <Blank> | </Blank>
      <Link to="/styles">Style Tests</Link>
      <Blank> | </Blank>
      <Link to="/not-working">Bad Route</Link>
    </Main>
  );
}

export default Header;

const Main = styled.div`
background-color: lightgrey;
font-family: sans-serif;
padding-top: 50px;
`
;

const Blank = styled.span`
`
;
