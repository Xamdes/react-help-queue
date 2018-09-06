import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <Main>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </Main>
  );
}

export default Header;

const Main = styled.div`
background-color: #ecf0f1;
font-family: sans-serif;
padding-top: 50px;
`
;
